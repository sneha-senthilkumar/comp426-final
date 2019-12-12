const jwt = localStorage.getItem('jwt');

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
    
    return `<div class="col-md-6">
    <h4>@${username}</h4>
    <h6>${sign}</h6> <br>
    <img id="propic" src=${picurl} alt="propic goes here">
    <p><span style="color:white">${name} in ${city}</span> <br><br>
    ${info} <br><br>
    <button id="${username}" class="matchB">Match</button></p>
    </div>`;
}


export const handleMatch = function (event){
    console.log('match clicked');

    let match = people.find(x => x.id == event.target.id);
    $(`#${event.target.id}`).replaceWith('<p style="color:lightblue">Matched!</p>');

}


export const loadUsers = function (data){
    console.log('hello')
    let app='';
    let myCity = localStorage.getItem('city');
    let mySign = localStorage.getItem('sign');
    let myCompatibleSigns =[];
    switch(mySign) {
        case 'Aries':
            myCompatibleSigns = ['Gemini','Aquarius','Leo','Sagittarius'];
            break;
        case 'Taurus':
            myCompatibleSigns = ['Pisces' ,'Cancer' ,'Virgo' ,'Capricorn'];
            break;
        case 'Gemini':
            myCompatibleSigns = ['Aries' ,'Leo' ,'Libra' ,'Aquarius'];
            break;
        case 'Cancer':
            myCompatibleSigns = ['Taurus' ,'Virgo' ,'Scorpio' ,'Pisces'];
            break;
        case 'Leo':
            myCompatibleSigns = ['Gemini' ,'Libra' ,'Aries' ,'Sagittarius'];
            break;
        case 'Virgo':
            myCompatibleSigns = ['Cancer' ,'Scorpio' ,'Taurus' ,'Capricorn'];
            break;
        case 'Libra':
            myCompatibleSigns = ['Leo' ,'Sagittarius' ,'Gemini' ,'Aquarius'];
            break;
        case 'Scorpio':
            myCompatibleSigns = ['Virgo' ,'Capricorn' ,'Cancer' ,'Pisces'];
            break;
        case 'Sagittarius':
            myCompatibleSigns = ['Libra' ,'Aquarius' ,'Aries' ,'Leo'];
            break;
        case 'Capricorn':
            myCompatibleSigns = ['Scorpio' ,'Pisces' ,'Taurus' ,'Virgo'];
            break;
        case 'Aquarius':
            myCompatibleSigns = ['Sagittarius' ,'Aries' ,'Gemini' ,'Libra'];
            break;
        case 'Pisces':
            myCompatibleSigns = ['Capricorn' ,'Taurus' ,'Cancer' ,'Scorpio'];
            break;
    }

    let compatible = data.filter(person=>{
        return (person.city==myCity && (person.sign==myCompatibleSigns[1] || person.sign==myCompatibleSigns[2] || person.sign==myCompatibleSigns[3] || person.sign==myCompatibleSigns[4]));
    })
    console.log(compatible);
    console.log(compatible[0]);
    if (compatible.length == 0) {
        console.log('no compatible');
        app=`<div class="col-md-6">
        <h4>oops, there are no people with compatible signs in your area</h4>
        </div>`;
    } else {
        for (let i = 0; i<compatible.length; i++){
            console.log(compatible);
            console.log(compatible[i]);
            app= app + renderUser(compatible[i]);
        }
    }
    $(".row").append(app);


    $(document).on("click", ".matchB", {},handleMatch);

}

$(function() {
    console.log('1');
    loadUsers(people);
});