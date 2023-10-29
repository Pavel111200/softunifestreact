import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import styles from './EditProduct.module.css';
import { editProduct, getProduct } from "../../services/companyService";


const EditProduct = () => {
    const {companyId,productId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useUserContext();
    const navitage = useNavigate();

    useEffect(() => {
        try {
            getProduct(productId, user.accessToken)
            .then(result => setProduct(result));
        } catch (error) {
            console.log(error);
        }
    },[companyId]);

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            editProduct(product, productId, user.accessToken)
        .then(()=> navitage('/company'));
        } catch (error) {
        }

        
    }

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
                alt="Product logo"
            />
            <h2 className={styles.title}>Edit Product/Service</h2>
            <div className={styles.wrapper}>
                <label htmlFor="name" className={styles.label}>
                    Name:
                </label>
                <input 
                    type="text" 
                    name="name" 
                    className={styles.input} 
                    value={product.name} 
                    onChange={onChange}
                    />                                
                <label htmlFor="price" className={styles.label}>
                    Price:
                </label>
                <input 
                    type="text" 
                    name="price" 
                    className={styles.input} 
                    value={product.price} 
                    onChange={onChange}
                    /> 
                    <label htmlFor="description" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    className={styles.input}
                    value={product.description}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Edit
            </button>
        </form>
    );
}

export default EditProduct;