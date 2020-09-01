// ********** PACKAGES **********
// import datepicker from 'js-datepicker'
let now = moment('2019/09/22').format('YYYY/MM/DD')
let weekEnd = moment('2019/09/22').format('YYYY/MM/DD')
Chart.defaults.global.legend.display = false
// const picker = datepicker(selector, options)

// ********** GLOBAL VARIABLES **********
var currentUser
var currentUserRepository
var allUserRepository
var allUserHydrationRepository
var allUserSleepRepository
var currentUserSleep
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
const sleepMenu = document.querySelector('.slpMenu')

// ********** EVENT LISTENERS **********
window.addEventListener('load', updateUser);
userName.addEventListener('click', displayProfile);
sideBarContents.addEventListener('click', displayTeamList);
hydrationMenu.addEventListener('click', displayHydrationData);
sleepMenu.addEventListener('click', displaySleepData);

// ******** FUNCTIONS/EVENTHANDLERS **********

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// ==== ONLOAD ==== //

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
  currentUserRepository = new UserRepository(currentUserTeam)
  allUserRepository = new UserRepository(userData)
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

// *** sidebar display *** //

function displayTeamList() {
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

// ====== Hydration View ====== //

function displayHydrationData(event) {
  displayHydrationPage()
  allUserHydrationRepository = new HydrationRepository(hydrationData)
  currentUserHydration = new UserHydration(allUserHydrationRepository.findUserById(currentUser.id))
  displayDailyHydrationChart(currentUserHydration, allUserHydrationRepository)
  displayWeeklyHydrationChart(currentUserHydration, allUserHydrationRepository)
}

function displayHydrationPage() {
  mainBody.innerHTML = `<div class="hydrationWrapper">
    <div class="hydrationToday">
      <form action="">
        <label for="hydDay">Select Date:</label>
        <input id="hydDay" type="date" min="2019-06-15" max="2019-09-22"/>
      </form>
      <canvas id="hydrationChartDay" width="100" height="100"></canvas>
    </div>
  <div class="hydrationWeek">
      <form action="">
        <label for="hydWeek">Select Week End Date:</label>
        <input id="hydWeek" type="date" min="2019-06-15" max="2019-09-22"/>
      </form>
      <canvas id="hydrationChartWeek" width="100" height="100"></canvas>
  </div>`
}

function generateWeekDates() {
  let week = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  let currentWeek = week.map((day, i) => {
    return moment(weekEnd).subtract((6 - i), 'days').calendar()
  });
  return currentWeek
}

function displayWeeklyHydrationChart(currentUserHydration, allUserHydrationRepository) {
  let currentWeek = generateWeekDates()
  let har = document.getElementById('hydrationChartWeek')
  let hydrationChartWeek = new Chart(har, {
    type: 'horizontalBar',
    data: {
      labels: currentWeek,
      datasets: [{
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
  })
}

function displayDailyHydrationChart(currentUserHydration, allUserHydrationRepository) {
  let ctx = document.getElementById('hydrationChartDay');
  let hydrationChartDay = new Chart(ctx, {
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
}

// ====== Sleep View ====== //

function displaySleepData(event) {
  displaySleepPage()
  allUserSleepRepository = new SleepRepository(sleepData)
  currentUserSleep = new UserSleep(allUserSleepRepository.findUserById(currentUser.id))
  displayDailySleepHoursChart(currentUserSleep, allUserSleepRepository)
  displayDailySleepQualityChart(currentUserSleep, allUserSleepRepository)
  displayWeeklySleepHoursChart(currentUserSleep, allUserSleepRepository)
  displayWeeklySleepQualityChart(currentUserSleep, allUserSleepRepository)
}
function displaySleepPage() {
  mainBody.innerHTML = `<div class="sleepWrapper">
    <div class="sleepToday">
      <canvas id="dailySleepHoursChart" width="100" height="100"></canvas>
      <canvas id="dailySleepQualityChart" width="100" height="100"></canvas>
    </div>
    <div class="sleepThisWeek">
      <canvas id="weeklySleepHoursChart" width="100" height="100"></canvas>
      <canvas id="weeklySleepQualityChart" width="100" height="100"></canvas>
    </div>
  </div>`
}
function displayDailySleepHoursChart(currentUserSleep, allUserSleepRepository) {
  let sleepHrsDaily = document.getElementById('dailySleepHoursChart');
  let sleepHoursChartDay = new Chart(sleepHrsDaily, {
      type: 'horizontalBar',
      data: {
          labels: [moment(now).format('MM/DD/YYYY')],
          datasets: [{
              data: [currentUserSleep.calculateSleepByDate(now)],
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
                      max: 15,
                      stepSize: 1,
                      responsive: false
                  }
              }]
          }
      }
  });
};
function displayDailySleepQualityChart(currentUserSleep, allUserSleepRepository) {
  let sleepQualDaily = document.getElementById('dailySleepQualityChart');
  let sleepQualChartDay = new Chart(sleepQualDaily, {
      type: 'horizontalBar',
      data: {
          labels: [moment(now).format('MM/DD/YYYY')],
          datasets: [{
              label: 'Quality of Sleep',
              data: [currentUserSleep.calculateSleepQualityByDate(now)],
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
                      max: 5,
                      stepSize: 1,
                      responsive: false
                  }
              }]
          }
      }
  });
};
function displayWeeklySleepHoursChart(currentUserSleep, allUserSleepRepository) {
  let currentWeek = generateWeekDates()
  let sleepHrsWeek = document.getElementById('weeklySleepHoursChart');
  let sleepHoursChartWeek = new Chart(sleepHrsWeek, {
    type: 'horizontalBar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Hours Slept',
        data: currentUserSleep.calculateDailySleepHoursForWeek(weekEnd),
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
  })
}
function displayWeeklySleepQualityChart(currentUserSleep, allUserSleepRepository) {
  let currentWeek = generateWeekDates()
  let sleepQualWeek = document.getElementById('weeklySleepQualityChart');
  let sleepQualChartWeek = new Chart(sleepQualWeek, {
    type: 'horizontalBar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Quality of Sleep',
        data: currentUserSleep.calculateDailySleepQualityForWeek(weekEnd),
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
  })
}
