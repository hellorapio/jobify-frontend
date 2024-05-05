import { readNotification } from "@/services/notifications";
import { useMutation } from "@tanstack/react-query";

export function useReadNotifications() {
  return useMutation({
    mutationFn: async () => readNotification(),
  });
}
