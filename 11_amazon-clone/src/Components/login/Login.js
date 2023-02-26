import { useState } from 'react';
import './login.scss'
import { Link } from 'react-router-dom';

export default function Login() {
    // to track form input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase login 
    }

    const register = e => {
        e.preventDefault();
        // firebase register
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png" alt="logo_navi" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please see
                        our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                    </p>
                    <button onClick={register} className='login__registerButton'>Create your amazon account</button>
                </form>
            </div>

        </div>
    )
}
