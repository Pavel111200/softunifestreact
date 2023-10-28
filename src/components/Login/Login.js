import styles from './Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginClient, loginCompany } from '../../services/userService'
import { useUserContext } from '../../contexts/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useUserContext();
    const [registrationType, setRegistrationType] = useState('company');
    const onSubmit = (e) => {
        e.preventDefault();

        if(registrationType === 'company'){
            const {
                email,
                password
            } = Object.fromEntries(new FormData(e.target));
    
            loginCompany({ email, password})
                .then(result=> {
                    userLogin(result);
                    navigate('/company');
                });
        }else if(registrationType === 'client'){
            const {
                email,
                password
            } = Object.fromEntries(new FormData(e.target));
    
            loginClient({ email, password})
                .then(result=> {
                    userLogin(result);
                    navigate('/clientHomePage');
                });
        }

    }
    const onCompanyClick = ()=>{
        setRegistrationType('company');
    }
    const onClientClick = () => {
        setRegistrationType('client');
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={onSubmit}>
                <img className={styles.formImg} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user-logo" />
                <h2 className={styles.formTitle}>Login Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="radio" name="registrationType" id="company" onClick={onCompanyClick}/>
                    <label htmlFor="company">Company</label>
                    <input type="radio" name="registrationType" id="client" onClick={onClientClick}/>
                    <label htmlFor="client">Client</label>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Login</button>
                <Link to="/register" className={styles.link}>Don't have an account? Click here.</Link>
            </form>
        </div>
    );
}

export default Login;