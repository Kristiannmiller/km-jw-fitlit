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
  calculateDailySleepHoursForWeek(endingDate) {
    let endingDateIndex =
    this.userSleepIntake.findIndex(sleepData =>
    sleepData.date === endingDate)
    let weekOfSleep = this.userSleepIntake.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfSleep.reduce((weekData, day) => {
      weekData[day.date] = day.hoursSlept
      return weekData
    }, {})
    return result
  }
  calculateDailySleepQualityForWeek(endingDate){
    let endingDateIndex =
    this.userSleepIntake.findIndex(sleepData =>
    sleepData.date === endingDate)
    let weekOfSleep = this.userSleepIntake.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfSleep.reduce((weekData, day) => {
      weekData[day.date] = day.sleepQuality
      return weekData
    }, {})
    return result
  }
  calculateAverageWeeklySleepQuality(endingDate){
    let endingDateIndex =
    this.userSleepIntake.findIndex(sleepData =>
    sleepData.date === endingDate)
    let weekOfSleep = this.userSleepIntake.slice(endingDateIndex-6, endingDateIndex+1)
    console.log(weekOfSleep)
    let result = weekOfSleep.reduce((acc, currentValue) => {
      acc += currentValue.sleepQuality
      return acc
    }, 0)
    return parseFloat((result / weekOfSleep.length).toFixed(2))
  }
}



if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
