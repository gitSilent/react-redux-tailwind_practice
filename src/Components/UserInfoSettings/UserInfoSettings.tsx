import React, { useEffect, useState } from 'react'
import styles from './UserInfoSettings.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../features/userInfoData/userInfoSlice';
import { ChangeEvent } from 'react';
import { IInfo,IState} from '../../interfaces/IUser';


export default function UserInfoSettings() {

const [localUserInfo, setLocalUserInfo] = useState<IInfo>({
    firstName:"",
    lastName:"",
    age:"",
    country:"",
    city:"",
    img:""
})
const userInfo = useSelector((state:IState) => state.userInfo.info)
const dispatch = useDispatch();

const navigate = useNavigate();

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target);
    const {name,value} = event.target;

    setLocalUserInfo({
        ...localUserInfo,
        [name]:value
    })
}

const applyChanges = () => {
    dispatch(setUserInfo(localUserInfo))
}

useEffect(()=>{
    setLocalUserInfo(userInfo)
},[userInfo])

useEffect(()=>{
    if (!userInfo.firstName){
        navigate('/')
    }
},[])

  return (
    <div className={styles.userInfoSettings}>
        <h1>CHANGE INFO</h1>
        <input name='firstName' type="text" value={localUserInfo?.firstName} onChange={handleInputChange}/>
        <input name='lastName' type="text" value={localUserInfo?.lastName} onChange={handleInputChange}/>
        <input name='age' type="text" value={localUserInfo?.age} onChange={handleInputChange}/>
        <input name='country' type="text" value={localUserInfo?.country} onChange={handleInputChange}/>
        <input name='city' type="text" value={localUserInfo?.city} onChange={handleInputChange}/>
        <input name='img' type="text" value={localUserInfo?.img} onChange={handleInputChange}/>
      <button className={styles.userInfoSettings__mainBtn} onClick={applyChanges}>Apply Changes</button>
      <button className={styles.userInfoSettings__mainBtn} onClick={()=>{navigate('/')}}>To Main</button>

    </div>
  )
}
