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
    return (averageStairsClimbed/dateDate.date.length)
  }
  calculateAverageStepsTakenbyDate(date){
    
  }
  calculateAverageMinutesActivebyDate(date){

  }
  calculateTotalStepsTakenbyDate(date){

  }
if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
