import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import model from './config/database'
import Routes from './routes';


const app =express();
const PORT =process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Routes);

model.sequelize.sync()
.then(()=>{
    console.log('Databse has benn synced')
})
.catch((err)=>console.log(err))
app.listen(PORT, () => {
    console.log(`Server is running at 3000`)
})