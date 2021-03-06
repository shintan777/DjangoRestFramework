import React from 'react'
import {useForm, appendErrors} from 'react-hook-form'
import '../styles/App.css'
import Dp from '../profilepic.jpg'
import { useState } from 'react';


export default function Loginbox() {

    const [errorMsg, setErrorMsg] = useState('')

    const {register,handleSubmit,errors}=useForm()

    const onSubmit=(data)=>{
        var isError=0
        var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!re.test(data.email)){
            setErrorMsg('*Incorrect Email')
            isError=1
        }
        if(isError===0){
            setErrorMsg('')
            console.log(data)
        }
    }

    

    return (
        <div className='loginbox'>
                <p className='boxtitle'>Login</p>
                <img src={Dp} className='dp'/>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                    <input type='text' name='email' className='linput' placeholder='Enter Email' ref={register({required:true})} />
                    <br/>
                    <input type='password' name='pass' className='linput' placeholder='Enter Password' ref={register({required:true})} />
                    <br/>
                    <p className='errormsg'>{errorMsg}</p>
                    <input type='Submit' className='lbtn' value='Login'/>
                </form>
        </div>
    )
}

