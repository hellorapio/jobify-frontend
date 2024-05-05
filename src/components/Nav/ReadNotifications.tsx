import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useReadNotifications } from "@/hooks/useReadNotifcations";
import SmallSpinner from "../shared/SmallSpinner";
import { INotification } from "@/types";

type Props = {
  setNotifications: React.Dispatch<React.SetStateAction<INotification[]>>;
};

export default function ReadNotifications({ setNotifications }: Props) {
  const { mutateAsync, isPending } = useReadNotifications();

  async function handleMarkAllAsRead() {
    try {
      await mutateAsync();
      setNotifications((prev) =>
        prev.map((notification: INotification) => ({
          ...notification,
          read: true,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button
      className="w-full"
      onClick={handleMarkAllAsRead}
      disabled={isPending}
    >
      {isPending ? (
        <SmallSpinner />
      ) : (
        <>
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </>
      )}
    </Button>
  );
}
