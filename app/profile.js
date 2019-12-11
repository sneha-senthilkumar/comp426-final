export const renderProfile = function(user) {
    const getProfile = async function(event) {
        console.log("hello")
        var jwt = localStorage.getItem('jwt');
        let response = await axios ({
            method: 'get',
            url: 'http://localhost:3000/account/status',
            headers: {'Bearer': jwt},
          });
          return response;
        }
    let username = response.data.name;
    let name = `${response.data.data.first} ${response.data.data.last}`;
    let email = data.data.email;
    let phone = data.data.phone;
    let sign = data.data.sign;
    let city = data.data.city;
    let message = data.data.message;
      
}

