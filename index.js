// HELPER FUNCTIONS
function createNode(element){
    return document.createElement(element);
}

function append(parent, element){
    return parent.appendChild(element);
}
document.getElementById("user-input").addEventListener('change' , search);
function getURL(){
    // GENERATING URL
    var initial_url = "http://superheroapi.com/api/" ;
    var api_token = "3181413508575888";
    var mid_url = "/search/";
    var entered_name = document.getElementById("user-input").value;
    if(entered_name.length == 0){
        window.alert("Name Cannot be Empty")
    }else{
        return initial_url + api_token + mid_url + entered_name;
    }

}

//DRIVER FUNCTION
function search(){
    var url = getURL();

    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        var response = JSON.parse(xhrRequest.response);
        display(response);
    }
}
/*
// API CALL
function fetchSuperhero(){
    // GENERATING URL
    var initial_url = "http://superheroapi.com/api/" ;
    var api_token = "3181413508575888";
    var mid_url = "/search/";
    var entered_name = document.getElementById("user-input").value;
    var url = initial_url + api_token + mid_url + entered_name;
    //console.log("called",url)
    fetch(url)
    .then( response => response.json())
    .then(function(data){
        console.log(data);
    })
    .catch(err => console.log(err));    
    

}
*/
function display(data){
    var superheros = document.getElementById("superhero-list");

    var results = data.results;
    for(let result of results){
        superheros.append(`<div class="card superhero" style="width: 18rem;">
            <img class="card-img-top" src="${result.image.url}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${result.name}</h5>
            <a href="#" class="btn btn-primary">More Info.</a>
            </div>
            </div>`);
    }
    document.getElementById("form").remove();
}
