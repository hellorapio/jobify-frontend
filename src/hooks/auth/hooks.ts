import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "@/services/auth";
import { signup as signupApi } from "@/services/auth";

export function useLogin(cb: () => void) {
  const navigate = useNavigate();

  const { mutateAsync: login } = useMutation({
    mutationFn: (body: object) => loginApi(body),
    onSuccess: () => {
      toast.success("Logged in successfully", { duration: 4000 });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message, { duration: 6000 });
      cb();
    },
  });

  return { login };
}

export function useSignup(cb: () => void) {
  const navigate = useNavigate();

  const { mutateAsync: signup } = useMutation({
    mutationFn: (body: object) => signupApi(body),
    onSuccess: () => {
      toast.success(
        "Your account has been created successfully, Please Check Your Email to verify your account.",
        { duration: 6000 }
      );
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message, { duration: 6000 });
      cb();
    },
  });

  return { signup };
}
