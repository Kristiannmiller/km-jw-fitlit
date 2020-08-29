// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository

// ********** QUERIES  **********
const profilePage = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.querySelector('.sideBarContents');
const userPhoto = document.getElementById('userPhoto')

// ********** EVENT LISTENERS **********
window.addEventListener("load", updateUser);
profilePage.addEventListener('click', displayProfile);
myProfileLink.addEventListener('click', displayProfile);

// ******** FUNCTIONS/EVENTHANDLERS **********
//create an info card on the dash with all the users info on the page

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function updateUser() {
  uploadData()
  displayUser()
  displayTeamList()
}
function uploadData() {
  currentUserRepository = new UserRepository(userData)
  currentUser = new User(currentUserRepository.data[getRandomIndex(currentUserRepository.data)])
}

function displayUser() {

}

function displayProfile() {
  sideBarContents.innerHTML = ''
  sideBarContents.innerHTML =
  ``
  //get user info
  //interpolate user info into profile
}
