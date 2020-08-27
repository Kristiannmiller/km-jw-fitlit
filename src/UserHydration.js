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
}
if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
