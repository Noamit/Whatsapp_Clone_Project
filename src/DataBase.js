import User from "./User";
import noadog from './noadog.jpg';

class DataBase {
    constructor() {
        this.usersDataBase = new Map();
    }

    addUserToDataBase(key, user) {
        this.usersDataBase.set(key,user);
    }

}

const dataBase = new DataBase();
dataBase.addUserToDataBase('noamit', new User('noamit', 'noa', 'noa1', noadog));
dataBase.addUserToDataBase('noa',new User('noa', 'noa', 'noa1', noadog));

export default dataBase;