import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Verify() {
  const { mutateAsync: verify } = useMutation({
    mutationFn: (body: object) => verifyApi(body),
    onSuccess: () => {
      toast.success("Account verified successfully", { duration: 4000 });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message, { duration: 6000 });
    },
  });

  useEffect(() => {
    const token = window.location.pathname.split("/").pop();
    verify({ token });
  }, []);

  return <div>Verifying your account...</div>;
}

