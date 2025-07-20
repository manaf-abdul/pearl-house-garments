import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'database', 'storage.json');
const defaultData = { categories: {} };

// Initialize database file
export async function initializeDb() {
    try {
        // Ensure directory exists
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });
        console.log('initializeDb - Directory ensured:', dir);

        // Check if file exists
        try {
            await fs.access(filePath);
            console.log('initializeDb - File exists:', filePath);

            // Read and validate file content
            const fileContent = await fs.readFile(filePath, 'utf8');
            console.log('initializeDb - Raw file content:', fileContent);

            if (!fileContent || fileContent.trim() === '') {
                console.warn('initializeDb - File is empty, initializing with default data');
                await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
                return;
            }

            // Validate JSON
            const parsedData = JSON.parse(fileContent);
            if (!parsedData || typeof parsedData !== 'object' || Array.isArray(parsedData)) {
                console.warn('initializeDb - Invalid data, resetting to default');
                await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
            }
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                console.log('initializeDb - File missing, creating with default data');
                await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
            } else {
                throw error;
            }
        }
    } catch (error: any) {
        console.error('initializeDb - Error:', {
            error: error.message,
            stack: error.stack,
            filePath,
        });
        throw new Error('Failed to initialize database: ' + error.message);
    }
}

// Read data from JSON file
export async function readData(): Promise<any> {
    try {
        // Ensure file is initialized
        await initializeDb();
        const fileContent = await fs.readFile(filePath, 'utf8');
        console.log('readData - Raw file content:', fileContent);

        if (!fileContent || fileContent.trim() === '') {
            console.warn('readData - File is empty, returning default data');
            await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
            return defaultData;
        }

        const data = JSON.parse(fileContent);
        console.log('readData - Parsed data:', JSON.stringify(data, null, 2));
        return data;
    } catch (error: any) {
        console.error('readData - Error:', {
            error: error.message,
            stack: error.stack,
            filePath,
        });
        throw new Error('Failed to read data: ' + error.message);
    }
}

// Write data to JSON file
export async function writeData(data: any): Promise<void> {
    try {
        console.log('writeData - Data to write:', JSON.stringify(data, null, 2));
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            console.warn('writeData - Invalid data, using default:', data);
            data = defaultData;
        }

        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('writeData - Data written successfully to:', filePath);

        // Verify file content
        const fileContent = await fs.readFile(filePath, 'utf8');
        console.log('writeData - Raw file content after write:', fileContent);
        console.log('writeData - Parsed written data:', JSON.parse(fileContent));
    } catch (error: any) {
        console.error('writeData - Error writing to file:', {
            error: error.message,
            stack: error.stack,
            filePath,
        });
        throw new Error('Failed to write data: ' + error.message);
    }
}