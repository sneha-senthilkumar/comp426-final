$(function () {
  const $form = $('#login-form');
  const $message = $('#message');

  $form.submit(function (e) {
    e.preventDefault();

    $message.html('');

    var data = [];
    var x = $('#login-form').serializeArray();
    $.each(x, function(i, field){
      data.push(field.value);
    });

    $.ajax({
      url: 'https://localhost:3000/account/login',
      type: 'POST',
      "name": data[0],
      "password": data[1],
      xhrFields: {
        withCredentials: true,
      },
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
    });
  });

  const $form1 = $('#sign-form');

  $form1.submit(function (e) {
    e.preventDefault();

    $message.html('');

    var data = [];
    var x = $('#sign-form').serializeArray();
    $.each(x, function(i, field){
      data.push(field.value);
    });

    $.ajax({
      url: 'https://localhost:3000/account/create',
      type: 'POST',
      "name": data[0],
      "pass": data[1],
      "data": {
        "email": data[2],
        "first": data[3],
        "last": data[4],
        "phone": data[5],
        "sign": data[6],
        "location": data[7],
        "etc": data[8],
      },
      xhrFields: {
        withCredentials: true,
      },
    }).then(() => {
      $message.html('<span class="has-text-success">Account made!</span>');
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and an account was not made. Check your inputs and your internet connection.</span>');
    });
  });
});