const myconnection=require('express-myconnection');
const mysql=require('mysql');
const connection={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
}

const finalConnection=myconnection(mysql,connection,'single');

module.exports=finalConnection;