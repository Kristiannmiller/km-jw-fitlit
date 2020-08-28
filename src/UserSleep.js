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
  calculateAverageSleepQuality() {
    let average = this.userSleepIntake.reduce((sum, num) => {
      sum += num.sleepQuality
      return sum
    }, 0)
    return average / this.userSleepIntake.length
  }
  calculateSleepByDate(date){
    let sleepForDay =
    this.userSleepIntake.find(sleepData =>
    sleepData.date === date)
    return sleepForDay.hoursSlept
  }
  calculateSleepQualityByDate(date){
    let sleepForDay =
    this.userSleepIntake.find(sleepData =>
    sleepData.date === date)
    return sleepForDay.sleepQuality;
  }
  calculateAverageWeeklySleepQuality() {
    
  }
}



if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
