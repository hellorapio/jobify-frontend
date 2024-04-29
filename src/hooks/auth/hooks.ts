import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "@/services/auth";
import { signup as signupApi } from "@/services/auth";
export function useLogin(errCb: () => void) {
  const queryClient = useQueryClient()
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
      errCb();
    },
  });

  return { login };
}

export function useSignup(cb: () => void) {
  const navigate = useNavigate();

  const { mutateAsync: signup } = useMutation({
    mutationFn: (body: object) => signupApi(body),
    onSuccess: (data) => {
      toast.success(
        "Your account has been created successfully, Please Check Your Email to verify your account."
      );
      localStorage.setItem("token", data.token);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
      cb();
    },
  });

  return { signup };
}
