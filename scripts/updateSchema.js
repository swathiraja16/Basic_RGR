import fs from 'fs';
import path from 'path';
import { Schema } from '../data/schema';
import { printSchema } from 'graphql';

const schemaPath = path.resolve(__dirname, '../data/schema.graphql');

fs.writeFileSync(schemaPath, printSchema(Schema));

console.log("Wrote" + schemaPath);