import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./phone.css"
import { RecaptchaVerifier } from 'firebase/auth/web-extension'
import { signInWithPhoneNumber } from 'firebase/auth'


function Phonesignin() {

const[phone,setPhone] =useState("")
const [user,setuser] =useState(null)
const [otp,setotp] =useState("")
 
const sendOtp = async()=>{
    try{
    const recaptcha = new RecaptchaVerifier (auth,"recaptcha",{})
     const confirmation =signInWithPhoneNumber(auth,phone,recaptcha)
     setUser(confirmation)
    }catch(err){
        console.error(err)
    }

    const verifyOtp =async()=>{
        try{
         const data =  await user.confirm(otp)
         console.log
        }catch(err)
        console.error(err) 

    }


    return (
        <div className='phone-signin'>
            <div className='phone-content'>
            <PhoneInput
            country={"us"}
          value={phone}
          onChange={(phone)=>setPhone("+" + phone)}
            />
            
           <button onClick={sendOtp} sx={{margintop:"10px"}} varient='contained'>Send Otp</button>
           <div style={{marginTop:"10px"}} id="recaptcha"></div>
           <br/>
           <textField onChange={()=> setotp(e.target.value)} sx={{margintop:"10px",width:"300px"}} varient='outlined' size='small' label="Enter Otp" />
           <br/>
          <button onClick={verifyOtp} sx={{margintop:"10px"}}   varient='contained' color='success'>Verify Otp</button>  
 
            </div>
          
        </div>
    )
}

export default Phonesignin