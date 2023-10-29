import {useEffct,useState}from 'react'
import styles from '../Register/Register.module.css';
import {Link,useNavigate,useParams}from 'react-router-dom'
import {payWithCrypto}from '../../services/clientService'
import { useUserContext } from '../../contexts/UserContext';
export default function EthPayment(){
    const companyAccount="0xcE354f708B7FC1232017fA73F07d7B4d5F0eFA6b";
    const {comname}=useParams();
    const {user} = useUserContext();
    console.log(comname);
    const res=comname.split(' ');
    console.log(res[1]);

    const navigate=useNavigate();
    const onSubmit=(e)=>{
       e.preventDefault();
       const {
        clientPrivateKey,
        clientAccount
        
    } = Object.fromEntries(new FormData(e.target));

    payWithCrypto(clientPrivateKey,res[1],companyAccount,clientAccount,res[0],user.firsName)
    .then((res)=>{
        console.log(res);
        navigate('/clientHomePage/products/SoftUni');
    })
    }
return (<>
 <div className={styles.formWrapper}>
            <form onSubmit={onSubmit}>
                
                <h2 className={styles.formTitle}>Transaction ETH</h2>
                <div className={styles.inputWrapper}>
                
                </div>
                
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="PrivateKey" className={styles.formInput}  name="clientPrivateKey"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>
            
                <div className={styles.inputWrapper}>
                   
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                    <input type="text" placeholder="Client Acount" className={styles.formInput}  name="clientAccount"/>
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>
                 <button type="submit" className={styles.formBtn}>Register</button>
                <Link to="/clientHomePage/products/SoftUni" className={styles.link}>Back to list!</Link>
            </form>
        </div>
</>)
}