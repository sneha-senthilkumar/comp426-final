$(function () {
  const $form = $('#login-form');
  const $message = $('#message');

  $form.submit(function (e) {
    e.preventDefault();

    $message.html('');

    const data = $form.serializeArray().reduce((o, x) => {
      o[x.name] = x.value;
      return o;
    }, {});

    $.ajax({
      url: 'https://localhost:3000',
      type: 'POST',
      data,
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

    const form = $form1.serializeArray();

    $.ajax({
      url: 'https://localhost:3000/account/create',
      type: 'POST',
      "name": form.username.value,
      "pass": form.password.value,
      "data": {
        "email": form.email.value,
        "first": form.first.value,
        "last": form.last.value,
        "phone": form.phone.value,
        "sign": form.sign.value,
        "etc": form.message.value,
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