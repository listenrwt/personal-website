'use client';
import { useState } from 'react';
import styles from './resume.module.scss';
import { Reveal } from '@/components/common/Reveal';
import { Heading } from '@/components/nav/Heading';

export default function ResumePage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('An error occurred');
    }
    setLoading(false);
  };

  return (
    <>
      <Heading />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Reveal>
            <h1>Protected Resume</h1>
          </Reveal>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            disabled={loading}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'View Resume'}
          </button>
        </form>
      </div>
    </>
  );
}
