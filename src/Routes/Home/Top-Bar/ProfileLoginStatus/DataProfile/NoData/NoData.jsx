import './NoData.css'
import { useNavigate } from 'react-router-dom';
export default function NoData(){
    const navigate=useNavigate()
    function navigation(){
        navigate('/login')
    }
    return (
        <div className='loginButton' onClick={navigation} tabIndex={1}>Login</div>
    )
}