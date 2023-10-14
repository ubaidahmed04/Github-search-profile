
  var APIURL  = "https://api.github.com/users/";

var main = document.querySelector("#main");
var getUser = async(username) => {
    try {
        var response = await fetch(APIURL + username);
        var data = await response.json();
        if (data.message === "Not Found") {
            main.innerHTML = `<div class="img_Profile"><img id="usernotfound" src="https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/4915681/original/crop:x0y0w1280h960/hash:1467658571/1436442720_LOGO.jpg?1467658571" alt="imge"></div>`;
        } else {
            var card = `
            <div class="check" id="card">
            <div class="img_Profile"><img id="img" src="${data.avatar_url}" alt="imge">
            </div>
            <div class="name">${data.name}</div>
         
         
            <div class="container text-center " >
            <div class="row">
              <div class="col" id="followers">
               followers
              </div>
              <div class="col" id="followings">
              following
              </div>
              <div class="col" id="repos">
              repos
              </div>
            </div>
            </div>
            
            <div class="container text-center ">
            <div class="row text" >
              <div class="col">
              ${data.followers}
              
              </div>
              <div class="col">
              ${data.following}
              
              </div>
              <div class="col">
              ${data.public_repos}
                
              </div>
            </div>
          </div>
          <div class="bio">
             ${data.bio}
          </div>
          <div id="repos">
           
         </div>
        
           </div>
         </div>
            `;
            main.innerHTML = card;
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

function view_on_github(searchBox) {
    location.href =`http://github.com/${searchBox}`;
}

let formSubmit = () => {
    let searchBox = document.getElementById("search");
    if(searchBox.value !== "") {
        getUser(searchBox.value);
        searchBox.value = "";
    }
    return false;
};
