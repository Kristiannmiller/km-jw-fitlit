
class ActivityRepository {
  constructor(allActivityData, userData) {
    this.allActivityData = allActivityData
    this.userData = userData
  }
  findUserById(id) {
    let userActivityData = this.allActivityData.filter(activityData => activityData.userID === id)
    return userActivityData
  }
  calculateAverageMilesByDate(date) {
    let averageMiles = (this.calculateAverageStepsTakenbyDate(date) * 3.5) / 5280
    return parseFloat(averageMiles).toFixed(2)
  }
  calculateAverageStairsClimbedbyDate(date) {
    let targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    let averageStairsClimbed = targetDateData.reduce((acc, user) => {
      acc += user.flightsOfStairs
      return acc
    }, 0)
    return Math.ceil((averageStairsClimbed) / targetDateData.length)
  }
  calculateAverageStepsTakenbyDate(date) {
    const targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    const averageStepsTaken = targetDateData.reduce((acc, user) => {
      acc += user.numSteps
      return acc
    }, 0)
    return (averageStepsTaken/targetDateData.length)
  }
  calculateAverageMinutesActivebyDate(date) {
    const targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    const averageMinActive = targetDateData.reduce((acc, user) => {
      acc += user.minutesActive
      return acc
    }, 0)
    return (averageMinActive/targetDateData.length)
  }
  findBestClimber(date) {
    const targetDateData = this.allActivityData.filter(dateData => dateData.date === date)
    const bestClimber = targetDateData.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs
    })
    return bestClimber[0]
  }
}
if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
