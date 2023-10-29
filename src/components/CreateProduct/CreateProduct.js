import styles from './CreateProduct.module.css'
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct } from '../../services/companyService';

const CreateProduct = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();
    const {companyId} = useParams();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            price,
            description
        } = Object.fromEntries(new FormData(e.target));

        addProduct({ name, price, description },companyId, user.accessToken)
            .then(() => {
                navigate('/company');
            });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
                alt="Product logo"
            />
            <h2 className={styles.title}>Add Product/Service</h2>
            <div className={styles.wrapper}>
                <label htmlFor="name" className={styles.label}>
                    Name:
                </label>
                <input type="text" name="name" className={styles.input} />                              
                <label htmlFor="description" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    className={styles.input}
                />
                <label htmlFor="price" className={styles.label}>
                    Price:
                </label>
                <input type="text" name="price" className={styles.input} />  
            </div>
            <button type="submit" className={styles.btn}>
                Add
            </button>
        </form>
    );
}

export default CreateProduct;