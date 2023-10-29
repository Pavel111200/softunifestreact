import styles from '../Company/Product/Product.module.css';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const Product = ({product, companyName}) => {
    const onToken = (token) =>{
        console.log(token);
    };

    return (
        <tr>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th>{product.price}</th>
                    <th>
                    <StripeCheckout name="Pay with Stripe" token={onToken} stripeKey="pk_test_51O5qWTBAsyNuGIwOUfywMCvhsMCEnB0JOQh3MSkQQJTPUCymmhPekZaUkJVzRC3BOzGbMm35TtY4k8UKBDMPIjS500D4zBrSGG"/>
                        <Link to={`/clientHomePage/products/${companyName}/EthPayment/${product.name} ${product.price}`} className={styles.tableButton}>PayETH</Link>
                    </th>
        </tr>
    );
}

export default Product;