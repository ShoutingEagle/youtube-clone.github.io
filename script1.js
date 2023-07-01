let BASE_URL = "https://www.googleapis.com/youtube/v3";
let API_KEY = "AIzaSyDReWaxB78a7e3FGjLuvy984T-rgox9hyE";
const videoCard = document.getElementById("video-card");

async function getvideos (q) {
    const url = `${BASE_URL}/search?key=${API_KEY}&q=${q}&type=videos&maxResults=20`;
    const response = await fetch(url);
    const data = await response.json();
    const videos =  data.items;
    getVideoData(videos);
}    

async function getVideoData (videos){
    let videoData = [];
    for(let i=0;i<videos.length;i++){
        const video = videos[i];
        videoData.push(await getVideoDetails(video.id.videoId))
    }
    renderVideo(videoData);
}

async function getVideoDetails(videoId){
    const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items[0];
}


// async function getVideoDetails(videoId){
//     const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.items[0];
// }




function calculateViews(data){
    const views = data;
    if(data.length<4){
        return views;
    }
    else if(data.length<5){
        return views[0]+"K";
    }
    else if(data.length<6){
        return views[0]+""+views[1]+"K";
    }
    else if(data.length<7){
        return views[0]+""+views[1]+""+views[1]+"K";
    }
    else if(data.length<8){
        return views[0]+"M";
    }
    else if(data.length<9){
        return views[0]+""+views[1]+"M";
    }
    else if(data.length<10){
        return views[0]+""+views[1]+""+views[1]+"M";
    }
    else if(data.length<11){
        return views[0]+"B";
    }
    else if(data.length<12){
        return views[0]+""+views[1]+"B";
    }
    else {
        return views[0]+""+views[1]+""+views[1]+"B";
    }
    
}

function renderVideo(videos){
    videoCard.innerHTML = ``;
    for(let i=0;i<videos.length;i++){
        const video = videos[i];
        const viewsCount = calculateViews(video.statistics.viewCount);

        videoCard.innerHTML += `<div class="container" onclick="openVideoplayingPage('${video.id}')">
    <div class="top">
        <img src="${video.snippet.thumbnails.high.url}" alt="thumbnail-image">
    </div>
    <div class="bottom">
      <div class="channel-image-container"><img class="channel-image" src="channels4_profile.jpg" alt="channel-logo-image"></div>
      <div class="bottom-item-1">
        <p class="video-details">${video.snippet.title}</p>
        <p class="channel-name">${video.snippet.channelTitle
        }</p>
        <p class="views">${viewsCount} views · 8 months ago</p>
      </div>
       
    </div>
    </div>`
    }
    
    
}

function openVideoplayingPage(videoId) {
    localStorage.setItem("videoId",videoId);
    window.open("videoplaying-page.html");
}

getvideos("");



async function fetchvideos (q) {
    const url = `${BASE_URL}/search?key=${API_KEY}&q=${q}&type=videos&maxResults=20`;
    const response = await fetch(url);
    const data = await response.json();
    const videos =  data.items;
    searchVideoData(videos);
} 


async function searchVideoData (videos){
    let videoData = [];
    for(let i=0;i<videos.length;i++){
        const video = videos[i];
        videoData.push(await getVideoDetails(video.id.videoId))
    }
    renderSearchedVideo(videoData);
}


const textArea = document.getElementById("text");
const searchButton = document.getElementById("text");

searchButton.addEventListener("click" , ()=> {
    const query = textArea.value;
    if (!query) return;
    renderSearchedVideo(query);
})


function renderSearchedVideo(videos){
    videoCard.innerHTML = ``;
    for(let i=0;i<videos.length;i++){
        const video = videos[i];
        const viewsCount = calculateViews(video.statistics.viewCount);

        videoCard.innerHTML += `<div class="container" onclick="openVideoplayingPage('${video.id}')">
    <div class="top">
        <img src="${video.snippet.thumbnails.high.url}" alt="thumbnail-image">
    </div>
    <div class="bottom">
      <div class="channel-image-container"><img class="channel-image" src="channels4_profile.jpg" alt="channel-logo-image"></div>
      <div class="bottom-item-1">
        <p class="video-details">${video.snippet.title}</p>
        <p class="channel-name">${video.snippet.channelTitle
        }</p>
        <p class="views">${viewsCount} views · 8 months ago</p>
      </div>
       
    </div>
    </div>`
    }
    
    
}







function reload(){
    window.location.reload();
}
