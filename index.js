const formValue = document.getElementById("search");
const fecthWrapper = document.querySelector(".wrapper");
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector(".form-wrapper form");
const formBtn = document.querySelector(".form-btn");
const div = document.createElement("div");
const modeSwitch = document.querySelector(".light-dark-img");
const modeIndicator = document.querySelector(".span");
const body = document.querySelector("body");


function btn(e){
    e.preventDefault();
    var fetchValue = document.getElementById("search").value;
    fetch(`https://api.github.com/users/${fetchValue}`)
.then(res => res.json())
    .then(data => {
        const month = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; 
        const date = data.created_at;
        const arr = date.substring(0, 10).split("-");
        var selectMonth = "";
        if(arr[1].substring(0,1) == "0"){
        	selectMonth = month[arr[1].substring(1)];
        }
        else{
        	selectMonth = month[arr[1]];
        }
        const logToData = `

                <div class="github-profile-info">
                    <div class="github-profile-imgWrapper">
                        <img src="${data.avatar_url}" alt="" class="github-profile-img" />
                    </div>

                    <div class="github-profile-secondaryInfo">
                        <h3 class="github-profile-name">${data.name} <br> <span class="github-profile-username">@${data.login}</span></h3>
                        <p class="github-profile-joindate">Joined ${arr[2]} ${selectMonth} ${arr[0]}</p>
                    </div>
                </div>

                <div class="github-profile-bio">${data.bio  == null? "Not Available": data.bio}</div>

                <div class="repo-follow">
                    <div class="repo-follow-info">
                        <div class="repo-follow-name">Repos</div>
                        <div class="repo-follow-number repo">${data.public_repos}</div>
                    </div>

                    <div class="repo-follow-info">
                        <div class="repo-follow-name">Followers</div>
                        <div class="repo-follow-number following">${data.following}</div>
                    </div>

                    <div class="repo-follow-info">
                        <div class="repo-follow-name">Following</div>
                        <div class="repo-follow-number follower">${data.followers}</div>
                    </div>
                </div>

                <div class="github-data-misc">
                    <div class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="location-data">${data.location == null? "Not Available": data.location}</p>
                    </div>
                    <div class="blog">
                        <i class="fa-solid fa-link"></i>
                        <p class="blog-data">${data.blog  == null? "Not Available": data.blog}</p>
                    </div>
                    <div class="twitter-handle">
                        <i class="fa-brands fa-twitter"></i>
                        <p class="twitter-data">${data.twitter_username  == null? "Not Available": data.twitter_username}</p>
                    </div>
                    <div class="github-handle">
                        <i class="fa-brands fa-github"></i>
                        <p class="github-data">${data.company  == null? "Not Available": data.company}</p>
                    </div>
                </div>`;
        div.innerHTML = logToData;
        div.classList.add("github-data-wrapper");
        div.classList.add("shadow");
        div.style.opacity = "1";
        fecthWrapper.appendChild(div);
    });
    
}

modeSwitch.addEventListener("click", function(){
    body.classList.toggle("body");
    formWrapper.classList.toggle("shadow");
    formWrapper.classList.toggle("darkmode-wrapper");
    div.classList.toggle("darkmode-wrapper");
    formValue.classList.toggle("input-color-change");
    //div.classList.toggle("shadow");      
    formValue.classList.toggle("darkmode-input");
    formBtn.classList.toggle("darkmode-button");
    modeIndicator.innerText === "DARK"? modeIndicator.innerText = "LIGHT": modeIndicator.innerText = "DARK";
})
formBtn.removeEventListener("click", btn);
formBtn.addEventListener("click", btn);