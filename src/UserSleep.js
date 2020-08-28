class UserSleep {
  constructor(userSleepIntake){
    this.userSleepIntake = userSleepIntake
  }
  calculateAverageSleepHours() {
    let average = this.userSleepIntake.reduce((sum, num) => {
      sum += num.hoursSlept
      return sum
    }, 0)
    return average / this.userSleepIntake.length
  }
}



if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
