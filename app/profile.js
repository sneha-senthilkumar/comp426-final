var jwt = localStorage.getItem('jwt');
const profile = {
    url: 'http://localhost:3000/account/status',
    headers: {'Authorization': "Bearer " + jwt },
}

export const renderProfile = async function(){
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
            let picurl = 'space.png';
            switch(sign) {
                case 'Aries':
                    picurl = 'signIcon/aries.png';
                    break;
                case 'Taurus':
                    picurl = 'signIcon/taurus.png';
                    break;
                case 'Gemini':
                    picurl = 'signIcon/gemini.png';
                    break;
                case 'Cancer':
                    picurl = 'signIcon/cancer.png';
                    break;
                case 'Leo':
                    picurl = 'signIcon/leo.png';
                    break;
                case 'Virgo':
                    picurl = 'signIcon/virgo.png';
                    break;
                case 'Libra':
                    picurl = 'signIcon/libra.png';
                    break;
                case 'Scorpio':
                    picurl = 'signIcon/scorpio.png';
                    break;
                case 'Sagittarius':
                    picurl = 'signIcon/sagittarius.png';
                    break;
                case 'Capricorn':
                    picurl = 'signIcon/capricorn.png';
                    break;
                case 'Aquarius':
                    picurl = 'signIcon/aquarius.png';
                    break;
                case 'Pisces':
                    picurl = 'signIcon/pisces.png';
                    break;
            }
            let app = `<div class="content"><h1>${name}<i style="font-size: 30px;"> @${username}</i></h1><div class="container"><div class="info">
            <img id="propic" src=${picurl} alt="propic goes here">
            <p>${sign} | ${city}</p>
            <p>${email} | ${phone}<p>
            <p class="about">${message}</p></div></div></div>`;

            $('#content').append(app);
        })
        .catch(function (error) {
            console.log(error);
        });

}

// export const loadtoDOM = async function(){
//     renderProfile().then(function (res){
//         console.log('2');
//         $('#content').append(res);
//     })
//     .catch(function (error){
//         console.log(error);
//     })
// }

$(function() {
    renderProfile();
});