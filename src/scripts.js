// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.getElementById('sidebarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')

// ********** EVENT LISTENERS **********
window.addEventListener('load', updateUser);
userName.addEventListener('click', displayProfile);
// myProfileLink.addEventListener('click', displayProfile);

// ******** FUNCTIONS/EVENTHANDLERS **********
//create an info card on the dash with all the users info on the page

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
  userName.innerText = `${currentUser.name}`
  userSteps.innerText = ``// ***update when we do activity**
  userPhoto.innerHTML = '<img class="userProfilePhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image">'
}

function displayTeamList() {
  sideBarContents.innerHTML = '<div class="teamHeader">My Team</div>'
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
  sideBarContents.innerHTML = ''
  sideBarContents.innerHTML =
  `<div class="sidebarHeader">
    <img class="profileUserPhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image"></div>
    <div class="profileUser">${currentUser.name}</div>
    <div class="key profileName">NAME: ${currentUser.name}</div>
    <div class="key profileAddress">ADDRESS: ${currentUser.address}</div>
    <div class="key profileEmail">EMAIL: ${currentUser.email}</div>
    <div class="key profileStride">STRIDE LENGTH: ${currentUser.strideLength}</div>
    <div class="key profileStepGoal">DAILY STEP GOAL: ${currentUser.dailyStepGoal}</div>
    <div class="viewTeam" type="button">View My Team</div>
  </div>`
}
