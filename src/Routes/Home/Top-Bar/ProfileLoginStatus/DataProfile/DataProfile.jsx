import { useSelector } from "react-redux"
import { loggedInStatus } from "../../../../../redux/slices/LogedInSlice/loadingSlice"
import UserData from "./UserData/UserData"
import NoData from "./NoData/NoData"
import { useEffect } from "react"

export default function DataProfile(){
    const userData=useSelector(loggedInStatus)
    useEffect(()=>{
        console.log(userData)
    })
    return userData?<UserData></UserData>:<NoData></NoData>
}