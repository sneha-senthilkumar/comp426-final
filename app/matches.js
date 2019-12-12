export const renderMatch = async function(user) {
    // TODO: Copy your code from a04 to render the hero card
    axios.get('http://localhost:3000/account/status',{
        headers: {'Authorization': 'Bearer ' + jwt}
    })
    .then(function (result){
        console.log(result.data);
    let res = result.data;
    let username = res.data.username;
    let sign = res.data.sign;
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


export const handleRemove = function (event){

}

export const loadMatches = function (){
    
    $(".row").append
}