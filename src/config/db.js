import mongoose from 'mongoose';

const db = process.env.API_ENV === 'production' ? 'PROD_DB' : 'DEV_DB';
const database = () => mongoose.connect(process.env[db]);

export default database;
