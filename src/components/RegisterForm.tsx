'use client'

import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";

export default function RegisterForm(){
    const [username,setUsername] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const router = useRouter()

    function register() : any{
        userRegister(username,tel,email,password)
        router.replace('/')
    }

    return(
        <FormControl className="space-y-5 w-96 rounded-xl bg-gray-100" sx={{border: "2px solid",borderColor:"#9E9E9E",m: 2,p:2}}>
            <TextField id="username" label="Username" variant="standard" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <TextField id="tel" label="Tel" variant="standard" value={tel} onChange={(e)=>setTel(e.target.value)}/>
            <TextField id="email" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField id="password" label="Password (minimum length: 6)" variant="standard" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button variant="contained" className="text-sky-800 bg-white" onClick={()=>register()}>Register</Button>
        </FormControl>
    )
}