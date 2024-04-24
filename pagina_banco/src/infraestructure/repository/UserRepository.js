export class UserRepository {
    constructor(dataSource) {
      this.dataSource = dataSource;
    }
  
    addUser(user) {
      this.dataSource.addUser(user);
    }
  
    getUsers() {
      return this.dataSource.getUsers();
    }
  
    updateUser(updatedUser) {
      this.dataSource.updateUser(updatedUser);
    }
  
    deleteUser(userId) {
      this.dataSource.deleteUser(userId);
    }
  }
  