class UserHydration {
  constructor(userWaterIntake){
    this.userWaterIntake = userWaterIntake
  }
  calculateAverageWaterIntake() {
    console.log(this.userWaterIntake);
    let average = this.userWaterIntake.reduce((sum, num) => {
      sum += num.numOunces
      return sum
    }, 0)
    return average / this.userWaterIntake.length
  }
  
}
if (typeof module !== 'undefined') {
  module.exports = UserHydration;
}
