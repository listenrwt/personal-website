import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/utils/crypto';
import fs from 'fs';
import path from 'path';

const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_RESUME_PASSWORD;

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password !== CORRECT_PASSWORD) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

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
