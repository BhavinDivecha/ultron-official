import { Component } from "react";
import Popup from 'reactjs-popup';

import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { v4 as uuid } from 'uuid';

function CheckParam() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('OrderID'));
    if (searchParams.has('OrderID')) {

        alert(searchParams.get('OrderID'));
        window.location = "/pass?OrderID=order_Ks6jb8TYdShwi8&bgurl=https://payment.ultronofficial.online/pass1.jpeg";
        // if (searchParams.get('status') === 'failure') {
        //     alert('Payment failed Retry Again');
        //     window.location = "https://ultron-official.netlify.app/";
        // }
        // else {
        //     alert('Payment Success');
        //     // window.location = "https://6396e89fd3b1f2587021ba76--chipper-croquembouche-37664d.netlify.app/";
        // }
  }  
  }
  
  export default CheckParam;