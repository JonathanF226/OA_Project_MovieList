import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql2.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if(err){
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id:', connection.threadId);
});

export default connection