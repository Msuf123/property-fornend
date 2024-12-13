
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
import { ToastContainer } from 'react-toastify';
export default function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const nav=useNavigate()
    // Handle form submission
    async function submit() {
        try {
            const response = await fetch('http://localhost:5000/signUp/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username:username,pass:password,phone:phone}),
            });

            const res = await response.text(); // Parse the response as JSON
            if(res==="errr"){
                notify('Error at backend');
            }
            if (res === "usernameTaken") {

                notify('Usernaem is taken try something else'); // Show toast on error
            } else {
                console.log('Login successful:', res);
                localStorage.setItem('token', res)
                 nav('/')
            }
        } catch (error) {
            console.error('Error during login:', error);
            notify('An error occurred. Please try again later.'); // Show error toast if the request fails
        }
        console.log(username, password);
    }

    return (
        <div className='outerDiv'>
            <ToastContainer />
            <div className="formsDiv">
                <span className='heading'>Sign-Up</span>

                {/* Controlled input for email */}
                <input
                    type="email"
                    placeholder="Email ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="phone"
                    placeholder="phnone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {/* Controlled input for password */}
                <div className="passwordInputWrapper">
                    <input
                        type={showPassword ? "password" : "text"} // Toggle between password and text
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Eye icon to toggle password visibility */}
                    <span
                        className="eyeIcon"
                        onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Display eye slash or eye based on state */}
                    </span>
                </div>

            

                <button onClick={submit}>Sign-up</button>
            </div>
        </div>
    );
}
