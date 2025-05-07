'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const verifyEmail = () => {
    // const {router} = useAppContext();

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/verifyemail", {token});
            setVerified(true);
        } catch (error) {
            setError(true);
            console.log(error.reponse.data);
        }

    
    }
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];

        // const {query} = router();
        // const urlToken = query.token;
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        if(token.length > 0){
            verifyUserEmail();
        }
    }, [token]) 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className="text-4xl px-2 py-2 mb-6">Verify Email</h1>
        <h2 className="p-2 bg-orange-500 text-black font-bold rounded-2xl">
            {token ? `${token}`: "no token"}
        </h2>
        {verified && (
            <div>
                <h2 className='text-2xl'>Email Verified</h2>
                <Link href='/sign-in'>Login</Link>
            </div>
        )}
        {error && (
            <div>
                <h2 className="text-2xl bg-red-500 text-black">Error</h2>
            </div>
        )}
    </div>
  )
}

export default verifyEmail