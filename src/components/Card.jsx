import React from 'react';
import axios from 'react';
import { useState,useEffect } from 'react';




const Card = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
    useEffect(() => {

       fetch('https://api9.parentune.com/content/v2/dailyfocus', {
                method: 'GET',
                headers: {
                  'accept': 'application/json, text/plain, /',
                  'accept-language': 'en-US,en;q=0.9',
                  'authtoken': '9467c5b4e290227a2a270f4a1ec2a37643b4a5dfd90a993b4e6ceb61ea0d5b5a',
                  'instanceid': 'c4b50b993092ab3ed5f35ad684f82b4e6d081a4ed65c49902d80dde82183057a',
                  'lang': 'en',
                  'origin': 'https://www.parentune.com',
                  'priority': 'u=1, i',
                  'referer': 'https://www.parentune.com/',
                  'sec-fetch-dest': 'empty',
                  'sec-fetch-mode': 'cors',
                  'sec-fetch-site': 'same-site',
                  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
                  'userid': '3781928'
                }
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                setData(data);
                setLoading(false);
              })
              .catch(error => {
                setError(error);
                setLoading(false);
              });  
        }
            
    
    ,[])
    // console.log(result,"response..")
    console.log(data,"dajhfjhdhsfghjh")
  return (
    <div>
   
    </div>
    
  )
}

export default Card