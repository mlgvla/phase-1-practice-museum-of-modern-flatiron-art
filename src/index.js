const BASE_URL = "http://localhost:3000/"

function renderArt(artObj) {
  document.getElementById("exhibit-title").innerText = artObj[0].title
  document.getElementById("exhibit-description").innerText =
    artObj[0].description
  document.getElementById("exhibit-image").src = artObj[0].image

  renderComments(artObj[0].comments)
}

function getArt() {
  return fetch(BASE_URL + "current-exhibits").then(r => r.json())
}

function handleForm(e) {
  e.preventDefault()
  let comment = e.target["comment-input"].value
  renderComments([comment]) //renderComments takes an array
  e.target.reset()
}

function renderComments(commentsArr) {
  let commentContainer = document.getElementById("comments-section")
  for (const comment of commentsArr) {
    let li = document.createElement("li")
    li.innerText = comment
    commentContainer.append(li)
  }
}

function handleTickets(e) {
  let p = document.getElementById("tickets-bought")
  let ticketText = p.innerText
  let numberOftickets = parseInt(ticketText.split(" ")[0], 10)
  numberOftickets += 1
  p.innerText = `${numberOftickets} Tickets Bought`
}

function app() {
  //create events
  document.getElementById("comment-form").addEventListener("submit", handleForm)
  document
    .getElementById("buy-tickets-button")
    .addEventListener("click", handleTickets)

  //get Art
  getArt().then(artObj => renderArt(artObj))
}

app()
