import { useState } from 'react';
import styles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { registerCompany, registerClient } from '../../services/userService';



const Register = () => {
    const navigate = useNavigate();
   
    const { userLogin } = useUserContext();
    const [registrationType, setRegistrationType] = useState('company');
    const onSubmit = (e) => {
        e.preventDefault();
        if(registrationType === 'company'){
            const {
                email,
                password,
                name
            } = Object.fromEntries(new FormData(e.target));
    
            registerCompany({ email, password, name })
                .then(result=> {
                    userLogin(result);
                    navigate('/company');
                });
        }else if(registrationType === 'client'){
            const {
                email,
                password,
                firstName,
                lastName
            } = Object.fromEntries(new FormData(e.target));
    
            registerClient({ email, password, firstName, lastName })
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
                <h2 className={styles.formTitle}>Register Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="radio" name="registrationType" id="company" onClick={onCompanyClick}/>
                    <label htmlFor="company">Company</label>
                    <input type="radio" name="registrationType" id="client" onClick={onClientClick}/>
                    <label htmlFor="client">Client</label>
                </div>
                {registrationType === 'company' && 
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Company name" className={styles.formInput}  name="name"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>}
                {registrationType === 'client' &&
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="First name" className={styles.formInput}  name="firstName"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                    <input type="text" placeholder="Last name" className={styles.formInput}  name="lastName"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>
                }
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" className={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Register</button>
                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </form>
        </div>
    );
}

export default Register;