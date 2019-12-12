$(function() {
    console.log("hi"); 

    $('#login').click('submit', logIntoAccount);  
     
});

document.getElementById("login-form").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;     
    if (key == 13) {
      e.preventDefault();
    }
}


const logIntoAccount = async function(event) {
    console.log("hello")
    event.preventDefault();
      let response = await axios ({
        method: 'post',
        url: 'http://localhost:3000/account/login',
        data: {
          "name": $(`#username`).val(),
          "pass": $(`#password`).val()
        }
      });

      window.localStorage.setItem('jwt', response.data.jwt);
      window.localStorage.setItem('email', response.data.data.email);
      window.localStorage.setItem('first', response.data.data.first);
      window.localStorage.setItem('last', response.data.data.last);
      window.localStorage.setItem('phone', response.data.data.phone);
      window.localStorage.setItem('sign', response.data.data.sign);
      window.localStorage.setItem('city', response.data.data.city);
      window.localStorage.setItem('message', response.data.data.message);
      window.localStorage.setItem('name', $(`#username`).val());
      window.localStorage.setItem('loggedIn', 'true');


      console.log("done!");

      
      let userRes = await axios ({
        method: 'post',
        url: 'http://localhost:3000/user/info',
        data: {
          "data": {
           "email": response.data.data.email,
            "first": response.data.data.first,
            "last": response.data.data.last,
            "phone": response.data.data.phone,
            "sign": response.data.data.sign,
            "city": response.data.data.city,
            "message": response.data.data.message,
            "type": "merge"
          }},
        headers: {'Authorization' : `Bearer ` + response.data.jwt},
      });
      window.location.href = "horoscope.html";
    
}


document.getElementById("focus").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { submitFocus(event); }
}, false)



const submitFocus = async function(event){
    event.preventDefault();
    
    let response = await axios ({
        method: 'post',
        url: 'http://localhost:3000/public/focus',
        data: {
          "data": [document.getElementById("focus").value],
          "type": "merge"
        }
    });

    $('#focus').replaceWith(`<p style="font-style:italic; text-align:center; color:#8fabf1">`+$(`#focus`).val()+`<p>`);
    
}




