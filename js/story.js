import dataset from "./dataset.js"
//criar página story de acordo com o id//
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const text = document.getElementById("history");

function getStory(id) {
  let historia = undefined;
  dataset.forEach((story)=>{
    if (story.id == id){
      historia = story;
    }
  })
  return historia
}
function showStory(id){
  const story = getStory(id)
  const view = `<h1 class="text-center my-5" style="font-size:60px; color:#4682B4; -webkit-text-stroke: 2px #1F3A3D">${story.title}</h1>
  <p class='text-center' style= "font-size:40px; font-weight: bold"> por ${story.author}</p>
  <div class="container">
    <div class="row">
      <div class="col">
          <div>
           <img src="${story.img}" alt="Girl in a jacket" width="500" height="800" class='text-center'>
          </div>
      </div>
      <div class="col">
        <div class="border border-dark mx-auto" id="pages">
          <p>${story.story}</p>
        </div>
      </div>
    </div>
  </div>`;
  text.insertAdjacentHTML('beforeend', view);
  
  
}
showStory(params.id);

