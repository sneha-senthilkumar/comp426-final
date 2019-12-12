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
      window.location.href = "horoscope.html";
    
}


document.getElementById("focus").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }

    // Enter is pressed
    if (e.keyCode == 13) { submitFocus(event); }
}, false)



const submitFocus = async function(event){
    console.log("made it in");
    let response = await axios ({
        method: 'post',
        url: 'http://localhost:3000/public',
        data: {
          "focus": $(`#focus`).val()
        }
    });

    $('#focus').replaceWith(`<p style="font-style:italic; text-align:center; color:#8fabf1">`+$(`#focus`).val()+`<p>`);
    
}




