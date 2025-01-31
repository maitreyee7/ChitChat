/*import React from 'react'
import { auth } from '../../lib/firebase';
import  "./detail.css";
const Detail = () => {

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Call the signOut method
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };


  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Maitreyee P</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
           <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
           <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          </div>
          <div className="option">
            <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
            </div>
           
            <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./bg.jpg" alt="" />
              <span>photo_2024_3.png</span>
              
              </div>
              <img src="./download.png" alt="" className='icon'/>
             
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="./chatsign.png" alt="" />
              <span>photo_2024_3.png</span>
              
              </div>
              <img src="./download.png" alt="" className='icon'/>
              
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="./chatsign.png" alt="" />
              <span>photo_2024_3.png</span>
            
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="./chatsign.png" alt="" />
              <span>photo_2024_3.png</span>
              
              </div>
              <img src="./download.png" alt="" className='icon'/>
            </div>

            
          </div>
        </div>

       

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
      <button>Block User</button>
      <button className='logout' onClick={handleLogout}>Logout</button>
      </div>

    </div> 
  );
}

export default Detail;
*/

import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth ,db} from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import  "./detail.css";
const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock =async()=>{
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar  || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>NO STATUS</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
           <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          </div>
          <div className="option">
            <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
            </div>
           
            <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./bg.jpg" alt="" />
              <span>photo_2024_3.png</span>
              
              </div>
              <img src="./download.png" alt="" className='icon'/>
             
            </div>

            <div className="photoItem">
              <div className="photoDetail">
              <img src="./chatsign.png" alt="" />
              <span>photo_2024_3.png</span>
              
              </div>
              <img src="./download.png" alt="" className='icon'/>
              
            </div>

            

            
          </div>
        </div>

       

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
      <button onClick={handleBlock}>
      {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
      </button>
      <button className='logout'  onClick={()=> auth.signOut()} >Logout</button>
      </div>

    </div> 
  );
}

export default Detail;