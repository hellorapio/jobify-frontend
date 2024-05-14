import { INotification } from "@/types";

type CardProps = {
  notification: INotification;
};

export default function NotificationCard({ notification }: CardProps) {
  return (
    <div className="hover:bg-primary-foreground transition-all p-3 rounded-md">
      <div className=" flex items-start gap-3 last:mb-0 last:pb-0">
        {notification.read ? (
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
        ) : null}
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            {notification.content}
          </p>
        </div>
      </div>
    </div>
  );
}
