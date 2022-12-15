import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import './pass.css';

const PassShow =  () => {
    const [searchParams] =  useSearchParams();
    var shortLinkQR = '';
    console.log(searchParams.get('bgurl'));
    const bgUrl = searchParams.get('bgurl');
    async function loadData()  {
        console.log('page is fully loaded');
        let res = await fetch(
            "http://localhost:9000/api/genQr",
            {
                method: "POST",
                body: JSON.stringify({
                    OrderID: searchParams.get('OrderID'),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let resJson = await res.json();
        console.log(resJson.code);
        
        shortLinkQR = (resJson.code);
        document.getElementById("inner").innerHTML =`<img src="${shortLinkQR}" alt="gamer-img" style=" width: 287px;" width="200%" height="200%"/>`
    }

  return (
          <div className="container">
                  <img src={bgUrl} alt="Snow" style={{ width: "100%"}} />
      <div className="top-right" id="inner"> <button onClick={loadData} style={{ position: "absolute",top:"80px",right:"98px",width:"100px",height:"100px"}}>Load QR</button></div>
     
    </div>
     
  );
};

export default PassShow;