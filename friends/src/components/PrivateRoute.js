import React from "react";
import { Route, Redirect } from "react-router-dom"

// requirement for this component
// 1. needs to have the same API (interface) as <Route/>
// 2. it renders a <Route /> and passes all props through to it
// 3. it checks to se if we're autenticated, if not redirect to login
//  if is authed, the render the componetn prop

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          console.log("PrivateRoute.js: Redirect")
          return <Redirect to="/login" />;
        }
      }}
    />
  )
};

export default PrivateRoute;

