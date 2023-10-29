import {useEffct,useState}from 'react'
import styles from '../Register/Register.module.css';
import {Link,useNavigate}from 'react-router-dom'
import {payWithCrypto}from '../../services/clientService'
export default function EthPayment(){
    const companyAccount="0xcE354f708B7FC1232017fA73F07d7B4d5F0eFA6b";
    const navigate=useNavigate();
    const onSubmit=(e)=>{
       e.preventDefault();
       const {
        clientPrivateKey,
        amount,
        clientAccount
        
    } = Object.fromEntries(new FormData(e.target));

    payWithCrypto(clientPrivateKey,amount,companyAccount,clientAccount)
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
                    <input type="text" placeholder="Amount" className={styles.formInput}  name="amount"/>
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