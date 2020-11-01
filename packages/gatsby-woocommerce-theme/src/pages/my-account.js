import React from "react";
import Layout from "../components/layout";
import Login from "../components/login";
import Register from "../components/register";


const MyAccount = () => (
  <Layout>
 <div className="container my-5">
 <h1 className="mt-5 mb-4">My Account Page.</h1>     
        <div className="row">
            <div className="col-lg-6">
            <Login />
            </div>
            <div className="col-lg-6">
            <Register />    
            </div>
        </div>
  </div>   
  </Layout>
);

export default MyAccount;
