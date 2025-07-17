// app/api/upload/route.ts
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const response = await new Promise<UploadApiResponse | undefined>(
      (resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            tags: ['hero-carousel'],
            resource_type: 'auto',
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        ).end(buffer);
      }
    );

    if (!response) {
      throw new Error('Cloudinary did not return a response.');
    }

    return NextResponse.json({
        public_id: response.public_id,
        type: response.resource_type === 'video' ? 'video' : 'image',
        src: response.secure_url,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}