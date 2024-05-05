import { Bell, BellDot } from "lucide-react";
import NotificationCard from "./NotificationCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { INotification } from "@/types";
import ReadNotifications from "./ReadNotifications";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

import constants from "@/services/constants";
const api = constants.api + "notifications/";
import { EventSourcePolyfill } from "event-source-polyfill";

export default function Notifications() {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    const res = new EventSourcePolyfill(api, {
      heartbeatTimeout: 45000,
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token") || "",
      },
    });

    res.addEventListener("notifications", (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const data = JSON.parse(e.data);
      setNotifications(data);
    });

    res.addEventListener("notification", (e) => {
      console.log("new notification");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const data = JSON.parse(e.data);
      console.log(data);
      setNotifications((prev) => [data, ...prev]);
    });

    res.addEventListener("heartbeat", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log("heartbeat");
    });

    res.addEventListener("error", (e) => {
      res.close();
      console.error(e);
    });

    return () => {
      res.close();
    };
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        {notifications.length > 0 ? (
          notifications[0].read ? (
            <Bell className="cursor-pointer" />
          ) : (
            <BellDot className="cursor-pointer" />
          )
        ) : (
          <Bell className="cursor-pointer" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="translate-y-5">
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              You have {notifications.filter((val) => !val.read).length}{" "}
              unread messages.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {notifications.map((notification: INotification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))}
          </CardContent>
          <CardFooter>
            {notifications.length > 0 ? (
              notifications[0].read ? null : (
                <ReadNotifications setNotifications={setNotifications} />
              )
            ) : null}
          </CardFooter>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
