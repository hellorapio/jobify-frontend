import { useLogout } from "@/hooks/auth/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { IUser } from "@/types";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";

const UserAccountNav = ({ user }: { user: IUser }) => {
  const { logout } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        {user.photo ? (
          <img
            src={user.photo}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <Button variant="outline" size="icon">
            <CircleUser className="w-6 h-6 cursor-pointer " />
            <span className="sr-only">User Menu</span>
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm ">{user.name}</p>
          </div>
        </div>
        {!user.isVerified && (
          <div className="text-destructive font-bold text-sm px-2">
            User's Email is not Verified
          </div>
        )}
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link to="/dashboard">Jobify Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => logout()}
          className="cursor-pointer"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
