import { getJobs } from "@/services/jobs";
import { useQuery } from "@tanstack/react-query";

export default function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
}
