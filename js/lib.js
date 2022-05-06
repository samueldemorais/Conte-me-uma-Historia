const form = document.querySelector('form')
const cardDeck = document.querySelector('.card-deck');

const offCanvas = new bootstrap.Offcanvas(
  document.querySelector('#offcanvasRight')
);
export function createStoryCard(story) { 
  const card =  `
          <div class="col p-3">
            <div class="card" style="width: 18rem">
               
              <img src="${story.img}" class="card-img-top"  width="590" height="400"alt="...">
              
              <div class="card-body p-0">
                <h5 class="card-title text-center">${story.title}</h5>
                <p class="card-text">${story.synopsis}</p>
                <div class= 'text-center'><a href="pagesStories/story.html?id=${story.id}" class="btn btn-primary botao" style="background-color:#245B86; margin-bottom: 10px; text-align:center !important">Ler História</a></div>
              </div>
            </div>
          </div>
      `;
   cardDeck.insertAdjacentHTML('beforeend', card);
}

export function loadStories(stories){
 
  stories.forEach((story) => {
  
     createStoryCard(story);
  
    
  })
}
export function loadStoriesSubmit(){
  form.onsubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    //capturar valores do formulário//
    const newStory = {
      title: titleArea.value,
      synopsis: synopsisArea.value,
      author: authorArea.value,
      img: imgArea.value,
      story: storyArea.value,
      id: new Date().getTime()
    }
    //inserir a história no deck de card//
     createStoryCard(newStory)
   
    offCanvas.hide()
  };
}
