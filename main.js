// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let list = document.querySelectorAll('.like-glyph')
list.forEach(node => node.addEventListener('click', e => {
  console.log(e)
  mimicServerCall()
  .then(resp => {
    if(node.innerText != `${FULL_HEART}`){
      console.log(resp)
    node.innerText = `${FULL_HEART}`
    node.classList.add('activated-heart')
    }
    else{
      node.innerText = `${EMPTY_HEART}`
      node.classList.remove('activated-heart')
    }

  })
  .catch((resp) => {
    let modal = document.getElementById('modal')
    modal.classList.remove('hidden')
    modalmessage = document.getElementById('modal-message')
    modalmessage.innerText = `${resp}`
    window.setTimeout(() => modal.classList.add('hidden'), 3000)


  })
}))


//.addEventListener('click', e => console.log(e))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
