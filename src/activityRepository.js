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
    const targetDateDate = this.ActivityData.filter(dateData => dateData.date === date)
    const averageMinActive = targetDateData.reduce((acc, user) => {
      acc += user.minutesActive
      return acc
    }, 0)
    return (averageMinActive/dateData.length)
  }
  calculateTotalStepsTakenbyDate(date){

  }
if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}