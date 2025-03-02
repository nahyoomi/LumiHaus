import { Images } from "../assets";
import { LoginFormProps } from "../interfaces/Form";

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  error,
  isLoading,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-10">
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

    <div className="px-4">
      <label
        htmlFor="email"
        className="block font-semibold text-sm text-custom-dark"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Enter your email address..."
        required
        className="w-full rounded border p-3 mt-1"
      />
    </div>

    <div className="px-4">
      <label
        htmlFor="password"
        className="block font-semibold text-sm text-custom-dark"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Enter your password"
        required
        className="w-full rounded border p-3 mt-1"
      />
    </div>

    <button
      type="submit"
      disabled={isLoading}
      className="w-full bg-custom-blue text-white p-3 rounded-full transition duration-200 font-medium text-base leading-6 hover:bg-blue-700 disabled:bg-blue-300"
    >
      {isLoading ? "LOG IN..." : "LOG IN"}
    </button>
  </form>
);

export default LoginForm;
