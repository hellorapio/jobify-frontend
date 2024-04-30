import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  login as loginApi,
  signup as signupApi,
  logout as logoutApi,
  verifyAccount,
} from "@/services/auth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: login } = useMutation({
    mutationFn: (body: object) => loginApi(body),
    onSuccess: (data) => {
      toast.success("Logged in successfully");
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login };
}

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync: signup } = useMutation({
    mutationFn: (body: object) => signupApi(body),
    onSuccess: (data) => {
      toast.success(
        "Your account has been created successfully, Please Check Your Email to verify your account."
      );
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup };
}

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: logout } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: async () => {
      toast.success("Logged out successfully");
      localStorage.removeItem("token");
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout };
}

export function useVerify() {
  return useMutation({
    mutationFn: (token: string) => verifyAccount(token),
    onSuccess: () => {
      toast.success("Account verified successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
