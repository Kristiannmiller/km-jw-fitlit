class UserHydration {
  constructor(userWaterIntake){
    this.userWaterIntake = userWaterIntake
  }
  calculateAverageWaterIntake() {
    let average = this.userWaterIntake.reduce((sum, num) => {
      sum += this.userWaterIntake[num].numOunces
      return sum
    }, 0)
    return average / this.userWaterIntake.length
  }
}
if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
