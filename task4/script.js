const videos = [

{
title:"Java Full Course For Beginners",
channel:"Code Master",
views:"1.2M views",
time:"2 days ago",
thumbnail:"https://picsum.photos/500/300?1"
},

{
title:"Spring Boot Interview Questions",
channel:"Tech Talks",
views:"550K views",
time:"1 week ago",
thumbnail:"https://picsum.photos/500/300?2"
},

{
title:"BGMI Tournament Highlights",
channel:"Gaming Hub",
views:"890K views",
time:"3 days ago",
thumbnail:"https://picsum.photos/500/300?3"
},

{
title:"Lo-Fi Study Music",
channel:"Music World",
views:"5M views",
time:"2 weeks ago",
thumbnail:"https://picsum.photos/500/300?4"
},

{
title:"React Crash Course",
channel:"Frontend Pro",
views:"750K views",
time:"4 days ago",
thumbnail:"https://picsum.photos/500/300?5"
},

{
title:"Formula 1 Highlights",
channel:"Sports TV",
views:"2.1M views",
time:"1 day ago",
thumbnail:"https://picsum.photos/500/300?6"
}

];

const container =
document.getElementById(
"videoContainer"
);

function displayVideos(data){

container.innerHTML="";

data.forEach(video=>{

container.innerHTML += `

<div class="video-card">

<div class="thumbnail">

<img src="${video.thumbnail}">

</div>

<div class="video-info">

<img
class="channel"
src="https://i.pravatar.cc/40">

<div class="details">

<h3>${video.title}</h3>

<p>${video.channel}</p>

<p>
${video.views}
•
${video.time}
</p>

</div>

</div>

</div>

`;

});

}

displayVideos(videos);

document
.getElementById("searchInput")
.addEventListener(
"keyup",
function(){

const value =
this.value.toLowerCase();

const filtered =
videos.filter(video=>

video.title
.toLowerCase()
.includes(value)

);

displayVideos(filtered);

});

document
.getElementById("menuBtn")
.addEventListener(
"click",
function(){

document
.getElementById("sidebar")
.classList
.toggle("small");

});