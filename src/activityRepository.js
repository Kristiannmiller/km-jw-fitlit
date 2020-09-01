class ActivityRepository {
  constructor(allActivityData){
    this.allActivityData = allACtivityData
  }

  calculateAverageStairsClimbedbyDate(date){
    const targetDateData = this.allActivityData.filter(dateData => dateData.date === date)
    const averageStairsClimbed = targetDateData.reduce((acc, user) => {
      acc += user.flightsOfStairs
      return acc
    }, 0)
    return (averageStairsClimbed/dateData.date.length)
  }
  calculateAverageStepsTakenbyDate(date){
    const targetDateData = this.allActivityData.filter(dateData => dateData.date === date)
    const averageStepsTaken = targetDateData.reduce((acc, user) => {
      acc += user.numSteps
      return acc
    }, 0)
    return (averageStepsTaken/dateData.length)
  }
  calculateAverageMinutesActivebyDate(date){
    const targetDateData = this.allActivityData.filter(dateData => dateData.date === date)
    const averageMinActive = targetDateData.reduce((acc, user) => {
      acc += user.minutesActive
      return acc
    }, 0)
    return (averageMinActive/dateData.length)
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
