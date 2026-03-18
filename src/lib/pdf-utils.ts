import path from 'path';
import fs from 'fs';
import { extractText } from 'unpdf';

/**
 * Extracts text from a PDF file using unpdf.
 * Works in Node.js/Edge without any browser (DOM) dependencies.
 */
export async function extractTextFromPdfUrl(pdfUrl: string): Promise<string> {
  try {
    let buffer: Buffer;

    if (pdfUrl.startsWith('/')) {
      // Local file: read directly from the filesystem
      const filePath = path.join(process.cwd(), 'public', pdfUrl);
      buffer = fs.readFileSync(filePath);
    } else {
      // External URL: fetch and convert
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
    }

    const { text } = await extractText(new Uint8Array(buffer), { mergePages: true });
    return text;

  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw new Error('Unable to parse PDF text.');
  }
}
