import React from 'react';
import Profile_image from './Components/Profile_image';
import { useSelector } from 'react-redux';

function Profile(props) {
    const user = useSelector((state)=>state.User.data)
    console.log("userrr", user);
    return (
        <div>
            <Profile_image image={user.image}/>
        </div>
    );
}

export default Profile;