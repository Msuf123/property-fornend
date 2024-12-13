import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { ToastContainer } from 'react-toastify';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    // Initialize the toast notifications
    const notify = (message) => toast.error(message);

    // Handle form submission
    async function submit() {
        const userData = { username: username, pass: password };

        try {
            const response = await fetch('http://localhost:5000/signUp/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const res = await response.text(); // Parse the response as JSON
   
            if (res !== "dokay") { 
                
                notify('Invalid credentials, please try again'); // Show toast on error
            } else {
                console.log('Login successful:', res);
                // You can redirect the user, save tokens, or any other action on success
            }
        } catch (error) {
            console.error('Error during login:', error);
            notify('An error occurred. Please try again later.'); // Show error toast if the request fails
        }
    }

    return (
        <div className='outerDiv'>
            <ToastContainer />

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
                        type={showPassword ? "text" : "password"} // Toggle between password and text
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
