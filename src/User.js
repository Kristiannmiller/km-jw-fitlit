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
    const [firstName, lastName] = nameArray
    return firstName
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
