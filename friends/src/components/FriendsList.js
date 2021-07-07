import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from './axiosWithAuth';
import AddFriend from './AddFriend'

const Friendslist = (props) => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
        <div className="FriendsList">
        {friends.map(friend => {
            return (
            <div className="Friend">
            {friend.name}
            {friend.age}
            {friend.email}
            </div>
            )
        })}
        </div>
        <div>
            <AddFriend {...props} setFriends={setFriends} />
        </div>
        </div>
    )
}
export default Friendslist