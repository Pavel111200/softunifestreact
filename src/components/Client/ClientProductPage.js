import {useState,useEffect} from "react"
import{getAllProductsByCompanyName}from'../../services/companyService'
import { useParams } from "react-router-dom";
import {useUserContext}from'../../contexts/UserContext'
import styles from '../Company/Company.module.css';
import Product from './Product'
export default function ClientProductPage(){
    const [products,setProducts]=useState();
    const {name}=useParams();
    console.log(name);
    const {user}=useUserContext();
    useEffect(()=>{
          var result=getAllProductsByCompanyName(name,user.accessToken).then((res)=>{
            console.log(res);
            setProducts(res);
          })
         
    },[]);
    return(<>
    <div className={styles.tableWrapper}>
            
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {products == null || products.length === 0 ? <h1>No Products</h1> : products.map(p=><Product product={p}  key={p.id}/>)}            
            </tbody>
        </table>
        </div>
          
    </>)
}