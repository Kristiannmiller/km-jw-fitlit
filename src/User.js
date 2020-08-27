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
    const [firstName] = nameArray
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // let firstNameOnlyArray = nameArray.splice(0, 1)
    // let firstName = firstNameOnlyArray.toString()
    // console.log({firstName, lastName, foo})
    return firstName
  }
}

// ***** HEY! IF YOU'RE TESTING, USE THIS *****
if (typeof module !== 'undefined') {
  module.exports = User;
} else {
  module.exports = User;
}
