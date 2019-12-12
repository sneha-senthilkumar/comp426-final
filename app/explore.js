const jwt = localStorage.getItem('jwt');

export const renderUser = async function(user) {
    axios.get('http://localhost:3000/account/status',{
        headers: {'Authorization': 'Bearer ' + jwt}
    })
    .then(function (result){
        console.log(result.data);
    let res = result.data.user;
    let username = res.name;
    let sign = res.data.sign;
    let city = res.data.city;
    let name = res.data.first;
    let info = res.data.message;
    let app = `<div class="col-md-6">
    <h4>@${username}</h4>
    <h6>${sign}</h6> <br>
    <img id="propic" src="space.png" alt="propic goes here">
    <p>${name} in ${city}</p>
    <p class="info>${info}<br><br>
    <button id="matchB">Match</button>
    </p>
    </div>`;
    console.log(app);
    $(".row").append(app);

    })
    .catch(function (error) {
        console.log(error);
    })
};


export const handleMatch = function (event){

}

export const loadUsers = async function (){
    console.log('hello')
    renderUser();
}

$(function() {
    loadUsers();
});