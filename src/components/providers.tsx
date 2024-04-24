import ThemeProvider from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
