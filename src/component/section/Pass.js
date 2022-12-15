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
        document.getElementById("inner").innerHTML =`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAONSURBVO3BQa7cVgADwebD3P/KHS+y4EqAIM2P7bAq/sLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlw0NJ+EkqLQlNpSWhqbQkXFF5Igk/SeWJw0w5zJTDTPnwMpU3JeGOJDSVloSm8pNU3pSENx1mymGmHGbKhy9Lwh0qT6jckYQ3qdyRhDtUvukwUw4z5TBTPvzhVFoSmkpTaUm4otKS8Dc7zJTDTDnMlA9/uCRcScITSWgqLQl/k8NMOcyUw0z58GUq36RyJQlNpSWhqdyh8oTK7+QwUw4z5TBTPrwsCT8pCU3lTUloKi0JTeVKEn5nh5lymCmHmRJ/4S+ShCsqLQlXVFoSmsrf5DBTDjPlMFM+PJSEpnIlCd+kciUJV1SeSEJTuZKEptKScIfKE4eZcpgph5kSf+GLktBUnkjCFZWWhCdU3pSEJ1S+6TBTDjPlMFM+PJSEpvKmJDSVloSWhKZyJQlNpSXhikpLQlNpKleS0FSuJKGpPHGYKYeZcpgpH16WhKbSknBFpam0JFxRaUl4QuVNSWgqV5JwReVNh5lymCmHmfLhy5JwRxLepNKS0FRaEp5QaUloKneotCS0JDSVJw4z5TBTDjPlw8tUWhLuULmShCtJuKLSktBUWhKeUGlJeJPKmw4z5TBTDjPlw8uS0FTuSMIdKi0Jd6g8oXIlCU2lJaGptCRcSUJTeeIwUw4z5TBTPrxMpSXhikpTeZPKlSTcodKS0FSayh1JuEPlTYeZcpgph5ny4Yep3JGEptKS0FRaEu5QeSIJT6i0JDSVbzrMlMNMOcyUDw+pXFF5QuUJlZaEpnJHEq6o3JGEO5LQVN50mCmHmXKYKR8eSsJPUrmShCsqLQnflISmciUJTeVKEprKE4eZcpgph5ny4WUqb0rCEyotCU2lJaGptCTcofInOcyUw0w5zJQPX5aEO1SeUGlJ+ElJeEKlJeEnHWbKYaYcZsqH/xmVloQ7VFoSmkpLwhWVloSm0pLwTYeZcpgph5ny4Q+n0pJwJQlNpSXhDpUrKi0JLQlNpSXhJx1mymGmHGbKhy9T+Z0l4Y4k3KFyRxL+S4eZcpgph5ny4WVJ+ElJaCotCW9SaUm4koQrKi0JV1RaEt50mCmHmXKYKfEXZv51mCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKf8ArKKIKcuRzPkAAAAASUVORK5CYII=" alt="gamer-img" width="100%" height="100%"/>`
    }

  return (
    <div className="bg-img-pass" style={{background: `url(${bgUrl})`}}>
          <div className="container-pass" id="inner">
              <button onClick={loadData}>Load QR</button>
              
            </div>
          </div>
  );
};

export default PassShow;