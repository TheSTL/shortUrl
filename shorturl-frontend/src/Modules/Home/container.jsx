import React ,{useState } from 'react';
import axios from 'axios';
import HomeComponent from './component';
const createApi = "http://localhost:3000/create";


export default function Homecontainer() {
        const [shortUrl,setShortUrl] = useState('');
        const [longUrl,setLongUrl] = useState('');
        const [message, setMessage] = useState('');
         
        const onChangeShortUrl = (e, data) => {
            setShortUrl(data.value);
        }
        const onChangeLongUrl = (e, data) => {
            setLongUrl(data.value)
        }
        const onSave = async (e) => {
            if (!shortUrl || !longUrl){
                setMessage('Short-Url/Long-Url is empty.');
                return false;
            }
             const response = await axios.post(createApi,{shortUrl,longUrl});
            if (response.data.status === 200){
                setMessage(<span> Try &nbsp;
                    <a href={`http://thestl/${shortUrl}`}>{`http://thestl/${shortUrl}`}</a> 
                    &nbsp;
                    on your browser to view
                    &nbsp;
                    <a href={longUrl}>{longUrl}</a>.
                    </span>);
            }else{
                setMessage('Something Went Wrong.')
            }             
            
        }
    return (
        <HomeComponent 
        shortUrl={shortUrl}
        longUrl={longUrl}
        message={message}
        onChangeShortUrl={onChangeShortUrl}
        onChangeLongUrl={onChangeLongUrl}
        onSave={onSave}
        />
    )
}
