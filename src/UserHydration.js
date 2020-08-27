class UserHydration {
  constructor(userWaterIntake){
    this.userWaterIntake = userWaterIntake
  }
  calculateAverageWaterIntake() {
    let average = this.userWaterIntake.reduce((sum, num) => {
      sum += num.numOunces
      return sum
    }, 0)
    return average / this.userWaterIntake.length
  }
  waterByDate(date){
    let flozForDay = this.userWaterIntake.find(waterData => waterData.date === date)
    return flozForDay.numOunces
  }
  waterForWeek(endingDate){
    let endingDateIndex = this.userWaterIntake.findIndex(waterData => waterData.date === endingDate)
    let weekOfWater = this.userWaterIntake.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfWater.reduce((weekData, day) => {
      weekData[day.date] = day.numOunces
      return weekData
    }, {})
    return result
  }
}
if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
