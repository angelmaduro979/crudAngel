const express=require('express');
const app=express();
const path=require('path')
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config({path:path.resolve(__dirname,'./env/.env')})
const portToUse=3313

//settings

app.set('view engine','ejs');
app.set('port',process.env.PORT||portToUse)
app.set('views',path.join(__dirname,'views'))


//middlewares

app.use(morgan('dev'));
const connection=require('./database/database');
app.use(connection)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

//routes
const routes=require('./routes/routes')
app.use('/',routes)


app.listen(app.get('port'),()=>{
    console.log('Server Running in http://localhost:3313/');
})