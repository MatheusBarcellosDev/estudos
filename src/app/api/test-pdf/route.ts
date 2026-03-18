import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Test with the first available PDF
    const dir = path.join(process.cwd(), 'public', 'sample-maps');
    const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.pdf'));
    
    if (files.length === 0) {
      return NextResponse.json({ error: 'No PDFs found' }, { status: 404 });
    }

    const testFile = files[0];
    const filePath = path.join(dir, testFile);
    const buffer = fs.readFileSync(filePath);

    console.log(`[DEBUG] Testing PDF render with: ${testFile} (${buffer.length} bytes)`);

    // Step 1: test pdfjs-dist import
    // @ts-ignore
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    console.log('[DEBUG] pdfjs-dist imported OK');

    // Step 2: test canvas import
    const { createCanvas } = await import('@napi-rs/canvas');
    console.log('[DEBUG] @napi-rs/canvas imported OK');

    // Step 3: test PDF loading
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) });
    const pdf = await loadingTask.promise;
    console.log(`[DEBUG] PDF loaded OK - pages: ${pdf.numPages}`);

    // Step 4: test page rendering
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.0 });
    console.log(`[DEBUG] Viewport: ${viewport.width}x${viewport.height}`);
    
    const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx as any, viewport, canvas: canvas as any }).promise;
    console.log('[DEBUG] Page rendered OK');

    const pngBuffer = canvas.toBuffer('image/png');
    console.log(`[DEBUG] PNG size: ${pngBuffer.length} bytes`);

    return NextResponse.json({ 
      success: true, 
      file: testFile,
      pages: pdf.numPages,
      viewport: { width: viewport.width, height: viewport.height },
      pngSizeKB: Math.round(pngBuffer.length / 1024)
    });

  } catch (error: any) {
    console.error('[DEBUG] Error:', error);
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack?.split('\n').slice(0, 5)
    }, { status: 500 });
  }
}
