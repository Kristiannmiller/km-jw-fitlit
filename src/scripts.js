// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.querySelector('.sideBarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')

// ********** EVENT LISTENERS **********
window.addEventListener("load", updateUser);
userName.addEventListener('click', displayProfile);
myProfileLink.addEventListener('click', displayProfile);

// ******** FUNCTIONS/EVENTHANDLERS **********
//create an info card on the dash with all the users info on the page

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function updateUser() {
  uploadData()
  displayUserData()
  // displayTeamList()
}
function uploadData() {
  currentUser = new User(userData[getRandomIndex(userData)])
  currentUserTeam = currentUser.friends.map(friend => userData[friend-1])
  currentUserTeam.unshift(currentUser)
  currentUserRepository = new UserRepository(currentUserTeam)
}

function displayUserData() {
  userName.innerText = `${currentUser.name}`
  userSteps.innerText = ``//***update when we do activity**
  userPhoto.innerHTML = '<img class="userProfilePhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image">'
}

function displayTeamList() {

}

function displayProfile() {
  sideBarContents.innerHTML = ''
  sideBarContents.innerHTML =
  ``
  //get user info
  //interpolate user info into profile
}
