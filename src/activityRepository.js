
class ActivityRepository {
  constructor(allActivityData){
    this.allActivityData = allActivityData
  }
  findUserById(id) {
    let userActivityData = this.allActivityData.filter(activityData => activityData.userID === id)
    return userActivityData
  }
  calculateAverageStairsClimbedbyDate(date){
    let targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    let averageStairsClimbed = targetDateData.reduce((acc, user) => {
      acc += user.flightsOfStairs
      return acc
    }, 0)
    return (averageStairsClimbed/targetDateData.length)
  }
  calculateAverageStepsTakenbyDate(date){
    const targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    console.log(activityData)
    const averageStepsTaken = targetDateData.reduce((acc, user) => {
      acc += user.numSteps
      console.log(acc)
      return acc
    }, 0)
    return (averageStepsTaken/activityData.length)
  }
  calculateAverageMinutesActivebyDate(date){
    const targetDateData = this.allActivityData.filter(activityData => activityData.date === date)
    const averageMinActive = targetDateData.reduce((acc, user) => {
      acc += user.minutesActive
      return acc
    }, 0)
    return (averageMinActive/activityData.length)
  }
  findBestClimber(date){
    const targetDateData = this.allActivityData.filter(dateData => dateData.date === date)
    const bestClimber = targetDateData.sort((a,b) => {
      return b.flightsOfStairs - a.flightsOfStairs
    })
    if (bestClimber[0].flightsOfStairs == bestClimber[1].flightsOfStairs){
      return ("It's a tie between " + bestClimber[0] + " and " + bestClimber[1] +"!")
    } else {
      return bestClimber[0]
    }
  }
}
if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
