import User from "./User";
import noadog from './noadog.jpg'
import audioFile from './audio.mp3'

//DataBase to manage all the users and their chats with the messages.

class DataBase {
    constructor() {
        this.usersDataBase = new Map();
    }

    addUserToDataBase(key, user) {
        this.usersDataBase.set(key,user);
    }
}


const dataBase = new DataBase();


//Hard-Coded users and messages
dataBase.addUserToDataBase('noamit', new User('noamit', 'noa amit', 'noa1', noadog));
dataBase.addUserToDataBase('tomer',new User('tomer', 'tomer hadar', 'tomer1', noadog));
dataBase.addUserToDataBase('noamit1', new User('noamit', 'noa amit', 'noa1', noadog));
dataBase.addUserToDataBase('tomer2',new User('tomer', 'tomer_hadar', 'tomer1', noadog));
dataBase.usersDataBase.get('noamit').userChats.push(<p className={`message ${true && 'recive_message'}`}>
<audio src={audioFile} controls />  <span className='message_time'>8:00</span></p>)
dataBase.usersDataBase.get('noamit').lastMsg = 'moo'
dataBase.usersDataBase.get('noamit').lastMsgTime = '8:00'

export default dataBase;