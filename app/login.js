$(function() {
    console.log("hi"); 
    $('#login').click('submit', logIntoAccount);
});

const logIntoAccount = async function(event) {
    console.log("hello")
    event.preventDefault();
      let response = await axios ({
        method: 'post',
        url: 'http://localhost:3000/account/login',
        data: {
          "name": $(`#username`).val(),
          "pass": $(`#password`).val(),
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