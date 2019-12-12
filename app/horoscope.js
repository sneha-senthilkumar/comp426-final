var jwt = localStorage.getItem('jwt');
const profile = {
    url: 'http://localhost:3000/account/status',
    headers: {'Authorization': "Bearer " + jwt },
}

export const renderHoroscope = async function(){
    axios.get('http://localhost:3000/user/info',{
        headers: {'Authorization': 'Bearer ' + jwt}
    })
        .then(function (result) {
            console.log(result.data.result);
            let response = result.data.result;
            let username = localStorage.getItem('name');
            let name = `${response.first} ${response.last}`;
            let email = response.email;
            let phone = response.phone;
            let sign = response.sign;
            let city = response.city;
            let message = response.message;
            
            let head = `<a id="welcome" class="navbar-brand" href="#" style="color: rgb(255,253,253);"><i class="fa fa-user-circle-o"></i>&nbsp; Welcome ${response.first}!</a>`;
            console.log(head);
            $('#welcome').replaceWith(head);
            let comp = `<p>`;
            switch(sign) {
                case 'Aries':
                    comp = `<p id="compatible">Gemini<br>Aquarius<br>Leo<br>Sagittarius</p>`;
                    break;
                case 'Taurus':
                    comp = `<p id="compatible">Pisces<br>Cancer<br>Virgo<br>Capricorn</p>`;
                    break;
                case 'Gemini':
                    comp = `<p id="compatible">Aries<br>Leo<br>Libra<br>Aquarius</p>`;
                    break;
                case 'Cancer':
                    comp = `<p id="compatible">Taurus<br>Virgo<br>Scorpio<br>Pisces</p>`;
                    break;
                case 'Leo':
                    comp = `<p id="compatible">Gemini<br>Libra<br>Aries<br>Sagittarius</p>`;
                    break;
                case 'Virgo':
                    comp = `<p id="compatible">Cancer<br>Scorpio<br>Taurus<br>Capricorn</p>`;
                    break;
                case 'Libra':
                    comp = `<p id="compatible">Leo<br>Sagittarius<br>Gemini<br>Aquarius</p>`;
                    break;
                case 'Scorpio':
                    comp = `<p id="compatible">Virgo<br>Capricorn<br>Cancer<br>Pisces</p>`;
                    break;
                case 'Sagittarius':
                    comp = `<p id="compatible">Libra<br>Aquarius<br>Aries<br>Leo</p>`;
                    break;
                case 'Capricorn':
                    comp = `<p id="compatible">Scorpio<br>Pisces<br>Taurus<br>Virgo</p>`;
                    break;
                case 'Aquarius':
                    comp = `<p id="compatible">Sagittarius<br>Aries<br>Gemini<br>Libra</p>`;                    
                    break;
                case 'Pisces':
                    comp = `<p id="compatible">Capricorn<br>Taurus<br>Cancer<br>Scorpio</p>`;
                    break;
            }
            $('#compatible').replaceWith(comp);

        })
        .catch(function (error) {
            console.log(error);
        });

}


$(function() {
    renderHoroscope();
});