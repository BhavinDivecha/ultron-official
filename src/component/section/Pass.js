import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import './pass.css';

const PassShow =  () => {
    const [searchParams] =  useSearchParams();
    var shortLinkQR = '';
    console.log(searchParams.get('bgurl'));
    const bgUrl = searchParams.get('bgurl');
    
  return (
    <div className="bg-img-pass" style={{background: `url(${bgUrl})`}}>
            <div className="container-pass">
              <img src={shortLinkQR} alt="gamer-img" width="100%" height="100%"/>
            </div>
          </div>
  );
};

export default PassShow;