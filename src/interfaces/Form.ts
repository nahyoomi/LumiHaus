export interface LoginFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  error?: string | null;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}
