import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVerify } from "@/hooks/auth/hooks";
import SmallSpinner from "@/components/shared/SmallSpinner";

export default function Verify() {
  const { token } = useParams();
  const { mutate, isPending, isError, error } = useVerify();

  useEffect(() => {
    mutate(token as string);

    return () => {};
  }, [mutate, token]);

  return (
    <div>
      <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div>
          <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-md p-4 space-y-4">
              <h1 className="text-3xl font-bold text-center">
                Verify Account
              </h1>
              <p className="text-center">
                {isPending ? (
                  <SmallSpinner />
                ) : isError ? (
                  error.message
                ) : (
                  "Account verified successfully"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/background.jpg"
            alt="Beautiful background image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
