document.addEventListener("DOMContentLoaded", () => {
  /***** Beginning of Starter Code ****/

  const playerContainer = document.querySelector(".player-container")

  // render one player to the DOM
  function renderPlayer(player) {
    // create an element for the outer div
    const playerDiv = document.createElement("div")

    // set attributes on the outer div
    playerDiv.className = "player"
    playerDiv.dataset.number = player.number

    // use innerHTML to create any child elements of the div
    playerDiv.innerHTML = `
      <h3>${player.name} (<em>${player.nickname}</em>)</h3>
      <img src="${player.photo}" alt="${player.name}">
      <p class="likes">${player.likes} likes</p>
      <button class="like-button">❤️</button>
    `

    // append the element to the container
    playerContainer.append(playerDiv)
  }

  // for each player in the array, render to the DOM
  PLAYERS.forEach(renderPlayer)

  /***** End of Starter Code ****/




  /***** Deliverable 1 *****/
  document.querySelector('#header').addEventListener('click', (element) => {
    if (element.target.style.color === "red") {
      element.target.style.color = "black"
    } else {
      element.target.style.color = "red"
    }
  })

  /***** Deliverable 2 *****/
  const form = document.getElementById('new-player-form')
  form.addEventListener('submit', (element) => {
    element.preventDefault();
    let newPlayer = {}
    newPlayer['number'] = document.querySelector("#new-player-form").number.value
    newPlayer['name'] = document.querySelector("#new-player-form").name.value
    newPlayer['nickname'] = document.querySelector("#new-player-form").nickname.value
    newPlayer['photo'] = document.querySelector("#new-player-form").photo.value
    newPlayer['likes'] = 0
    renderPlayer(newPlayer)
    form.reset()
  })

  /***** Deliverable 3 *****/
  // const likeButtons = document.querySelectorAll('.like-button')

  // for (let singleButton of likeButtons) {
    // singleButton.addEventListener('click', (element) => {

    // Have to use this set-up when adding a new player. 
    playerContainer.addEventListener('click', (element) => {
      if (element.target.className === "like-button") {
        let likes = element.target.parentNode.querySelector('p').innerText
        let num = likes.split(' ')[0]
        element.target.parentNode.querySelector('p').innerText = parseInt(num) + 1 + ' likes'
      }
    })
  // }
})