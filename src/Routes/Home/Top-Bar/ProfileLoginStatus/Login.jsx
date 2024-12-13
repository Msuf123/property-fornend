import { useSelector } from "react-redux"
import { loggedInLoading, loggedInStatus } from "../../../../redux/slices/LogedInSlice/loadingSlice"
import LoadingProfile from "./LoadingProfile/LoadingProfile"
import DataProfile from "./DataProfile/DataProfile"

export default function Profile(){
    const loggedIn=useSelector(loggedInLoading)
    return loggedIn?<LoadingProfile/>:<DataProfile></DataProfile>
}