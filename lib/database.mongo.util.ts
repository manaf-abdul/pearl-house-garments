// lib/database.mongo.util.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? 'app';

if (!uri) {
  throw new Error('MONGODB_URI environment variable is required');
}

// Define the exact shape of the document we store
type StorageDoc = {
  _id: string; // we use a string id 'storage'
  categories: Record<string, any>;
};

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;

  if (!cachedClient) {
    cachedClient = new MongoClient(uri as string, {
      maxPoolSize: 10,
    });
  }

  // Modern MongoClient connect() is idempotent and safe to call multiple times.
  await cachedClient.connect();

  cachedDb = cachedClient.db(dbName);
  return cachedDb;
}

export async function readData(): Promise<{ categories: Record<string, any> }> {
  const db = await connectToDatabase();

  // use the generic so _id is typed as string
  const coll = db.collection<StorageDoc>('storage');

  const doc = await coll.findOne({ _id: 'storage' }); // no TS error now

  if (!doc) {
    const defaultDoc: StorageDoc = { _id: 'storage', categories: {} };
    await coll.insertOne(defaultDoc);
    return { categories: {} };
  }

  return { categories: doc.categories ?? {} };
}

export async function writeData(data: { categories: Record<string, any> } | any): Promise<void> {
  const db = await connectToDatabase();
  const coll = db.collection<StorageDoc>('storage');

  const categories = (data && data.categories) ? data.categories : (typeof data === 'object' ? data : {});

  await coll.updateOne(
    { _id: 'storage' },
    { $set: { categories } },
    { upsert: true }
  );
}
