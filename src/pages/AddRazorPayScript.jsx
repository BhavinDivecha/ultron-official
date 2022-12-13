import { useEffect } from 'react';



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
async function AddRazorPayScript()  {
   
    // const script = CallScript();
    // const datas;
    console.log(document.getElementById("amount").value);
    const data = await fetch('https://payment-ultron-official.netlify.app/razorpay', {
        method: 'POST',
        body: JSON.stringify({
            amount: document.getElementById("amount").value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
    }).then((t) =>
        t.json()
    )
    console.log(data);
    document.getElementById('OrderID').value = data.id.toString();
    var options = {
        "key": "rzp_test_jJDaCGfhqmNZbu", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency":  data.currency.toString(),
        "name": document.getElementById("firstname").value,
        "description": "Buy Pass",
        "image": "https://payment-ultron-official.netlify.app/logo.svg",
        "order_id": data.id.toString(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response) {
            console.log(response);
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            alert("Payment Successful");
            const sendData = await fetch('https://payment-ultron-official.netlify.app/api/create/send/data', {
                method: 'POST',
                body: JSON.stringify({
                    OrderID: response.razorpay_order_id,
                    PaymentID: response.razorpay_payment_id,
                    firstname: document.getElementById("firstname").value,
                    email: document.getElementById("email").value,
                    mnumber: document.getElementById("mnumber").value,
                    amount: document.getElementById("amount").value,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
            }).then((t) =>
                t.json()
            )
            if (data.status === 200) {
                alert('Send Successful');
            }
        },
        "prefill": {
            "name": document.getElementById("firstname").value,
            "email": document.getElementById("email").value,
            "contact": document.getElementById("mnumber").value
        }
    };
    var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
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