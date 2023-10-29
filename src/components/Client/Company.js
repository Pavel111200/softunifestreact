import styles from '../Company/Product/Product.module.css';
import { Link } from 'react-router-dom';

const Company = ({company}) => {
    return (
        <tr>
                    
                    <th>{company.name}</th>
                    <th>{company.email}</th>
                    <th>
                        <Link to={`/clientHomePage/products/${company.name}`} className={styles.tableButton}>See Products</Link>
                    </th>
        </tr>
    );
}

export default Company;