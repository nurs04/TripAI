"use client"
import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailsContext } from '@/context/UserDetailsContext';

export default function Provider(
{
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {
  const CreateUser=useMutation(api.user.CreateNewUser)
  const [userDetail, setUserDetail] = useState<any>();
  const {user} = useUser();
  useEffect(()=>{
    user&&CreateNewUser();
  }, [user])
  const CreateNewUser = async() => {
    if(user){
    // Save new user if not Exist
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress??'',
        imageUrl:user?.imageUrl,
        name: user?.fullName??''
      })
      setUserDetail(result);
    }
  }

  return (
    <UserDetailsContext.Provider value={{userDetail, setUserDetail}}>
    <div>
        <Header/>
        {children}
    </div>
    </UserDetailsContext.Provider>
  )
}

export const useUserDetail = () => {
  return useContext(UserDetailsContext);
}