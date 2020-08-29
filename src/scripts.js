// ********** GLOBAL VARIABLE **********
var currentUser

// ********** QUERIES  **********
const profilePage = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBar = document.querySelector('.d');

// ********** EVENT LISTENERS **********
profilePage.addEventListener('click', displayProfile);
myProfileLink.addEventListener('click', displayProfile);


// ******** FUNCTIONS/EVENTHANDLERS **********
//create an info card on the dash with all the users info on the page

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
