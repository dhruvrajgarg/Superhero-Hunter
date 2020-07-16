// HELPER FUNCTIONS
function createNode(element){
    return document.createElement(element);
}

function append(parent, element){
    return parent.appendChild(element);
}
document.getElementById("form").addEventListener('keypress' , search);
function getURL(){
    // GENERATING URL
    var initial_url = "https://superheroapi.com/api.php/" ;
    var api_token = "3181413508575888";
    var mid_url = "/search/";
    var entered_name = document.getElementById("user-input").value;
    var url;
    if(entered_name.length == 0){
        return window.alert("Name Cannot be Empty")
    }else{
        return   initial_url + api_token + mid_url + entered_name;
    }
    
}
var template = document.getElementById("template");
//DRIVER FUNCTION
function search(){
    var url = getURL();
    console.log(url);
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();    
    xhrRequest.onload = function(){
        var data = JSON.parse(xhrRequest.responseText);
        console.log(data);
        display(data);  
    }
}

function display(data){
    var superheroList = document.getElementById("superheros-list");

    // var superhero = document.getElementById("superhero");
    superheroList.innerHTML = "";
    var results = data.results;
    if(!results){
        document.getElementById("user-input").value = "";
        window.alert("No super Hero Found");
    }else{
        for(result of results){
        var card = template.content.cloneNode(true);

        card.getElementById("name").innerHTML = 'Name : ' + result.name;
        card.getElementById("image").children[0].src = result.image.url;
        card.getElementById("race").innerHTML = 'Race : ' + result.appearance.race;
        card.getElementById("gender").innerHTML = 'Gender : ' + result.appearance.gender;

        superheroList.appendChild(card);
    }
    }
    // document.getElementById("form").remove();
}


