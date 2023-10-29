import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

const ClientRoute = ({children}) => {
    const { user, isAuthenticated } = useUserContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    if(user.role !== 'Client'){
        return <Navigate to="/company" replace />
    }

    return children ? children : <Outlet />  
};

export default ClientRoute;