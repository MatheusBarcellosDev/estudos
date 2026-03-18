import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'sample-images');
    
    let materials: { name: string, type: 'pdf' | 'image', url: string }[] = [];

    // Scan ONLY for Images
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir);
      files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)).forEach(f => {
        materials.push({ name: f, type: 'image', url: `/sample-images/${f}` });
      });
    }
    
    return NextResponse.json({ materials });
  } catch (error) {
    console.error("Error reading materials:", error);
    return NextResponse.json({ materials: [] });
  }
}
