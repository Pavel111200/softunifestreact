import {useState,useEffect} from "react"
import styles from '../Company/Company.module.css';
import {getAllCompanies,getCompanyByStr} from'../../services/clientService'
import { useUserContext } from '../../contexts/UserContext';
import Company from '../Client/Company';
export default function ClientHomePage(){
    const[companies,setCompanies]=useState()
    const {user} = useUserContext();
    const onSubmit=(e)=>{
        e.preventDefault();
        const {
            str,
        } = Object.fromEntries(new FormData(e.target));
        console.log(str);
        getCompanyByStr(str,user.accessToken).then((res)=>{
            console.log(res);
            setCompanies(res);
        })
        
    }
    const onClick=()=>{
        getAllCompanies(user.accessToken)
            .then(res=>{
                console.log(res)
                setCompanies(res)
            });
    }
    useEffect(()=>{
        try {
            
            getAllCompanies(user.accessToken)
            .then(res=>{
                console.log(res)
                setCompanies(res)
            });
        } catch (error) {
            
        }
    },[]);
    return(<>
    <div className={styles.topnav}>
        <form onSubmit={onSubmit}>
        <input type="text"name="str" placeholder="Search.."/>
        </form>
      
       <button type="button"  onClick={onClick}>GetAll</button>
         
</div>
        <div className={styles.tableWrapper}>
            
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {companies == null || companies.length === 0 ? <h1>No Companies</h1> : companies.map(c=><Company company={c}  key={c.id}/>)}            
            </tbody>
        </table>
        </div>
        </>);
}