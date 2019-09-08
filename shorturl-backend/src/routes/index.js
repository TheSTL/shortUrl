import { Router } from 'express';
import { create,
    isExist,
    getLongUrl,
    updateShortUrl, } from '../service';

const router = Router();

router.route('/create').post( async (req,res,next) => {
    try{
const {shortUrl,longUrl} = req.body;
const isAlready = await isExist({shortUrl});
let response;
if (isAlready){
  response = await  updateShortUrl({shortUrl,longUrl});
}else{
  response = await  create({shortUrl, longUrl});
}
return res.json({ ...response,status: 200});
    }
    catch(err){
        console.log(err);
        res.json({status: 500})
    }
});

router.route('/longurl/:shortUrl').get( async (req,res,next) => {
try{
const {shortUrl} = req.params;
const response = await getLongUrl({shortUrl});
return res.json({...response, status: 200 });
}
catch(err){
    console.log(err);
    res.json({status: 500})
}
});

export default router;