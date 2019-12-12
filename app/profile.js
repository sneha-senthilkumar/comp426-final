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
            let app = `<div class="content"><h1>${name}<i style="font-size: 30px;"> @${username}</i></h1><div class="container" style="text-align: right;"><button id="editB">Edit</button><div class="info">
            <img id="propic" src=${picurl} alt="propic goes here">
            <p>${sign} | ${city}</p>
            <p>${email} | ${phone}<p>
            <p class="about">${message}</p></div></div></div>`;

            $('#content').replaceWith(app);


            $(document).on("click", "#editB", {res:response},handleEditButtonPress);
            $(document).on("click", "#cancelB", handleCancelButtonPress);
            $(document).on("submit", {user:username}, handleSubmit);

        })
        .catch(function (error) {
            console.log(error);
        });

}

export const handleEditButtonPress = function(event){
    let response = event.data.res;
    let username = response.user.name;
    let first = response.user.data.first;
    let last = response.user.data.last;
    let email = response.user.data.email;
    let phone = response.user.data.phone;
    let sign = response.user.data.sign;
    let city = response.user.data.city;
    let message = response.user.data.message;
    let editForm=`<div id="content"><div class="content"><h1>Edit Your Profile<i style="font-size: 30px;"> @${username}</i></h1><div class="container" style="text-align: right;"><button id="cancelB">Cancel</button><div class="info">
    <form method="post" id = "editForm">
    <div class="form-group">Email<input class="form-control is-invalid" type="email" id="email" value=${email} /><small class="form-text text-danger">Please enter a correct email address.</small></div>
    <div class="form-group">First Name<input class="form-control" type="text" id="first" value=${first} /></div>
    <div class="form-group">Last Name<input class="form-control" type="text" id="last" value=${last} /></div>
    <div class="form-group">Phone Number<input class="form-control" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value=${phone}></div>
    <div class="form-group">Star Sign<select class="form-control" id="sign" name="sign">
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>
    </div>
    <div class="form-group">Closest City<select class="form-control" id="city" name="city">
        <option value="Raleigh">Raleigh</option>
        <option value="Durham,">Durham</option>
        <option value="Chapel Hill">Chapel Hill</option>
        <option value="Cary">Cary</option>
        <option value="Charlotte">Charlotte</option>
        <option value="Wilmington">Wilmington</option>
        <option value="Greenville">Greenville</option>
        <option value="Boone">Boone</option>
        <option value="Greensboro">Greensboro</option>
        <option value="Asheville">Asheville</option>
        <option value="Pittsboro">Pittsboro</option>
        <option value="Winston">Winston-Salem</option>
      </select>
    </div>
    <div class="form-group">Description<textarea class="form-control" id="message" name="message" rows="14">${message}</textarea></div>
    <div class="form-group"><button class="btn btn-primary" type="submit" id="submitB">Save Changes</button></div></div></div></div></div>`
    $('.content').replaceWith(editForm);
}

export const handleCancelButtonPress = function(event){
    $('.content').remove();
    renderProfile();
}

export const handleSubmit= async function(event){
    event.preventDefault();
    console.log('submit clicked');
    let username = event.data.user;
    console.log(username);
    console.log($(`#email`).val())
    let userRes = await axios ({
        method: 'put',
        url: 'http://localhost:3000/user/info',
        data: {
          "data": {
           "email": response.data.data.email,
            "first": response.data.data.first,
            "last": response.data.data.last,
            "phone": response.data.data.phone,
            "sign": response.data.data.sign,
            "city": response.data.data.city,
            "message": response.data.data.message,
            "type": "merge"
          }},
        headers: {'Authorization' : `Bearer ` + response.data.jwt},
      });





    axios.put('http://localhost:3000/user/info',{
        // headers: {'Authorization': 'Bearer ' + jwt}
        data: {
            "data": {        
                "email": $(`#email`).val(),
                "first": $(`#first`).val(),
                "last": $(`#last`).val(),
                "phone": $(`#phone`).val(),
                "sign": $(`#sign`).val(),
                "city": $(`#city`).val(),
                "message": $(`#message`).val(),
            }
        }
    }).then(response =>{
        console.log('done');
    }).catch(error => {
        console.log(error);
    })



    // let response = await axios ({
    //     method: 'post',
    //     url: url,
    //     data: {
    //       "pass": $(`#password`).val(),
    //           "data": {        
    //           "email": $(`#email`).val(),
    //           "first": $(`#first`).val(),
    //           "last": $(`#last`).val(),
    //           "phone": $(`#phone`).val(),
    //           "sign": $(`#sign`).val(),
    //           "city": $(`#city`).val(),
    //           "message": $(`#message`).val(),
    //           }
    //       }
    //   });
    //   console.log("done!");
    //   renderProfile();

}


$(function() {
    renderProfile();
});