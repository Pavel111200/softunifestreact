import { useEffect, useState } from 'react';
import styles from './Company.module.css';
import { getAllProducts } from '../../services/companyService';
import { useUserContext } from '../../contexts/UserContext';
import Product from './Product/Product';

const Company = () => {
    const {user} = useUserContext();
    const [products, setProducts] = useState();

    useEffect(()=>{
        try {
                getAllProducts(user.id, user.accessToken)
                .then(res=>{
                    setProducts(res);
                })
        } catch (error) {
    
        }
    },[]);

    return(
        <>
        <div className={styles.tableWrapper}>
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {products == null || products.length === 0 ? <h1>No Products</h1> : products.map(p=><Product product={p}  key={p.id}/>)}               
            </tbody>
        </table>
        </div>
        </>
    );
}

export default Company;