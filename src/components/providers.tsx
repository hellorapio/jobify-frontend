import AuthProvider from "@/contexts/AuthContext";
import ThemeProvider from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ModeToggle } from "./ui/toggle";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 60 * 5,
  //   },
  // },
});

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
          <Toaster
            toastOptions={{
              success: {
                duration: 4000,
              },
              error: {
                duration: 6000,
              },
            }}
          />
        </AuthProvider>
      </QueryClientProvider>
      <ModeToggle />
    </ThemeProvider>
  );
}
