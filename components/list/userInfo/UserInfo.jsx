/*import React from 'react';
import { useUserStore } from '../../../lib/userStore';
import "./userInfo.css";

const UserInfo = () => {

  const {currentUser}= useUserStore();
  return (
    <div className='userInfo'>
      <div className="user">
          <img src={currentUser.avatar || "./avatar.png"} alt="" />
          <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
          <img src="./more.png" alt="more" />
          <img src="./video.png" alt="vid" />
          <img src="./edit.png" alt="edit" />
      </div>
    </div>
  )  
}

export default UserInfo;*/
import React from 'react';
import { useUserStore } from '../../../lib/userStore';
import "./userInfo.css";

const UserInfo = () => {

  const {currentUser, isLoading, fetchUserInfo}= useUserStore();
  
  return (
    <div className='userInfo'>
      <div className="user">
          <img src={ currentUser.avatar|| "./avatar.png"} alt="" />
          <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
          <img src="./more.png" alt="more" />
          <img src="./video.png" alt="vid" />
          <img src="./edit.png" alt="edit" />
      </div>
    </div>
  )  
}

export default UserInfo;
