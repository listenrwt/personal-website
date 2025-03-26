import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/utils/crypto';
import fs from 'fs';
import path from 'path';

// For direct access without password requirement
export async function GET() {
  try {
    // Use a hardcoded or environment-stored password for server-side decryption
    const filePath = path.join(
      process.cwd(),
      'protected',
      'encrypted-resume.pdf',
    );
    const encryptedData = fs.readFileSync(filePath);
    const decryptedData = decrypt(encryptedData);

    return new NextResponse(decryptedData, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error decrypting resume:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Keep the POST method for backward compatibility
export async function POST(req: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      'protected',
      'encrypted-resume.pdf',
    );
    const encryptedData = fs.readFileSync(filePath);
    const decryptedData = decrypt(encryptedData);

    return new NextResponse(decryptedData, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
