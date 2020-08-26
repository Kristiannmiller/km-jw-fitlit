
class User {
  constructor(data){
    this.id = data.id,
    this.name = data.name,
    this.address = data.address,
    this.email = data.email,
    this.strideLength = data.strideLength,
    this.dailyStepGoal = data.dailyStepGoal,
    this.friends = data.friends;
  }
  displayFirstName() {
    let nameArray = this.name.split(' ')
    let firstNameOnlyArray = nameArray.splice(0, 1)
    let firstName = firstNameOnlyArray.toString()
    return firstName
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
} else {
  module.exports = User;
}
