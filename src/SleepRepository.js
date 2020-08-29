class SleepRepository {
  constructor(allUserData){
    this.allUserData = allUserData
    }
    findUserById(id) {
      let userSleepData = this.allUserData.filter(userData => userData.userID === id)
      return userSleepData
    }
    selectDay(endingDate){
      let endingDateIndex = this.allUserData.filter(sleepData => sleepData.date === endingDate)
      let week = this.allUserData.slice(endingDateIndex.date-6, endingDateIndex.date+1)
      console.log("this day", endingDateIndex)
      return week
    }
    //separate all users by id into their own arrays
    //have the weekly average thingy run on each of those arrays
    //put them results into an array
    //.sort() on those results
    //return ... the ones more than 3.



    selectWeek(endingDate){
      // let endingWeekArray = this.allUserData.filter(endingDate => sleepData.date === endingDate){
      //   //i want to run selectDay for each user in a floop that decrements 7 times
      //   //I think we could use
      // })
    }

    getSleepQualityAverage(){
      let averageSleepQuality = this.allUserData.reduce((acc, user) => {
        acc += user.sleepQuality
        return acc
      }, 0 )/this.allUserData.length;
      let result = averageSleepQuality.toFixed(2)
      return parseFloat(result)
    }
    getAverageWeeklySleepQualityForAUser(id, endingDate){
      let averageSleepQualityForAUser = this.allUserData.reduce((acc, user) => {
        acc += user.sleepQuality
        console.log("this is what it is returning", acc)
        return acc/this.allUserData.length
      }, 0)
      return averageSleepQualityForAUser
    }

    findGoodSleepers (endingDate){
      //call findUserById 4 times to get users 1-4 and all their week
      //call selectDay to filter each user's data into a week
      //call reduce each time to get the average sleep sleepQuality
      
      console.log("this is what it is returning", userArray)
      let selectedDay = this.selectDay('2019/06/23')
      let allUserAverage = selectedDay.reduce((acc, user) => {
        acc += user.sleepQuality/7
        return acc
      }, 0)
      return allUserAverage
    }




      //this.getAverageWeeklySleepQualityForUser()
    //  const currentUser = this.allUserData.findUserById()
      //this.allUserData.findUserById()
        //7
    //the sleepData contains an array of objects with all the users sleep information, including ID, and sleep quality, on any given night
    //we want to  create an array of objects with 1 key value pair: userID, and sleepQuality average for a given week

    //1.we want to start by selecting the week
    //2. we want to return a shallow copy of the sleepData array that returns all userObjects for that week
    //3. We will assign this array to a variable.
    //4. we will use filter over this variable to return a shallower array of only the users whos Average sleepquality value is greater than 3.

    //if our first function returns an array of all objects with a user id of blank,
    //our second function would return a new array of the user id and their average sleep quality over a
    //given week
    //another function will return only userids that average sleepquality of greater than 3 for the given week

  findBestSleeper(date){
    const targetDateData = this.allUserData.filter(sleepData => sleepData.date === date)
    const bestSleeper = targetDateData.sort((a,b) => {
      return  b.hoursSlept - a.hoursSlept
    })
    if (bestSleeper[0].hoursSlept == bestSleeper[1].hoursSlept){
      return ("It's a tie between " + bestSleeper[0] + " and " + bestSleeper[1] +"!")
    } else {
    return bestSleeper[0]
    }
  }
}
  if (typeof module !== 'undefined') {
    module.exports = SleepRepository;
  }
