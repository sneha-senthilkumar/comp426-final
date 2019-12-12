var jwt = localStorage.getItem('jwt');
const profile = {
    url: 'http://localhost:3000/account/status',
    headers: {'Authorization': "Bearer " + jwt },
}

export const renderProfile = async function(){
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

            let head = `<a id="welcome" class="navbar-brand" href="#" style="color: rgb(255,253,253);"><i class="fa fa-user-circle-o"></i>&nbsp; Welcome ${response.first}!</a>`;

            $('#content').replaceWith(app);
            $('#welcome').replaceWith(head);


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
    let username = localStorage.getItem('name');
    let first = response.first;
    let last = response.last;
    let email = response.email;
    let phone = response.phone;
    let sign = response.sign;
    let city = response.city;
    let message = response.message;
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
        
        <option value="Chapel Hill">Chapel Hill</option>
        <option value="Charlotte">Charlotte</option>
        
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
        method: 'post',
        url: 'http://localhost:3000/user/info',
        data: {
          "data": {
            "email": $(`#email`).val(),
            "first": $(`#first`).val(),
            "last": $(`#last`).val(),
            "phone": $(`#phone`).val(),
            "sign": $(`#sign`).val(),
            "city": $(`#city`).val(),
            "message": $(`#message`).val(),
            "type": "merge"
        }
    },
    headers: {'Authorization' : `Bearer ` + jwt},
    });

    let accountupdate = await axios ({
        method: 'post',
        url: 'http://localhost:3000/private/users',
        data: {
          "data": {
            "username": username,
            "email": $(`#email`).val(),
            "first": $(`#first`).val(),
            "last": $(`#last`).val(),
            "phone": $(`#phone`).val(),
            "sign": $(`#sign`).val(),
            "city": $(`#city`).val(),
            "message": $(`#message`).val(),
            "type": "merge"
        }
    },
    headers: {'Authorization' : `Bearer ` + jwt},
    });
    $('.content').remove();
    renderProfile();



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