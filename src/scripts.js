

// ********** PACKAGES **********
// var Chart = require('../node_modules/chart.js/dist/Chart.js');
let now = moment('2019/06/15').format('YYYY/MM/DD')
let weekEnd = moment('2019/06/21').format('YYYY/MM/DD')
console.log(now);

// ********** GLOBAL VARIABLE **********
var currentUser
var currentUserRepository
var allUserRepository
var allUserHydrationRepository
var allUserSleepRepository
var allUserActivityRepository

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.getElementById('sidebarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')
const viewTeamButton = document.querySelector('#viewTeam');
const hydrationMenu = document.querySelector('.hydMenu');
const hydrationWrapper = document.querySelector('.hydrationWrapper')
const mainBody = document.querySelector('.mainbody')

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
  displayActivityData()
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

function displayActivityData() {
  mainBody.innerHTML = `<div class="box e"> Today's Activity
      <div class="widgetA">Steps</div>
      <div class="widgetB">Activity</div>
      <div class="widgetC">Miles Run</div>
      <div class="widgetD">Stairs Climbed</div>
    </div>
    <div class="box b">
        <div class="graphTitle">Name</div>
        <div class="graph">Steps Done Walked</div>
      </div>
      <div class="box h">
        <div class="graphTitle">Name</div>
        <div class="graph">Minutes Active</div>
      </div>
      <div class="box g">
          <div class="graphTitle">Name</div>
          <div class="graph">Miles Runned</div>
        </div>
      <div class="box i">
        <div class="graphTitle">Name</div>
        <div class="graph">Stairs Clombed</div>
      </div>
      <div class="box l">
        <div class="box m">Best Steps</div>
        <div class="box n">Best Min/active</div>
        <div class="box o">Best Miles</div>
        <div class="box p">Best Stairs</div>
      </div>`
}

function displayHydrationCharts(user){
  let ctx
  let har
  mainBody.innerHTML = `<div class="hydrationWrapper">
    <div class="hydrationToday">
      <canvas id="hydrationChartDay" width="100" height="100"></canvas>
    </div>
  <div class="hydrationWeek">
      <canvas id="hydrationChartWeek" width="100" height="100"></canvas>
  </div>
  </div>`
  ctx = document.getElementById('hydrationChartDay');
  har = document.getElementById('hydrationChartWeek')
  let allUserHydrationRepository = new HydrationRepository(hydrationData)
  currentUserHydration = new UserHydration(allUserHydrationRepository.findUserById(currentUser.id))
  console.log(currentUserHydration)
  let numOunces = currentUserHydration.userWaterIntake[currentUserHydration.userWaterIntake.length-1].numOunces
  var hydrationChartDay = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: [moment(now).format('MM/DD/YYYY')],
          datasets: [{
              label: 'Fl oz',
              data: [currentUserHydration.waterByDate(now)],
              backgroundColor: [
                  'rgba(116, 204, 195, 1)',

              ],
              borderColor: [
                  'rgba(58, 156, 147, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  ticks: {
                      scaleOveride: true,
                      min: 0,
                      max: 150,
                      stepSize: 10,
                      responsive: false
                  }
              }]
          }
      }
  });
  var hydrationChartWeek = new Chart(har, {
      type: 'horizontalBar',
      data: {
          labels: [moment(weekEnd).subtract(6, 'days').calendar(), moment(weekEnd).subtract(5, 'days').calendar(), moment(weekEnd).subtract(4, 'days').calendar(), moment(weekEnd).subtract(3, 'days').calendar(), moment(weekEnd).subtract(2, 'days').calendar(), moment(weekEnd).subtract(1, 'days').calendar(), moment(weekEnd).calendar()],
          datasets: [{
              label: 'Fl Oz',
              data: currentUserHydration.waterForWeek(weekEnd),
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
                      beginAtZero: true,

                  }
              }]
          }
      }
  });
}

function displayHydrationData(event) {
  displayHydrationCharts()
  allUserHydrationRepository = new HydrationRepository(hydrationData)
  currentUserHydration = new UserHydration(allUserHydrationRepository.findUserById(currentUser.id))
  console.log('This is my favorite ', allUserHydrationRepository)
  // hydrationWrapper.classList.remove('hidden')
  // document.querySelector('.e').classList.add('hidden')
  // document.querySelector('.b').classList.add('hidden')
  // document.querySelector('.g').classList.add('hidden')
  // document.querySelector('.h').classList.add('hidden')
  // document.querySelector('.i').classList.add('hidden')
  // document.querySelector('.l').classList.add('hidden')
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
//put into function that instantiates chart and inserts innerHTML dynamically rather than hiding and displaying stuff that's already there
