import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

const CompanyRoute = ({children}) => {
    const { user, isAuthenticated } = useUserContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    if(user.role !== 'Company'){
        return <Navigate to="/clientHomePage" replace />
    }

    return children ? children : <Outlet />  
};

export default CompanyRoute;