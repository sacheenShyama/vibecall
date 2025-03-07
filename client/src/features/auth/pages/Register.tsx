import React from "react";
import AuthForm from "../components/auth-form";

const Register: React.FC = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <AuthForm mode="register" />
    </div>
  );
};

export default Register;
