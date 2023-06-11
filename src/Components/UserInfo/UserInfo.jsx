import React, { useEffect, useState } from 'react'
import styles from './UserInfo.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../features/userInfoData/userInfoSlice'
import { useNavigate } from 'react-router-dom'

export default function UserInfo() {
  // const [userInfo, setUserInfo] = useState({})
  const userInfo = useSelector((state) => state.userInfo.info)
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const fetchData = () => {
    axios.get("https://randomuser.me/api/")
    .then((response)=>{
      console.log(response.data.results[0]);
      const info = response.data.results[0];
      const newState = {
        firstName:info?.name?.first,
        lastName:info?.name?.last,
        age:info?.dob?.age,
        country:info?.location?.country,
        city:info?.location?.city,
        img:info?.picture?.large
    }
      dispatch(setUserInfo(newState))
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  useEffect(()=>{
    if (!userInfo.firstName){
      fetchData()
    }
},[])

  useEffect(()=>{
    console.log(userInfo);
  },[userInfo])


  return (
    <div className={styles.userInfo}>
      <h1>ABOUT USER</h1>
      <span><b>Full Name:</b> {userInfo?.firstName} {userInfo?.lastName}</span>
      <span><b>Age:</b> {userInfo?.age}</span>
      <span><b>Location:</b> {userInfo?.country}, {userInfo?.city}</span>
      <img src={userInfo?.img} alt="User" className={styles.userInfo__userImg}/>
      <button className={styles.userInfo__getNewBtn} onClick={()=>{fetchData()}}>GET NEW USER</button>
      <button className={styles.userInfo__settingsBtn} onClick={()=>{navigate('/settings')}}>Change Info</button>
    </div>
      
  )
}
