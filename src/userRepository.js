

class UserRepository {
  constructor(data){
    this.data = data
    }
    findUserById(id) {
      let foundUser = this.data.find(user => user.id === id)
      return foundUser
    }
    calculateAverageStepGoal() {
      let allStepGoals = this.data.map(user => user.dailyStepGoal)
      let averageStepGoal = allStepGoals.reduce((a, b) => (a + b)) / this.data.length
      return averageStepGoal.toFixed(0)
    }
    calculateAverageStrideLength() {
      let allStrideLengths = this.data.map(user => user.strideLength)
      let averageStrideLength = allStrideLengths.reduce((a, b) => (a + b)) / this.data.length
      return averageStrideLength.toFixed(2)
    }
}
if (typeof module !== 'undefined') {
  module.exports = UserRepository;
// } else {
//   module.exports = UserRepository;
}
