import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import './pass.css';

const PassShow = async () => {
    const [searchParams] = useSearchParams();
    var shortLinkQR = '';
    console.log(searchParams.get('bgurl'));
    const bgUrl = searchParams.get('bgurl');
    console.log('page is fully loaded');
        let res = await fetch(
            "http://localhost:9000/api/genQr",
            {
                method: "POST",
                body: JSON.stringify({
                    OrderID: searchParams.get('OrderID'),
                    bgurl:document.getElementById("amount").value===799?"http://ultronofficial.online/pass1.jpeg":"http://ultronofficial.online/pass2.jpeg",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let resJson = await res.json();
        console.log(resJson.code);
        shortLinkQR=(resJson.code);
  return (
    <div className="bg-img-pass" style={{background: `url(${bgUrl})`}}>
            <div className="container-pass">
              <img src={shortLinkQR} alt="gamer-img" width="100%" height="100%"/>
            </div>
          </div>
  );
};

export default PassShow;