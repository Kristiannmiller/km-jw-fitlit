class HydrationRepository {
  constructor(data){
    this.data = data
    }
    findUserById(id) {
      let foundUser = this.data.find(user => user.userID === id)
      return foundUser
    }
  }
  if (typeof module !== 'undefined') {
    module.exports = HydrationRepository;
  } else {
    module.exports = HydrationRepository;
  }
