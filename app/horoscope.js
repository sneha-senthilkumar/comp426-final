var jwt = localStorage.getItem('jwt');
const profile = {
    url: 'http://localhost:3000/account/status',
    headers: {'Authorization': "Bearer " + jwt },
}

// export async function getWeatherAtHomeBase() {
//     const weath = await axios ({
//         method: 'get',
//         url: 'https://api.weather.gov/gridpoints/AKQ/45,76/forecast/'
//     });
//     console.log("done");
//     return weath.properties.periods[0];
// }

export const renderHoroscope = async function(){
    let sign = "";
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
            sign = response.sign;
            let city = response.city;
            let message = response.message;
            
            let head = `<a id="welcome" class="navbar-brand" href="#" style="color: rgb(255,253,253);"><i class="fa fa-user-circle-o"></i>&nbsp; Welcome ${response.first}!</a>`;
            console.log(head);
            $('#welcome').replaceWith(head);
            let horoHead = `<h1 id="userSign">Today's Horoscope: ${sign}</h1>`;
            $('#userSign').replaceWith(horoHead);
    
            let comp = `<p>`;
            switch(sign) {
                case 'Aries':
                    comp = `<p id="compatible">Gemini<br>Aquarius<br>Leo<br>Sagittarius</p>`;
                    $('#daily').replaceWith(`<p id="daily">You have got so much energy today that getting started on new things won't be a problem for you at all. It's the finishing up that you will have a bit of a struggle with! There are a lot of details still up in the air on your biggest project, and all of the uncertainty around you will prevent you from being able to put a period on the end of any sentence. Luckily, you have many friendly and fun people in your life who will keep you from getting frustrated.</p>`);                    
                    break;
                case 'Taurus':
                    comp = `<p id="compatible">Pisces<br>Cancer<br>Virgo<br>Capricorn</p>`;
                    $('#daily').replaceWith(`<p id="daily">The changes you've been dealing with in an older, more established relationship aren't feeling comfortable right now, but they will feel better soon enough just wait a little while longer. Things will get better slowly and steadily. In the meantime, to keep yourself feeling positive about this person, take a walk down memory lane. Focus on the good times and have confidence that the person you know and love will be coming back into your life again, because they will.</p>`);
                    break;
                case 'Gemini':
                    comp = `<p id="compatible">Aries<br>Leo<br>Libra<br>Aquarius</p>`;
                    $('#daily').replaceWith(`<p id="daily">Your newest friend is still in the process of revealing him or herself to you right now, and the stuff you have yet to learn is going to shape your future in a profound and very healthy way. They have some wonderful advice that you must hear today, so try to meet up with them as soon as you can so you two can discuss it. You'll find that what they have to say matches up nicely with what that little voice inside of your head has been telling you all along.</p>`);
                    break;
                case 'Cancer':
                    comp = `<p id="compatible">Taurus<br>Virgo<br>Scorpio<br>Pisces</p>`;
                    $('#daily').replaceWith(`<p id="daily">Your opinions have extra weight right now, so be careful how you voice them. You tend to say things before you think, which is usually terrifically charming to all of the people around you. But today some new folks on the scene might not see the humor in your remarks, so be mindful of where you are when you are thinking of speaking out and taking a stand. Don't change your stance on the issues that's who you are. But you should change how vocal you are about them.</p>`); 
                    break;
                case 'Leo':
                    comp = `<p id="compatible">Gemini<br>Libra<br>Aries<br>Sagittarius</p>`;
                    $('#daily').replaceWith(`<p id="daily">You can make fun out of anything today a long meeting, jury duty, a traffic jam, you name it! The key is that you have an imagination that just won't quit. There is literally nothing that can bore you, which makes today a wonderful day to take care of those tedious errands or tasks you've been putting off for so long. Don't forget to make some plans for tonight when you are in this kind of mood, you can't let it go to waste. Share it with your friends.</p>`);                    
                    break;
                case 'Virgo':
                    comp = `<p id="compatible">Cancer<br>Scorpio<br>Taurus<br>Capricorn</p>`;
                    $('#daily').replaceWith(`<p id="daily">Other people are not as prepared as you are today, and you should be careful about sharing your resources with them. Only give out extras that you can get along without. Don't give away the things that you absolutely need. After all, if you lend someone your only pen, what will you write with? Your reputation as a generous and kind person could make people think they can take advantage of you prove to them that's not the case, today. Don't be afraid of coming off as rude.</p>`);                    
                    break;
                case 'Libra':
                    comp = `<p id="compatible">Leo<br>Sagittarius<br>Gemini<br>Aquarius</p>`;
                    $('#daily').replaceWith(`<p id="daily">The new relationships your life should not be just romance-related. If you feel like you're missing a copilot on your journey through life, you are wrong. You do not need another person to complete you. You only need to truly love the person you are. And if you are in a relationship right now, remember not to lose yourself in it. Your identity is important! After all, it is why this person cares about you so much so cherish yourself by maintaining your identity.</p>`);                    
                    break;
                case 'Scorpio':
                    comp = `<p id="compatible">Virgo<br>Capricorn<br>Cancer<br>Pisces</p>`;
                    $('#daily').replaceWith(`<p id="daily">There's a lot of drama going on in the life of one of your coworkers, and things could get ugly, soon. You can expect some of the tensions they're experiencing to spill over into the workplace, and they're going to be less reliable than they usually are. Give them a few days to get refocused on what they need to do, but if their distractions don't lessen after that, you will have to speak to the right people about it. This is not ratting someone out it's helping them get the help they need.</p>`);                    
                    break;
                case 'Sagittarius':
                    comp = `<p id="compatible">Libra<br>Aquarius<br>Aries<br>Leo</p>`;
                    $('#daily').replaceWith(`<p id="daily">Just because someone at your work or school says that no one is interested in what you have to say does not mean that that's true! If you hear this kind of talk from anyone today, you should be suspicious. It's going to be pretty darned obvious that they are playing major mind games with you. You should only believe things you hear with your own ears and see with your own eyes. Second- or third-hand information is nothing but gossip and it should be treated as such.</p>`);                    
                    break;
                case 'Capricorn':
                    comp = `<p id="compatible">Scorpio<br>Pisces<br>Taurus<br>Virgo</p>`;
                    $('#daily').replaceWith(`<p id="daily">Today, getting through the tallest mountain of work will feel easier than ever! You are so close to that big goal that you can nearly taste it and boy, is it sweet! Listen when that little voice in your head tells you to power through lunch or stay late to finish it all up. A postponement at this point will just let all that wonderful momentum go to waste. Do whatever it takes to finish things up. Don't go to bed with it hanging over your head. Wake up to a nice, blank slate.</p>`);                    
                    break;
                case 'Aquarius':
                    comp = `<p id="compatible">Sagittarius<br>Aries<br>Gemini<br>Libra</p>`;                    
                    $('#daily').replaceWith(`<p id="daily">If you want some alone time today, that's fine but don't just drop off the face of the earth and leave people guessing about what happened to you. You owe it to your friends, family and coworkers to let them know what and where you are both emotionally and physically. If you want to have the freedom to come and go as you please, you need to provide the respect that other people deserve. Plus, they will worry about you if they don't know what's going on. Save them from that.</p>`);                    
                    break;
                case 'Pisces':
                    comp = `<p id="compatible">Capricorn<br>Taurus<br>Cancer<br>Scorpio</p>`;
                    $('#daily').replaceWith(`<p id="daily">If the past few days have been emotionally overcast and full of clouds, you can turn that all around today if you want to. Sometimes, staying in a blue mood can help you process your feelings more effectively. You don't always need to run away from sadness. But if you are done with being in the doldrums, call up a friend and see what's up with them. They have a great plan for the two of you, so say 'yes' and jump right back into socializing.</p>`);                    
                    break;
            }
            console.log("made it this far");
           // let weather = axios.get('https://api.weather.gov/gridpoints/AKQ/45,76/forecast/');
            $('#compatible').replaceWith(comp);
            // $('#weather').replaceWith(`<p id="weather">${weather}</p>`)
            

        })
        .catch(function (error) {
            console.log(error);
        });      
}


$(function() {
    renderHoroscope();
});
