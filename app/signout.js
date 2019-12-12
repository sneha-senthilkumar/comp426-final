$(function() {
    document.getElementById('logout').onclick = function() {logOut()};
});

const logOut = async function(event) {
    console.log("here");
    window.localStorage.removeItem('jwt');
    console.log("logged out!");
   window.location.href = "index.html";  
}




