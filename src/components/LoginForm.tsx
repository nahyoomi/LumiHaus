import React from "react";
import { Images } from "../assets";

interface LoginFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  error?: string | null;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  error,
  isLoading,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-10 ">
      <img
        src={Images.DefaultUser.src}
        alt={Images.DefaultUser.alt}
        className="w-24 h-24 rounded-full mx-auto"
      />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="pr-4 pl-4">
        <label htmlFor="email" className="font-semibold text-sm leading-5 text-custom-dark">
          Email 
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email address..."
          required
          className="w-full rounded-[6px] border border-custom-dark p-3 gap-2"
        />
      </div>

      <div className="pr-4 pl-4">
        <label htmlFor="password" className="font-semibold text-sm leading-5 text-custom-dark">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => onPasswordChange(e.target.value)}
          required
          className="w-full rounded-[6px] border border-custom-dark p-3 gap-2"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-custom-blue text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium text-base leading-6 hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLoading ? "LOG IN..." : "LOG IN"}
      </button>
    </form>
  );
};

export default LoginForm;