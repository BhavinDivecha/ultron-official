import { useEffect,useState } from 'react';
import { saveAs } from 'file-saver';


function LoadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }

    })
}
async function CallScript() {
    const loadScript = await LoadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!loadScript) {
        alert('Failed To Init Razor Pay');
        return;
    }
    else {
        alert('Success To Init Razor Pay');
    }
    return loadScript;
}
function ReturnPDfCode(bgUrl,qrData) {
    return `
    <!doctype html><title>PDF Result Template</title>
    <html><meta charset="utf-8">
    <head>
    <style>
    * {
    box-sizing: border-box;
  }
  
  .bg-img-pass {
    /* The image used */
    background-image: url(" ${bgUrl}");
  
    min-height: 426px;
    min-width:1280px;
    max-width:1280px;
  
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Add styles to the form container */
  .container-pass {
      position: absolute;
      right: 0;
      margin: 100px 64px 22px 0;
      max-width: 300px;
      padding: 16px;
  }
  </style>
  <body>
    
    
    <div id="root">
      <div class="bg-img-pass">
        <div class="container-pass">
            <img src="${qrData}" alt="gamer-img" width="100%" height="100%">
        </div>
      </div>
    </div>
  </body>
</html>
    `;
}
function showPage() {
    console.log('showPage');
    document.getElementById("loader").style.display = "none";
    document.getElementById("root").style.display = "block";
    var e = document.getElementById("RegistrationPage");
      e.scrollIntoView();
  }
async function AddRazorPayScript() {
    const amount=(document.getElementById("amount").value);

    if (document.getElementById("amount").selectedIndex === 0) {
        if (amount != 50) {
            alert("Dont Modify Amount! As Normal Pass Amount is 50Rs");
            return;
        }
    }
    else {
        if (amount != 799) {
            alert("Dont Modify Amount! As VIP Pass Amount is 799Rs");
            return;
        }
    }
    
    document.getElementById("loader").style.display = "block";
    document.getElementById("root").style.display = "none";
    // const script = CallScript();
    // const datas;
    console.log(amount);
    const data = await fetch('http://www.payment.ultronofficial.online/api/razorpay', {
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify({
            amount: document.getElementById("amount").value,
            name:document.getElementById("firstname").value,
        }),
        headers: { 'Content-type': 'application/json' },
    }).then((t) =>
        // console.log(t)
        t.json()
    )
    console.log(data);
    document.getElementById('OrderID').value = data.id.toString();
    var options = {
        "key": "rzp_live_wASVq9NNkDG0ws", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency":  data.currency.toString(),
        "name": document.getElementById("firstname").value,
        "description": "Buy Pass",
        "image": "http://www.payment.ultronofficial.online/logo.svg",
        "order_id": data.id.toString(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response) {
            console.log(response);
            alert("Payment Successful");
            showPage();
        },
        "prefill": {
            "name": document.getElementById("firstname").value,
            "email": document.getElementById("email").value,
            "contact": document.getElementById("mnumber").value,
        },
        "modal": {
            "ondismiss": function(){
                console.log('Checkout form closed');
                showPage();
            }
        }
    };
    var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
    console.log(response);
        // alert(response.error.code);
    alert(response.error.description);
    
    showPage();
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
    rzp1.open();
   
}
export default AddRazorPayScript;