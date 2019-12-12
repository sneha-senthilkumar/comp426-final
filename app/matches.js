var jwt = localStorage.getItem('jwt');

export const renderUser = function(user) {
    let d = user;
    console.log(d);
    let username = user.name;
    let sign = user.sign;
    let city = user.city;
    let name = `${user.first} ${user.last}`;
    let info = user.message;
    let picurl = '';
    switch (sign) {
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
    
    return `<div id ="${username}" class="col-md-6">
    <h4>@${username}</h4>
    <h6>${sign}</h6> <br>
    <img id="propic" src=${picurl} alt="propic goes here">
    <p><span style="color:white">${name} in ${city}</span> <br><br>
    ${info} <br><br>
    <button class="removeB">Remove</button></p>
    </div>`;
}


export const handleRemove = async function (event){
    event.preventDefault();
    console.log('removed');
    let match = people.find(x => x.name == event.target.id);

    let response = await axios({
        method: 'delete',
        url: 'http://localhost:3000/private/matches/',
        params: {
            "data": [match],
        },
        headers: { 'Authorization': `Bearer ` + jwt },
    });

    $(`.${event.target.id}`).remove();
}


export const loadUsers = async function (data){
    console.log('hello')
    let app='';


    let matchRes = await axios({
        method: 'get',
        url: 'http://localhost:3000/private/matches',
        headers: { 'Authorization': `Bearer ` + jwt },
    });

    console.log(matchRes.data);

    console.log('hey');
    if (matchRes.length == 0) {
        console.log('no matches');
        app=`<div class="col-md-6">
        <h4>oops, you haven't matched anyone yet!</h4>
        </div>`;
    } else {
        console.log('else');
        console.log(matchRes.data.result.length);
        for (let i = 0; i<matchRes.data.result.length; i++){
            console.log(matchRes.data[i]);
            if (matchRes.data.result[i] != null) {
            app= app + renderUser(matchRes.data.result[i]);
            }
        }
    }
    let head = `<a id="welcome" class="navbar-brand" href="#" style="color: rgb(255,253,253);"><i class="fa fa-user-circle-o"></i>&nbsp; Welcome ${localStorage.getItem('first')}!</a>`;


    $(".row").append(app);
    $('#welcome').replaceWith(head);


    $(document).on("click", ".removeB", {},handleRemove);

}

$(function() {
    console.log('1');
    loadUsers(people);
});