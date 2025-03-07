import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

interface AuthFormProps {
  mode: "login" | "register";
}
const AuthForm: React.FC<AuthFormProps> = () => {
  const router = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  return <div>AuthForm</div>;
};

export default AuthForm;
