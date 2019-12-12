var jwt = localStorage.getItem('jwt');
const profile = {
    url: 'http://localhost:3000/account/status',
    headers: {'Authorization': "Bearer " + jwt },
}

export const renderHoroscope = async function(){
    let sign = "";
    axios.get('http://localhost:3000/account/status',{
        headers: {'Authorization': 'Bearer ' + jwt}
    })
        .then(function (result) {
            console.log(result);
            let response = result.data;
            let username = response.user.name;
            let name = `${response.user.data.first} ${response.user.data.last}`;
            let email = response.user.data.email;
            let phone = response.user.data.phone;
            let sign = response.user.data.sign;
            let city = response.user.data.city;
            let message = response.user.data.message;
            

        })
        .catch(function (error) {
            console.log(error);
        });

        let horo = await axios ({
            method: 'get',
            url: 'http://ohmanda.com/api/horoscope/' + sign.toLowerCase()
        });
       // let horo = axios.get('http://ohmanda.com/api/horoscope/' + sign.toLowerCase(),{
       //     headers: {'Access-Control-Allow-Origin': '*'}
       // });

       console.log(horo);
       // let app = `<div class="content"><h1>${name}<i style="font-size: 30px;"> @${username}</i></h1><div class="container" style="text-align: right;"><button id="editB">Edit</button><div class="info">
       // <img id="propic" src=${picurl} alt="propic goes here">
       // <p>${sign} | ${city}</p>
       // <p>${email} | ${phone}<p>
       // <p class="about">${message}</p></div></div></div>`;

       $('#daily').replaceWith(horo);


       // $(document).on("click", "#editB", {res:response},handleEditButtonPress);
       // $(document).on("click", "#cancelB", {res:app}, handleCancelButtonPress);

}

$(function() {
    renderHoroscope();
});