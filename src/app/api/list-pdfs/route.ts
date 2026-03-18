import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'sample-images');
    
    let materials: { name: string, type: 'pdf' | 'image', url: string }[] = [];

    // Scan ONLY for Images in the new SAFE directory
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir);
      files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)).forEach(f => {
        // Point to the proxy instead of public folder
        materials.push({ 
          name: f, 
          type: 'image', 
          url: `/api/image-proxy?file=${encodeURIComponent(f)}` 
        });
      });
    }
    
    return NextResponse.json({ materials });
  } catch (error) {
    console.error("Error reading materials:", error);
    return NextResponse.json({ materials: [] });
  }
}
