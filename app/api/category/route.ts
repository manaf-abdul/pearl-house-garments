import { readData, writeData } from '@/lib/database.util';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { log } from 'console';
import { randomUUID } from 'crypto';
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
        console.log("Received file:", file);
        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const fileBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(fileBuffer);

        const response = await new Promise<UploadApiResponse | undefined>(
            (resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    {
                        tags: ['category'],
                        resource_type: 'raw',
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

        let existingData = await readData();
        let categoryName: any = formData.get('category') ? formData.get('category') : [];
        let subCategoryName: any = formData.get('subcategory') ? formData.get('subcategory') : [];
        
        if (!existingData) {
            let categorydata: any = {};
            categorydata[categoryName] = {
                id: randomUUID(),
                name: categoryName,
                subcategories: [
                    {
                        id: randomUUID(),
                        name: subCategoryName,
                        document_url: response.secure_url,
                    }
                ],
            };
            existingData['categories'] = categorydata;
        } else {
            let existingcategories = existingData['categories'] || [];
            if (existingcategories.hasOwnProperty(categoryName)) {
                let subcategory = {
                    id: randomUUID(),
                    name: subCategoryName,
                    document_url: response.secure_url,
                }
                existingcategories[categoryName]['subcategories'].push(subcategory);
                existingData['categories'] = existingcategories;
            } else {
                existingcategories[categoryName] = {
                    id: randomUUID(),
                    name: categoryName,
                    subcategories: [
                        {
                            id: randomUUID(),
                            name: subCategoryName,
                            document_url: response.secure_url,
                        }
                    ],
                };
                existingData['categories'] = existingcategories;
            }
        }

        
        console.log("Updated categories:", existingData['categories']);
        await writeData(existingData);

        return NextResponse.json(existingData['categories'] || [], { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const data = await readData();
        console.log('GET - Fetched categories:', data);
        
        return NextResponse.json(data['categories'] || [], { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to fetch data' }, { status: 500 });
    }
}