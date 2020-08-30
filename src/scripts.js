

// ********** PACKAGES **********
// const Chart = require('../node_modules/chart.js/dist/Chart.js');

// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository
var allUserRepository

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.getElementById('sidebarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')
const viewTeamButton = document.querySelector('#viewTeam');
const ctx = document.getElementById('hydrationChartDay');
const hydrationMenu = document.querySelector('.hydMenu');

// ********** EVENT LISTENERS **********
window.addEventListener('load', updateUser);
userName.addEventListener('click', displayProfile);
sideBarContents.addEventListener('click', displayTeamList);
// myProfileLink.addEventListener('click', displayProfile);
hydrationMenu.addEventListener('click', displayHydrationData)

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
  allUserRepository = new UserRepository(userData)
  console.log(allUserRepository)
}

function displayUserData() {
  userName.innerText = `Hello, ${currentUser.displayFirstName()}!`
  userSteps.innerText = `${currentUser.dailyStepGoal}`// ***update when we do activity**
  userPhoto.innerHTML = '<img class="userProfilePhoto" src="../assets/userImages/UserImage.jpg" alt="user profile image">'
}
function displayHydrationData() {

}

function displayTeamList() {
  console.log('team list')
  sideBarContents.innerHTML =
  `<div class="teamHeader">My Team</div>
  <div class="teamStepsHeader">FitLit Community Step Goal Average: ${allUserRepository.calculateAverageStepGoal()}</div>
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
//****************CHHHHHHAAAARTS*****************//
var hydrationChartDay = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
