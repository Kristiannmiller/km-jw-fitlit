// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.getElementById('sidebarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')
const viewTeamButton = document.querySelector('#viewTeam');

// ********** EVENT LISTENERS **********
window.addEventListener('load', updateUser);
userName.addEventListener('click', displayProfile);
sideBarContents.addEventListener('click', displayTeamList);
// myProfileLink.addEventListener('click', displayProfile);

// ******** FUNCTIONS/EVENTHANDLERS **********

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function updateUser() {
  uploadData()
  displayUserData()
  displayTeamList()
}

function uploadData() {
  currentUser = new User(userData[getRandomIndex(userData)])
  currentUserTeam = currentUser.friends.map(friend => userData[friend-1])
  currentUserTeam.unshift(currentUser) // NOTE: currentUser will always be at [0]
  // WE CAN CHANGE THIS IF WE NEED TO ^
  currentUserRepository = new UserRepository(currentUserTeam)
}

function displayUserData() {
  userName.innerText = `Hello, ${currentUser.displayFirstName()}!`
  userSteps.innerText = `${currentUser.dailyStepGoal}`// ***update when we do activity**
  userPhoto.innerHTML = '<img class="userProfilePhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image">'
}

function displayTeamList() {
  console.log('team list')
  sideBarContents.innerHTML =
  `<div class="teamHeader">My Team</div>
  <div class="teamStepsHeader">Team Step Goal Average: ${currentUserRepository.calculateAverageStepGoal()}</div>
  <div class="myStepsHeader">My Step Goal: ${currentUser.dailyStepGoal}</div>`
  currentUserRepository.data.forEach((friend, i) => {
    if (i > 0) {
      sideBarContents.innerHTML +=
      `<div class="teammember">
      <div class="photo sidebar"><img class="teamImage" src="../assets/userImages/TeamImage${i}.jpg" alt="teamMate${i} profile image"></div>
      <div class="name sidebar">${friend.name}</div>
      <div class="steps sidebar">${friend.dailyStepGoal}</div>
      </div>`
    } i++
  })
}

function displayProfile() {
  let currentFirstName = currentUser.displayFirstName()
  sideBarContents.innerHTML = ''
  sideBarContents.innerHTML =
  `<div class="sidebarHeader">
    <img class="profileUserPhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image"></div>
    <div class="profileUser">${currentFirstName}</div>
    <div class="key profileName">NAME: ${currentUser.name}</div>
    <div class="key profileAddress">ADDRESS: ${currentUser.address}</div>
    <div class="key profileEmail">EMAIL: ${currentUser.email}</div>
    <div class="key profileStride">STRIDE LENGTH: ${currentUser.strideLength}</div>
    <div class="key profileStepGoal">DAILY STEP GOAL: ${currentUser.dailyStepGoal}</div>
    <button id="viewTeam" class="viewTeam">View My Team</button>
    </div>`
}
