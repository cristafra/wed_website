

const sendForm = async () => {

    console.log("ciao qui");
    var body = {
                    "name":document.getElementById("name").value,
                    "phone":document.getElementById("phone").value,
                    "email":document.getElementById("email").value,
                    "guests":document.getElementById("guests").value,
                    "names_companions":document.getElementById("names_companions").value,
                    "food":document.getElementById("food").value,
                    "msg":document.getElementById("msg").value,
                }; // string or object
    console.log(body);
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbz8PCIrZFjUxN2SU0D_-2gcLMilWYOXDhD5vLDZuBw4rFMuE8zfqBqQGRlXzr2CO0uh/exec', {
      method: 'POST',
      body:body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
