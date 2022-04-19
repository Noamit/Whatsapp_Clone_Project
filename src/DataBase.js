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
dataBase.addUserToDataBase('noamit', new User('noamit', 'noa amit', 'noa1', noadog));
dataBase.addUserToDataBase('tomer',new User('tomer', 'tomer hadar', 'tomer1', noadog));
dataBase.addUserToDataBase('noamit1', new User('noamit', 'noa amit', 'noa1', noadog));
dataBase.addUserToDataBase('tomer2',new User('tomer', 'tomer hadar', 'tomer1', noadog));

export default dataBase;