import { useDispatch, useSelector } from 'react-redux'
import logo from './../../../../public/logo.jpeg'
import './TopBar.css'
import Profile from './ProfileLoginStatus/Login'
import { useEffect } from 'react'
import { checkLoggedInStatus } from '../../../redux/thunk/loggedInSlice'
export default function TopBar(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(checkLoggedInStatus())
    },[])
    return(
    <div className='topBarDiv'>
        <img src={logo} alt="Logo" />
        <Profile></Profile>
    </div>)
}