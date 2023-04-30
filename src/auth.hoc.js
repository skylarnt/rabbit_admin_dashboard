import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const WithAuth = (WrappedComponent, protectedRoutes) => {
    const {data} =useAuth();
    const location = useLocation();
    
    // if (data.onboarded ===false && data.user_type ===undefined) {
    
    //     return <Navigate to="/onboarding" />;

    // }  
     if(data?.accepted_terms_conditions ===false && data.user_type ===undefined){
      return <Navigate to="/kyc_mou" />;


    }
    else if(data?.accepted_terms_conditions !==false && location.pathname =='/kyc_mou' && data.user_type ===undefined) {
      return <Navigate to="/app/dashboard" />;


    }
    else if(data?.onboarded !==false && location.pathname ==='/onboarding' && data.user_type ===undefined) {
      return <Navigate to="/app/dashboard" />;


    }
    else {
      return <WrappedComponent />;
    }
}

export default WithAuth;