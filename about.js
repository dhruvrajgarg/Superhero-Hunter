// storing identity of hero
var heroID = localStorage.getItem('id');


fetch();
//getting hero's data from the server
function fetch()
{
    var xhrRequest = new XMLHttpRequest();
    var url = 'https://superheroapi.com/api.php/3181413508575888/' + heroID;
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        document.getElementById('title').innerText = " " + response.name;
        
        document.getElementById("pic").src = response.image.url;

        //adding details about power
        var power = document.getElementById("power");
        var int = document.createElement('p');
        int.innerText = "Intelligence : " + response.powerstats.intelligence;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Combat : " + response.powerstats.combat;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Power : " + response.powerstats.power;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Speed : " + response.powerstats.speed;
        power.appendChild(int);
        var int = document.createElement('p');
        int.innerText = "Strength : " + response.powerstats.strength;
        power.appendChild(int);

        //adding details about biography
        var bio = document.getElementById("bio");
        var full = document.createElement('p');
        full.innerText = "Full Name : " + response.biography['full-name']; 
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alias : " + response.biography.aliases;
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alignment : " + response.biography.alignment;
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Publisher : " + response.biography.publisher;
        bio.appendChild(full);
        bio.appendChild(full);
        var full = document.createElement('p');
        full.innerText = "Alter-Egos : " + response.biography['alter-egos']; 
        bio.appendChild(full);
    };
}

// for navigation to other pages

document.getElementById("home").addEventListener('click',function(){
    window.location.assign('./index.html');
});

document.getElementById("fav").addEventListener('click',function(){
    window.location.assign('./favourites.html');
});
