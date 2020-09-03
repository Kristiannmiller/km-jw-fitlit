// ********** PACKAGES **********
let now = moment('2019/09/22').format('YYYY/MM/DD')
let weekEnd = moment('2019/09/22').format('YYYY/MM/DD')
Chart.defaults.global.legend.display = false

// ********** GLOBAL VARIABLES **********
var currentUser
var currentUserRepository
var allUserRepository
var allUserHydrationRepository
var allUserSleepRepository
var currentUserSleep
var allUserActivityRepository
var currentUserActivity
var currentPage = 'activity'

// ********** QUERIES  **********
const userName = document.querySelector('.username');
const myProfileLink = document.querySelector('.profileLink');
const sideBarContents = document.getElementById('sidebarContents');
const userPhoto = document.getElementById('userPhoto')
const userSteps = document.getElementById('userSteps')
const viewTeamButton = document.querySelector('#viewTeam');
const hydrationMenu = document.querySelector('.hydMenu');
const hydrationWrapper = document.querySelector('.hydrationWrapper')
const dailySection = document.querySelector('.dailyWidgets')
const weeklySection = document.querySelector('.weeklyWidgets')
const allTimeSection = document.querySelector('.allTime')
const sleepMenu = document.querySelector('.slpMenu')
const dailyCalendar = document.querySelector('.dayCal')
const weeklyCalendar = document.querySelector('.weekCal')
const activityMenu = document.querySelector('.actMenu')

// ********** EVENT LISTENERS **********
window.addEventListener('load', updateUser);
userPhoto.addEventListener('click', displayProfile);
sideBarContents.addEventListener('click', displayTeamList);
hydrationMenu.addEventListener('click', displayHydrationData);
sleepMenu.addEventListener('click', displaySleepData);
dailyCalendar.addEventListener('input', changeDate);
weeklyCalendar.addEventListener('input', changeDate);
activityMenu.addEventListener('click', displayActivityData);

// ******** FUNCTIONS/EVENTHANDLERS **********

