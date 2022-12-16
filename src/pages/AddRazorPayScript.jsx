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
    const name_user=(document.getElementById("firstname").value);
    const email=(document.getElementById("email").value);
    const number = (document.getElementById("mnumber").value);

    if (document.getElementById("amount").selectedIndex === 0) {
        if (amount !== 50) {
            alert("Dont Modify Amount! As Normal Pass Amount is 50Rs");
            return;
        }
    }
    else {
        if (amount !== 799) {
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
            amount: amount,
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
        "name": name_user,
        "description": "Buy Pass",
        "image": "http://www.payment.ultronofficial.online/logo.svg",
        "order_id": data.id.toString(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response) {
            console.log(response);
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            const data = await fetch('http://www.payment.ultronofficial.online/api/create/send/data', {
                method: 'POST',
                // mode: 'no-cors',
                body: JSON.stringify({
                    OrderID: response.razorpay_order_id,
                    PaymentID: response.razorpay_payment_id,
                    firstname: name_user,
                    email: email,
                    mnumber: number,
                    amount: amount,
                }), headers: { 'Content-type': 'application/json' },
            }).then((t) =>
                // console.log(t)
                t.json()
            )
            console.log(data);
            var bgUrl = '';
            if (amount === '10') {
                bgUrl = 'http://www.blackstonegamedevelopment.in/pass2.jpeg';
            }
            else {
                bgUrl = 'http://www.blackstonegamedevelopment.in/pass1.jpeg';
            }
            const data_pdf = await fetch('http://www.payment.ultronofficial.online/api/sendmail', {
                method: 'POST',
                // mode: 'no-cors',
                body: JSON.stringify({
                    OrderID: response.razorpay_order_id,
                    amount: amount,
                    email:email,
                    bgurl:amount===799?"https://payment.ultronofficial.online/pass1.jpeg":"https://payment.ultronofficial.online/pass2.jpeg",
                }), headers: { 'Content-type': 'application/json' },
            }).then((t) =>
            // console.log(t)
            t.json()
        );
            // var opt = {
            //     margin:       1,
            //     filename:     response.razorpay_order_id+'.pdf',
            //     image:        { type: 'jpeg', quality: 0.98 },
            //     html2canvas:  { scale: 2 },
            //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            //   };
            // This will implicitly create the canvas and PDF objects before saving.
            // window.html2pdf().from(ReturnPDfCode({
            //     bgUrl: bgUrl,
            //     qrData: 'data:image/png;base64,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'
            // }
            // )).save();
            console.log(data_pdf);
            alert("Payment Successful");
            showPage();
        },
        "prefill": {
            "name": name_user,
            "email": email,
            "contact": number
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
    console.log(response);
    alert(response.error.description);
    
    showPage();
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
});
    rzp1.on('payment.cancelled', function (response) {
    // alert(response.error.code);


    alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
});
    rzp1.open();
   
}
export default AddRazorPayScript;