import User from '../entities/User.js';
import axios from 'axios';

class UserService {
    async getData() {

        const response = await axios.get('https://randomuser.me/api/?results=15');
        console.log(response.data);
        const a = response.data.results.map((user)=> new User(user.name.first, user.name.last, user.email, user.dob, user.picture.large, user.gender));
        return a;
        
    }
}
 const userService = new UserService();

 export default userService;


//  class UserService {
//     getData() {
//         return (
//             axios.get('https://randomuser.me/api/?results=15')
//             .then((response)=>{
//                 const res = response.data;
//                 const a = res.results.map((user)=> new User(user.name.first, user.name.last, user.email, user.dob, user.picture.large, user.gender));
//                 return a;
//             })

//         )
//     }
// }
//  const userService = new UserService();