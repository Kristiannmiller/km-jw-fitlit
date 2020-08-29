// ********** GLOBAL VARIABLE **********
var currentUser

// ********** QUERIES  **********
const profilePage = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBar = document.querySelector('.d');

// ********** EVENT LISTENERS **********
window.addEventListener("load", displayNewUser);
profilePage.addEventListener('click', displayProfile);
myProfileLink.addEventListener('click', displayProfile);

// ******** FUNCTIONS/EVENTHANDLERS **********
//create an info card on the dash with all the users info on the page

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayNewUser() {
  currentUserRepository = new UserRepository(userData)
  currentUser = new User(currentUserRepository.data[getRandomIndex(currentUserRepository.data)])
  //create new instance of a User using the dataset and the getRandomIndex function
  //create new instances of the User's friends using forEach method?
  //
  //get information for a new user to display on the dom
  //

}

function accessProfile() {

}

function displayProfile() {
  sideBar.innerHTML = ''
  sideBar.innerHTML =
  ``
  //get user info
  //interpolate user info into profile
}
