'use client';
import { useEffect, useState } from 'react';
import styles from './resume.module.scss';
import { Reveal } from '@/components/common/Reveal';
import { Heading } from '@/components/nav/Heading';

export default function ResumePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchDecryptedResume = async () => {
      try {
        // Use the GET endpoint that directly decrypts the resume
        const response = await fetch('/api/resume');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (err) {
        console.error('Error fetching resume:', err);
        setError('Failed to load the resume. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDecryptedResume();

    // Clean up blob URL when component unmounts
    return () => {
      if (pdfUrl) {
        window.URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  return (
    <>
      <Heading />
      <div className={styles.container}>
        <div className={styles.pdfContainer}>
          {loading && <div className={styles.loading}>Loading resume...</div>}

          {error && <p className={styles.error}>{error}</p>}

          {pdfUrl && !loading && (
            <iframe src={pdfUrl} className={styles.pdfViewer} title='Resume' />
          )}
        </div>
      </div>
    </>
  );
}
