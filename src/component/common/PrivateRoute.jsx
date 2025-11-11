import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { Navigate} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(Context);
    

    if(!user){
        return <Navigate  to='/auth/login'></Navigate>
    }



    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;