import User from "./User";
import noadog from './noadog.jpg';

// const usersDataBase = [];
// const newUser = new User('noamit', 'noa', 'noa1', noadog);

// usersDataBase.push({key: 'noamit', value: newUser});

// export default usersDataBase;

class DataBase {
    constructor() {
        this.usersDataBase = new Map();
    }

    addUserToDataBase(key, user) {
        this.usersDataBase.set(key,user);
    }

}

const a = new DataBase();
a.addUserToDataBase('noamit', new User('noamit', 'noa', 'noa1', noadog));
a.addUserToDataBase('noa',new User('noamit', 'noa', 'noa1', noadog));

export default a;