// app/api/media/route.ts

import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
// import { MediaItem } from '../../../types'; // Adjust path if needed
interface MediaItem {
  public_id: string;
  type: 'image' | 'video';
  src: string;
}
// Configure Cloudinary from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET handler for fetching all media
export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('tags=hero-carousel')
      .sort_by('created_at', 'desc')
      .execute();

    const media: MediaItem[] = result.resources.map((item: any) => ({
      public_id: item.public_id,
      type: item.resource_type === 'video' ? 'video' : 'image',
      src: item.secure_url,
    }));

    return NextResponse.json(media);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch media from Cloudinary' },
      { status: 500 }
    );
  }
}

// DELETE handler for removing a media item
export async function DELETE(request: Request) {
  try {
    const { public_id } = await request.json();

    if (!public_id || typeof public_id !== 'string') {
      return NextResponse.json(
        { error: 'Public ID is required' },
        { status: 400 }
      );
    }

    await cloudinary.uploader.destroy(public_id);

    return NextResponse.json({ message: 'Media deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete media' },
      { status: 500 }
    );
  }
}