let BASE_URL = "https://www.googleapis.com/youtube/v3";
let API_KEY = "AIzaSyDReWaxB78a7e3FGjLuvy984T-rgox9hyE";



const videoContainer = document.getElementById("video-main");
const videoId = localStorage.getItem("videoId");
videoContainer.src =  `https://www.youtube.com/embed/${videoId}`;


async function getVideoDetails(videoId){
    console.log("hello");
    const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const title = data.items[0].snippet.title;
    const Name = data.items[0].snippet.channelTitle;
    const comment = data.items[0].statistics.commentCount;
    const videoTitle = document.getElementById("description");
    videoTitle.innerHTML = title;
    const channelName = document.getElementById("channel-name-vpp");
    channelName.innerHTML = Name;
    const commentCount = document.getElementById("comments-details");
    commentCount.innerHTML = comment + " Comments";
}

getVideoDetails(videoId);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 



async function getChannelDetails(){
        const url = `${BASE_URL}/commentThreads?key=${API_KEY}&videoId=${videoId}&maxResults=80&order=time&part=snippet`;
        const response = await fetch(url);
        const data = await response.json();
        renderComments(data);
}

function renderComments(data){
    
    const dat = data.items;
    // console.log(dat);
    // console.log(dat[0].snippet.topLevelComment.snippet.textDisplay);
    const commentsCont = document.getElementById("channel-container");
    

    for(let i=0;i<dat.length;i++){
        const channelpic = dat[i].snippet.topLevelComment.snippet.authorProfileImageUrl;
        const comments = dat[i].snippet.topLevelComment.snippet.textDisplay;
        const channelName =dat[i].snippet.topLevelComment.snippet.authorDisplayName;
        

        commentsCont.innerHTML += `<div class="channel-container-wrap">
        <div class="icon-channel"><img src="${channelpic}" alt="cannel-icon">
        </div>
        <div class="details-channel">
            <div class="name-channer">${channelName}</div>
            <div class="comment-channel">${comments}</div>
            <div class="buttons">
                <div class="channel-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270" width="60px"  preserveAspectRatio="xMidYMid meet" style="width: 60px; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_41"><rect width="270" height="270" x="0" y="0"/></clipPath><clipPath id="__lottie_element_43"><path d="M0,0 L120,0 L120,120 L0,120z"/></clipPath><clipPath id="__lottie_element_57"><path d="M0,0 L128,0 L128,128 L0,128z"/></clipPath></defs><g clip-path="url(#__lottie_element_41)"><g clip-path="url(#__lottie_element_57)" style="display: none;"><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g><g style="display: none;"><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g><g><path/></g></g><g style="display: none;"><g><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g></g></g><g clip-path="url(#__lottie_element_43)" transform="matrix(1.0880000591278076,0,0,1.0880000591278076,69.95299530029297,67.9433822631836)" opacity="1" style="display: block;"><g style="display: none;"><path/><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g><g transform="matrix(1,0,0,1,60,60)" opacity="1" style="display: block;"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="4" d=" M25.025999069213867,-4.00600004196167 C25.025999069213867,-4.00600004196167 5.992000102996826,-3.996999979019165 5.992000102996826,-3.996999979019165 C5.992000102996826,-3.996999979019165 11.012999534606934,-22.983999252319336 11.012999534606934,-22.983999252319336 C12.230999946594238,-26.90399932861328 13,-31.94300079345703 8.994000434875488,-31.981000900268555 C7,-32 5,-32 4.021999835968018,-31.007999420166016 C4.021999835968018,-31.007999420166016 -19.993000030517578,-5.03000020980835 -19.993000030517578,-5.03000020980835 C-19.993000030517578,-5.03000020980835 -20.027999877929688,32.025001525878906 -20.027999877929688,32.025001525878906 C-20.027999877929688,32.025001525878906 20.97599983215332,31.986000061035156 20.97599983215332,31.986000061035156 C25.010000228881836,31.986000061035156 26.198999404907227,29.562000274658203 26.99799919128418,25.985000610351562 C26.99799919128418,25.985000610351562 31.972000122070312,4.026000022888184 31.972000122070312,4.026000022888184 C33,-0.6930000185966492 30.392000198364258,-4.00600004196167 25.025999069213867,-4.00600004196167z"/></g><g style="display: none;"><path/><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"/></g><g transform="matrix(1,0,0,1,60,60)" opacity="1" style="display: block;"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="4" d=" M-19.986000061035156,-4.03000020980835 C-19.986000061035156,-4.03000020980835 -36.020999908447266,-3.996999979019165 -36.020999908447266,-3.996999979019165 C-36.020999908447266,-3.996999979019165 -36.00199890136719,31.993000030517578 -36.00199890136719,31.993000030517578 C-36.00199890136719,31.993000030517578 -20.030000686645508,32.02299880981445 -20.030000686645508,32.02299880981445 C-20.030000686645508,32.02299880981445 -19.986000061035156,-4.03000020980835 -19.986000061035156,-4.03000020980835z" fill="white"/></g></g></g></svg>
                    <p>1.5K</p>
                    </div>
                    <div class="channel-dislike"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 60px;"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" fill="white"/></svg></div>
                    <div class="reply">Reply</div>
            </div>
        </div>
        </div>`
    }
    
    
}

getChannelDetails();


// -----------------------------------------------------------------------------------------------------------------


async function getSuggestedVideos (q) {
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
        videoData.push(await getSuggestedVideoDetails(video.id.videoId))
    }
    renderSuggestedVideo(videoData);
}


async function getSuggestedVideoDetails(videoId){
    const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;
    const response = await fetch(url);
    const data = await response.json();
   return data.items[0];
}


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

async function renderSuggestedVideo(videos){
    const videoCard = document.getElementById("video-des");
    // const data = videos;
    // console.log(data);
    for(let i=0;i<videos.length;i++){
        const video = videos[i];
        const viewsCount = calculateViews(video.statistics.viewCount);

        videoCard.innerHTML += `<div class="video-card">
        <div class="video">
            <iframe width="120" height="90" src="${video.snippet.thumbnails.default.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="bottom-item-1">
            <p class="video-details">${video.snippet.title}</p>
            <p class="channel-name">${video.snippet.channelTitle
            }</p>
            <p class="views">${viewsCount} views · 8 months ago</p>
        </div>
    </div>`
    }
}




getSuggestedVideos("");




function reload(){
    window.location.reload();
}








