import { INotification } from "@/types";

type CardProps = {
  notification: INotification;
};

export default function NotificationCard({ notification }: CardProps) {
  return (
    <div>
      <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
        {!notification.read ? (
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
        ) : (
          <span></span>
        )}
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            {notification.content}
          </p>
        </div>
      </div>
    </div>
  );
}
