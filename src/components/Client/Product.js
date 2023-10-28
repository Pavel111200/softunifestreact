import styles from '../Company/Product/Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <tr>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th>{product.price}</th>
                    <th>
                        <Link to={`/company/${product.id}`} className={styles.tableButton}>PAY$</Link>
                        <Link to={`/company/${product.id}`} className={styles.tableButton}>PayETH</Link>
                    </th>
        </tr>
    );
}

export default Product;