// ==== COMMON USE ==== //

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateWeekDates() {
  let week = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  let currentWeek = week.map((day, i) => {
    return moment(weekEnd).subtract((6 - i), 'days').calendar()
  });
  return currentWeek
}
function changeDate(event){
  event.preventDefault()
  if(event.target === dailyCalendar) {
    now = moment(`${dailyCalendar.value}`).format('YYYY/MM/DD')
  } else if(event.target === weeklyCalendar) {
    weekEnd = moment(`${weeklyCalendar.value}`).format('YYYY/MM/DD')
  }
  refreshPageData(event);
}
function refreshPageData(event) {
  if(currentPage === 'hydration') {
    displayHydrationData()
  } else if(currentPage === 'sleep') {
    displaySleepData()
  } else if(currentPage === 'activity') {
    displayActivityData()
  }
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
  userPhoto.innerHTML = `<img class="userProfilePhoto" src="../assets/userImages/UserImage.jpg" alt="a vibrant orange tiger bathing in a lush green jungle stream">
  <h3>Hello, ${currentUser.displayFirstName()}!</h3>
  <div id="userSteps" class="userSteps">
  <h6>You've walked ${currentUser.dailyStepGoal} steps today</h6></div>`
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

function displayHydrationData() {
  displayHydrationPage()
  allUserHydrationRepository = new HydrationRepository(hydrationData)
  currentUserHydration = new UserHydration(allUserHydrationRepository.findUserById(currentUser.id))
  displayDailyHydrationChart(currentUserHydration, allUserHydrationRepository)
  displayWeeklyHydrationChart(currentUserHydration, allUserHydrationRepository)
}

function displayHydrationPage() {
  dailySection.innerHTML = `<div class="hydrationWrapper">
    <div class="hydrationToday">
      <canvas id="hydrationChartDay" width="100" height="100"></canvas>
    </div>`
  weeklySection.innerHTML = `<div class="hydrationWeek">
        <canvas id="hydrationChartWeek" width="100" height="100"></canvas>
    </div>`
  allTimeSection.innerHTML = ``
  currentPage = 'hydration'
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
  allUserSleepRepository = new SleepRepository(sleepData)
  currentUserSleep = new UserSleep(allUserSleepRepository.findUserById(currentUser.id))
  displaySleepPage(currentUserSleep, allUserSleepRepository)
  displayDailySleepHoursChart(currentUserSleep, allUserSleepRepository)
  displayDailySleepQualityChart(currentUserSleep, allUserSleepRepository)
  displayWeeklySleepHoursChart(currentUserSleep, allUserSleepRepository)
  displayWeeklySleepQualityChart(currentUserSleep, allUserSleepRepository)
  displayAllTimeSleepHoursChart(currentUserSleep, allUserSleepRepository)
  displayAllTimeSleepQualityChart(currentUserSleep, allUserSleepRepository)
}
function displaySleepPage(currentUserSleep, allUserSleepRepository) {
  dailySection.innerHTML = `<div class="sleepWrapper">
    <div class="sleepToday">
      <canvas id="dailySleepHoursChart" width="100" height="100"></canvas>
      <canvas id="dailySleepQualityChart" width="100" height="100"></canvas>
    </div>`
  weeklySection.innerHTML = `<div class="sleepThisWeek">
        <canvas id="weeklySleepHoursChart" width="100" height="100"></canvas>
        <canvas id="weeklySleepQualityChart" width="100" height="100"></canvas>
      </div>
    </div>`
  allTimeSection.innerHTML = `<h1>All Time Statistics</h1>
    <div class="box l">
      <div class="box m"><h5 class="smallGraphText">Average Sleep</h5>
      <h5 class="smallGraphText">${currentUserSleep.calculateAverageSleepHours()} hours</h5>
      <canvas id="allTimeSleepHoursChart" width="100" height="100"></canvas>
      </div>
      <div class="box n"><h5 class="smallGraphText">Average Sleep Quality</h5>
      <h5 class="smallGraphText">${currentUserSleep.calculateAverageSleepQuality()} / 5</h5>
      <canvas id="allTimeSleepQualityChart" width="100" height="100"></canvas>
      </div>
    </div>`
  currentPage = 'sleep'
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
function displayAllTimeSleepHoursChart(currentUserSleep, allUserSleepRepository) {
  let allTimeSleepHrs = document.getElementById('allTimeSleepHoursChart');
  let averageSleepHours = currentUserSleep.calculateAverageSleepHours()
  let allTimeSleepHoursWidget = new Chart(allTimeSleepHrs, {
    type: 'doughnut',
    data: {
      labels: ['', 'Your Average Sleep Hours'],
      datasets: [{
        data: [0, averageSleepHours],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayAllTimeSleepQualityChart(currentUserSleep, allUserSleepRepository) {
  let allTimeSleepQuality = document.getElementById('allTimeSleepQualityChart');
  let averageSleepQuality = currentUserSleep.calculateAverageSleepQuality()
  let remainder
  5 - averageSleepQuality > 0 ? remainder = 5 - averageSleepQuality : remainder = 0
  let allTimeSleepQualityWidget = new Chart(allTimeSleepQuality, {
    type: 'doughnut',
    data: {
      labels: ['remaining', 'Average Sleep Quality'],
      datasets: [{
        data: [remainder, averageSleepQuality],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}

// ====== Activity View ====== //

function displayActivityData(event) {
  allUserActivityRepository = new ActivityRepository(activityData)
  currentUserActivity = new UserActivity(allUserActivityRepository.findUserById(currentUser.id))
  displayActivityPage(currentUserActivity, allUserActivityRepository)
  displayDailyStepsChart(currentUserActivity, allUserActivityRepository)
  displayDailyActiveMinutesChart(currentUserActivity, allUserActivityRepository)
  displayDailyActiveMinutesChart(currentUserActivity, allUserActivityRepository)
  displayDailyMilesChart(currentUserActivity, allUserActivityRepository)
  displayDailyStairsChart(currentUserActivity, allUserActivityRepository)
  displayWeeklyStepsChart(currentUserActivity, allUserActivityRepository)
  displayWeeklyActiveMinsChart(currentUserActivity, allUserActivityRepository)
  displayWeeklyMilesChart(currentUserActivity, allUserActivityRepository)
  displayWeeklyStairsChart(currentUserActivity, allUserActivityRepository)
  displayAllTimeStepsChart(currentUserActivity, allUserActivityRepository)
  displayAllTimeActiveMinutesChart(currentUserActivity, allUserActivityRepository)
  displayAllTimeMilesChart(currentUserActivity, allUserActivityRepository)
  displayAllTimeStairsChart(currentUserActivity, allUserActivityRepository)
}
function displayActivityPage(currentUserActivity, allUserActivityRepository) {
  // IN WIDGET C: ${currentUserActivity.milesWalked(now, currentUser.id)}
  // IN BOX G: ${currentUserActivity.calculateAverageWeeklyMiles(weekEnd)}
  // IN BOX 0: ${currentUserActivity.findMilesRecord()}
  dailySection.innerHTML = `<div class="box e">
  <div class="widgetA"><h5 id="stepsCounter">${currentUserActivity.calculateStepsTaken(now)} STEPS!</h5>
    <canvas id="dailyStepsWidget" width="100" height="100"></canvas>
    </div>
  <div class="widgetB"><h5 id="stepsCounter">${currentUserActivity.calculateMinActive(now)} ACTIVE MINS!</h5>
    <canvas id="dailyActiveMinutesWidget" width="100" height="100"></canvas>
    </div>
  <div class="widgetC"><h5 id="stepsCounter">5 MILES!</h5>
    <canvas id="dailyMilesWidget" width="100" height="100"></canvas>
    </div>
  <div class="widgetD"><h5 id="stepsCounter">${currentUserActivity.calculateStairsByDate(now)} FLIGHTS!</h5>
    <canvas id="dailyStairsClimbedWidget" width="100" height="100"></canvas>
    </div>
  </div>`
  weeklySection.innerHTML = `<div class="box b">
    <h5 id="stepsCounter">You averaged ${currentUserActivity.calculateAverageWeeklySteps(weekEnd)} steps/day for the week ending on ${weekEnd}</h5>
  <div class="graph">
    <canvas id="weeklyStepsChart" width="100" height="100"></canvas>
  </div>
  </div>
  <div class="box h">
    <h5 id="stepsCounter">You averaged ${currentUserActivity.calculateAvgMinActivePerWeek(weekEnd)} active minutes/day for the week ending on ${weekEnd}</h5>
  <div class="graph">
    <canvas id="weeklyActiveMinsChart" width="100" height="100"></canvas>
  </div>
  </div>
  <div class="box g">
    <h5 id="stepsCounter">You averaged 25 miles/day for the week ending on ${weekEnd}</h5>
  <div class="graph">
    <canvas id="weeklyMilesChart" width="100" height="100"></canvas>
  </div>
  </div>
  <div class="box i">
    <h5 id="stepsCounter">You averaged ${currentUserActivity.calculateAverageStairsPerWeek(weekEnd)} flights/day for the week ending on ${weekEnd}</h5>
  <div class="graph">
    <canvas id="weeklyStairsChart" width="100" height="100"></canvas>
  </div>`
  allTimeSection.innerHTML = `<h1>All Time Personal Bests</h1><div class="box l">
  <div class="box m">
    <h5 class="smallGraphText">Your Steps / Day Record</h5>
    <h5 class="smallGraphText">${currentUserActivity.findStepsRecord().numSteps} steps</h5>
    <canvas id="allTimeStepsRecord" width="100" height="100"></canvas>
  </div>
  <div class="box n">
    <h5 class="smallGraphText">Your Active Mins / Day Record</h5>
    <h5 class="smallGraphText">${currentUserActivity.findActiveMinRecord().minutesActive} minutes</h5>
    <canvas id="allTimeActiveMinutesRecord" width="100" height="100"></canvas>
  </div>
  <div class="box o">
    <h5 class="smallGraphText">Your Miles / Day Record</h5>
    <h5 class="smallGraphText">50 miles</h5>
    <canvas id="allTimeMilesRecord" width="100" height="100"></canvas>
    </div>
  <div class="box p">
    <h5 class="smallGraphText">Your Stairs / Day Record</h5>
    <h5 class="smallGraphText">${currentUserActivity.findStairsRecord().flightsOfStairs} flights</h5>
    <canvas id="allTimeStairsRecord" width="100" height="100"></canvas>
  </div>`
  currentPage = 'activity'
}

function displayDailyActiveMinutesChart(currentUserActivity, allUserActivityRepository) {
  let activeMins = document.getElementById('dailyActiveMinutesWidget');
  let minsSoFar = currentUserActivity.calculateMinActive(now)
  let compare = allUserActivityRepository.calculateAverageMinutesActivebyDate(now) - minsSoFar
  let remainder
  compare > 0 ? remainder = compare : remainder = 0
  let dailyActiveMinutesWidget = new Chart(activeMins, {
    type: 'doughnut',
    data: {
      labels: ['Average User', 'Minutes so far'],
      datasets: [{
        data: [remainder, minsSoFar],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayDailyStepsChart(currentUserActivity, allUserActivityRepository) {
  let stepsDay = document.getElementById('dailyStepsWidget');
  let stepsSoFar = currentUserActivity.calculateStepsTaken(now)
  let stepsToGo
  currentUser.dailyStepGoal - stepsSoFar > 0 ? stepsToGo = currentUser.dailyStepGoal - stepsSoFar : stepsToGo = 0
  let dailyStepsWidget = new Chart(stepsDay, {
    type: 'doughnut',
    data: {
      labels: ['Steps to Goal', 'Steps so far'],
      datasets: [{
        data: [stepsToGo, stepsSoFar],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayDailyMilesChart(currentUserActivity, allUserActivityRepository) {
  let dailyMiles = document.getElementById('dailyMilesWidget');
  // let milesSoFar = currentUserActivity.calculateMilesByDate(now)
  // let compare = allUserActivityRepository.calculateAverageMilesByDate(now) - milesSoFar
  let milesSoFar = 10;
  let compare = 15
  let remainder
  compare > 0 ? remainder = compare : remainder = 0
  let dailyMilesWidget = new Chart(dailyMiles, {
    type: 'doughnut',
    data: {
      labels: ['Average User', 'Miles so far'],
      datasets: [{
        data: [remainder, milesSoFar],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayDailyStairsChart(currentUserActivity, allUserActivityRepository) {
  let dailyStairs = document.getElementById('dailyStairsClimbedWidget');
  let stairsSoFar = currentUserActivity.calculateStairsByDate(now);
  let compare = allUserActivityRepository.calculateAverageStairsClimbedbyDate(now) - stairsSoFar
  let remainder
  compare > 0 ? remainder = compare : remainder = 0
  let dailyStairsWidget = new Chart(dailyStairs, {
    type: 'doughnut',
    data: {
      labels: ['Average User', 'Flights so far'],
      datasets: [{
        data: [remainder, stairsSoFar],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}

function displayWeeklyStepsChart(currentUserActivity, allUserActivityRepository) {
  let currentWeek = generateWeekDates()
  let stepsWeek = document.getElementById('weeklyStepsChart');
  let stepsData = currentUserActivity.calculateStepsForWeek(weekEnd)
  let stepsChartWeek = new Chart(stepsWeek, {
    type: 'bar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Steps This Week',
        data: stepsData,
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

function displayWeeklyActiveMinsChart(currentUserActivity, allUserActivityRepository) {
  let currentWeek = generateWeekDates()
  let activeMinsWeek = document.getElementById('weeklyActiveMinsChart');
  let activeMinsData = currentUserActivity.calculateActiveMinsForWeek(weekEnd)
  let activeMinsWeekChart = new Chart(activeMinsWeek, {
    type: 'bar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Steps This Week',
        data: activeMinsData,
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
function displayWeeklyMilesChart(currentUserActivity, allUserActivityRepository) {
  let currentWeek = generateWeekDates()
  let activeMilesWeek = document.getElementById('weeklyMilesChart');
  let activeMilesData = [10, 15, 30, 4, 20, 15, 40]
  // let activeMilesData = currentUserActivity.calculateMilesForWeek(weekEnd)
  let activeMilesWeekChart = new Chart(activeMilesWeek, {
    type: 'bar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Miles This Week',
        data: activeMilesData,
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
  })
}

function displayWeeklyStairsChart(currentUserActivity, allUserActivityRepository) {
  let currentWeek = generateWeekDates()
  let stairsWeek = document.getElementById('weeklyStairsChart');
  let stairsData = currentUserActivity.calculateStairsForWeek(weekEnd)
  let stairsWeekChart = new Chart(stairsWeek, {
    type: 'bar',
    data: {
      labels: currentWeek,
      datasets: [{
        label: 'Flights This Week',
        data: stairsData,
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
function displayAllTimeStepsChart(currentUserActivity, allUserActivityRepository) {
  let allTimeSteps = document.getElementById('allTimeStepsRecord');
  let bestSteps = currentUserActivity.findStepsRecord().numSteps
  let allTimeStepsWidget = new Chart(allTimeSteps, {
    type: 'doughnut',
    data: {
      labels: ['', 'Best Daily Steps'],
      datasets: [{
        data: [0, bestSteps],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayAllTimeActiveMinutesChart(currentUserActivity, allUserActivityRepository) {
  let allTimeActiveMins = document.getElementById('allTimeActiveMinutesRecord');
  let bestActiveMins = currentUserActivity.findActiveMinRecord().minutesActive
  let allTimeActiveMinsWidget = new Chart(allTimeActiveMins, {
    type: 'doughnut',
    data: {
      labels: ['', 'Best Daily Active Mins'],
      datasets: [{
        data: [0, bestActiveMins],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayAllTimeMilesChart(currentUserActivity, allUserActivityRepository) {
  let allTimeMiles = document.getElementById('allTimeMilesRecord');
  //let bestMiles = currentUserActivity.findMilesRecord()
  let bestMiles = 50
  let allTimeMilesWidget = new Chart(allTimeMiles, {
    type: 'doughnut',
    data: {
      labels: ['', 'Best Daily Miles'],
      datasets: [{
        data: [0, bestMiles],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
function displayAllTimeStairsChart(currentUserActivity, allUserActivityRepository) {
  let allTimeStairs = document.getElementById('allTimeStairsRecord');
  let bestStairs = currentUserActivity.findStairsRecord().flightsOfStairs
  let allTimeStairsWidget = new Chart(allTimeStairs, {
    type: 'doughnut',
    data: {
      labels: ['', 'Best Daily Stairs'],
      datasets: [{
        data: [0, bestStairs],
        backgroundColor: [
          'rgba(249, 249, 249, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderColor: [
          'rgba(204, 204, 204, 1)',
          'rgba(116, 204, 195, 1)'
        ],
        borderWidth: 1,
      }]
    },
    options: {}
  })
}
