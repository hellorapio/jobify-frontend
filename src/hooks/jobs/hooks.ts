import { addJob } from "@/services/jobs";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function usePostJob() {
  const { mutateAsync: postJob } = useMutation({
    mutationFn: (body: object) => addJob(body),
    onSuccess: async () => {
      toast.success("Job Posted Successfully");
      // navigate("/login", { replace: true });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { postJob };
}
