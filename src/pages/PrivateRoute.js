import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({children, ...rest}) => {
  console.log("rest", rest)
  const {isAithenticeated, user}=useAuth0
  const isUser = isAithenticeated && user

  return <Route {...rest} render = {()=>{
    return isUser?children : <Redirect to = "/login"></Redirect>
  }}></Route>;
};
export default PrivateRoute;
