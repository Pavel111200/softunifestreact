import {useState,useEffect} from 'react';
import styles from '../Company/Company.module.css';
export default function ClientsProducts (){

    const [products,setProducts]=useState()
    useEffect(()=>{
        try {
            
        } catch (error) {
            
        }
    });
return(<>
<div className={styles.tableWrapper}>
    <table className={styles.table}>
        <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Buy</th>
            </tr>
        </thead>
        <tbody>
        {companies == null || companies.length === 0 ? <td>No Companies</td> : companies.map(c=><Company company={c}  key={c.id}/>)}            
        </tbody>
    </table>
    </div></>)
}