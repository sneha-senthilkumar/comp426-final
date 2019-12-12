const jwt = localStorage.getItem('jwt');

export const renderMatch = async function(user) {
    axios.get('http://localhost:3000/account/status',{
        headers: {'Authorization': 'Bearer ' + jwt}
    })
    .then(function (result){
        console.log(result.data);
    let res = result.data;
    let username = res.data.username;
    let sign = res.data.sign;
    

    let head = `<a id="welcome" class="navbar-brand" href="#" style="color: rgb(255,253,253);"><i class="fa fa-user-circle-o"></i>&nbsp; Welcome ${res.first}!</a>`;
    $('#welcome').replaceWith(head);

    return `<div class="col-md-6">
    <h4>@${username}</h4>
    <h6>${sign}</h6> <br>
    <img id="propic" src="space.png" alt="propic goes here">
    <p id= "info1">[insert info]<br><br>
    <button id="removeMatchB">Remove</button>
    </p>
    </div>`;
    })
    .catch(function (error) {
        console.log(error);
    })
};

    console.log(matchRes.data);

// export const handleRemove = function (event){

// }

export const loadMatches = function (){
    
    $(".row").append
}

$(function() {
    renderMatch();
});