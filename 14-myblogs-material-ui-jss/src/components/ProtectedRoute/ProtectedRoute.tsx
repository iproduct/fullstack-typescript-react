import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { RootState } from '../../app/rootReducer';
import { requestedProtectedResource } from '../../features/auth/authSlice';


const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.loggedUser);
    const dispatch = useDispatch();

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!isAuthenticated) {
                    dispatch(requestedProtectedResource(location.pathname))
                }

                return isAuthenticated ? (
                    children
                ) : (
                        <Redirect to={{ pathname: "/login" }} />
                    );
            }}
        />
    );
}

export default ProtectedRoute