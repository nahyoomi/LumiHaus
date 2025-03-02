import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { authService } from "../services/authService";
import { useModal } from "../contexts/ModalContext";
import { validateCredentials } from "../utils/validators";
import Button from "./Button";
import LoginForm from "./LoginForm";

const LoginModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, logout, error, setError } = useAuth();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateCredentials(email, password);
    if (validationError) return setError(validationError);

    setIsLoading(true);
    try {
      const { access_token } = await authService.login({ email, password });
      login(access_token);
      closeModal();
    } catch (err) {
      console.error(err);
      setError("Email or password is incorrect");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    closeModal();
  };

  const goToAdmin = () => {
    closeModal();
    navigate("/admin");
  };

  return isAuthenticated ? (
    <div className="mt-4">
      <p className="mb-4">Login successful</p>
      <div className="flex flex-col space-y-2">
        <Button onClick={goToAdmin} text="ADMIN PANEL" variant="outlined" />
        <Button onClick={handleLogout} text="LOG OUT" variant="tonal" />
      </div>
    </div>
  ) : (
    <LoginForm
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginModal;