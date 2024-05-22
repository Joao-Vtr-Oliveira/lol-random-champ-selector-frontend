import dotenv from 'dotenv';

dotenv.config();

let url = process.env.NEXT_PUBLIC_URL as string | undefined;

if(!url) url = 'http://localhost:3000';

export default url;