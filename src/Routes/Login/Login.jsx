import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    // Handle form submission
    function submit() {
        // In a real app, you'd send these to your backend for authentication
        console.log(username, password);
    }

    return (
        <div className='outerDiv'>
            <div className="formsDiv">
                <span className='heading'>Login</span>

                {/* Controlled input for email */}
                <input
                    type="email"
                    placeholder="Email ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Controlled input for password */}
                <div className="passwordInputWrapper">
                    <input
                        type={showPassword ? "password" : "text" } // Toggle between password and text
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

                <span className='desc'>
                    Don't have an account? <Link to="/signup">Sign-up</Link>
                </span>

                <button onClick={submit}>Login</button>
            </div>
        </div>
    );
}
