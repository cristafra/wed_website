

async function sendForm() {

    console.log("ciao qui");
    var data = JSON.stringify({
                    name:document.getElementById("name").value,
                    phone:document.getElementById("phone").value,
                    email:document.getElementById("email").value,
                    guests:document.getElementById("guests").value,
                    names_companions:document.getElementById("names_companions").value,
                    food:document.getElementById("food").value,
                    message:document.getElementById("message").value,
                }); // string or object
    console.log(data);
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz8PCIrZFjUxN2SU0D_-2gcLMilWYOXDhD5vLDZuBw4rFMuE8zfqBqQGRlXzr2CO0uh/exec'
        , {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST',
        },
        mode:"cors"
        }).then((response) => 
            {console.log(response)});
        
       // const result = await response.json()
    }
    catch(error)
        {console.log(error)}


    //const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    
    console.log("finito");
  }

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
