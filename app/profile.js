const createAccount = async function(event) {
    console.log("hello")
    event.preventDefault();
      let response = await axios ({
        method: 'get',
        url: 'http://localhost:3000/account/status',
        data: {
          "name": $(`#username`).val(),
          "pass": $(`#password`).val(),
              "data": {        
              "email": $(`#email`).val(),
              "first": $(`#first`).val(),
              "last": $(`#last`).val(),
              "phone": $(`#phone`).val(),
              "sign": $(`#sign`).val(),
              "city": $(`#city`).val(),
              "message": $(`#message`).val(),
              }
          }
      });
      console.log("done!");
      window.location.href = "http://localhost:3001/"
    
  }
