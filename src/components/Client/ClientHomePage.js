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
        var result=getCompanyByStr(str,user.accessToken)
        setCompanies(result);
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
        <input type="text" placeholder="Search.."/>
        </form>
      
        
        
 
  
</div>
        <div className={styles.tableWrapper}>
            
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    <th>Id</th>
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