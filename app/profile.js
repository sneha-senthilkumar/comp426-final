export const getProfile = async function() {
    console.log("hello")
    var jwt = localStorage.getItem('jwt');
    let response = await axios ({
        method: 'get',
        url: 'http://localhost:3000/account/status',
        headers: {'Authorization': "Bearer " + jwt },
      });
      return response;
    }


export const renderProfile = function(){
    let response = getProfile();
    let username = response.data.name;
    let name = `${response.data.data.first} ${response.data.data.last}`;
    let email = data.data.email;
    let phone = data.data.phone;
    let sign = data.data.sign;
    let city = data.data.city;
    let message = data.data.message;

    return `<h1>${name}<i style="font-size: 30px;">@${username}</i></h1>
    <div class="container">
        <div class="info">
            <img id="propic" src="space.png" alt="propic goes here">
            <p>${sign} | ${city}</p>
            <p>${email} | ${phone}<p>
            <p class="about">${message}</p>
        </div></div>`;
}

export const loadtoDOM = function(){
    console.log('hi');
    let toAppend = renderProfile();
    $('#content').append(toAppend);
}

$(function() {
    loadtoDom();
});