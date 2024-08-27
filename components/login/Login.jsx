
/*import { useState } from 'react';
import { toast } from 'react-toastify';
import './login.css' ;
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { setDoc ,doc} from 'firebase/firestore';
import upload from '../../lib/upload';


const Login = () => {
const[avatar,setAvatar]= useState({
    file:null,
    url:""
});

const [loading,setLoading]= useState(false)
 
 
const handleAvatar= e =>{

    if(e.target.files[0]){

   
    setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
    })
}
}



const handleRegister= async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData= new FormData(e.target);
 
    const { username, email, password } = Object.fromEntries(formData);
    
   try{
       const res = await createUserWithEmailAndPassword(auth,email,password);

       const imgUrl = avatar.file ? await upload(avatar.file) : "";
       await setDoc(doc(db,"users",res.user.uid),{
           username,
           email,
           avatar: imgUrl,
           id: res.user.uid,
           blocked: []
       });

       await setDoc(doc(db,"userchats ",res.user.uid),{
        chats: [], 
        });
        toast.success("Account created! Login to continue");

   }
   catch(err){
        console.log(err)
        toast.error(err.message)
   }
   finally{
        setLoading(false);
   }
};

const handleLogin= async(e) =>{
    e.preventDefault(); 
    setLoading(true);
    const formData= new FormData(e.target);
 
    const { email, password } = Object.fromEntries(formData);
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } 
    catch(err){
        console.log(err)
        toast.error(err.message)
   }
   finally{
        setLoading(false);
   }
};  
  return (


    <div className='login'>
        <div className="item">
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="email" id="" placeholder='Email' />
                <input type="password" name="password" id="" placeholder='Password' />
                <button disabled={loading}>{loading ? "Loading" :"Sign In"}</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                <img src={avatar.url  || "./avatar.png"} alt="" />
                Upload an image
                </label>
                <input 
                type="file" 
                 id="file" 
                  style={{display:"none"}}  
                onChange={handleAvatar}/>
                <input type="text" name="username" id="" placeholder='Username' />
<input type="text" name="email" id="" placeholder='Email' />
<input type="password" name="password" id="" placeholder='Password' />

                <button disabled={loading}>{loading ? "Loading" :"Sign Up"}</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login;
*/

import { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { setDoc ,doc} from 'firebase/firestore';
import './login.css' ;
import upload from '../../lib/upload';
useState
const Login = () => {
    const[avatar,setAvatar]= useState({
        file:null,
        url:""
    });
    const [loading,setLoading]= useState(false);

    const handleAvatar= e =>{

        if(e.target.files[0]){
    
       
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
    }

    const handleRegister= async(e) =>{
        e.preventDefault(); 
        const formData= new FormData(e.target);
 
    const { username, email, password } = Object.fromEntries(formData);
    
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
 
        const imgUrl = avatar.file ? await upload(avatar.file) : "";
        await setDoc(doc(db,"users",res.user.uid),{
            username,
            email,
            avatar: imgUrl,
            id: res.user.uid,
            blocked: []
        });
 
        await setDoc(doc(db,"userchats ",res.user.uid),{
         chats: [], 
         });
         toast.success("Account created! Login to continue");
 
    }
    catch(err){
         console.log(err)
         toast.error(err.message)
    }
    finally{
        setLoading(false);
    }
    

        
    };  

    const handleLogin= async(e) =>{
        e.preventDefault(); 
        setLoading(true);
    const formData= new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } 

       
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
        finally{
            setLoading(false);
        }
        
    }; 

    return (


        <div className='login'>
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name="email" id="" placeholder='Email' />
                    <input type="password" name="password" id="" placeholder='Password' />
                    <button disabled={loading}> {loading ? "Loading" :"Sign In"} </button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2>Create Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                    <img src={avatar.url  || "./avatar.png"} alt="" />
                    Upload an image
                    </label>
                    <input 
                    type="file" 
                     id="file" 
                      style={{display:"none"}}  
                    onChange={handleAvatar}/>
                    <input type="text" name="username" id="" placeholder='Username' />
                    <input type="text" name="email" id="" placeholder='Email' />
                    <input type="password" name="password" id="" placeholder='Password' />
    
                    <button disabled={loading}>{loading ? "Loading" :"Sign Up"}</button>
                </form>
            </div>
          
        </div>
      )
    }
    
    export default Login;