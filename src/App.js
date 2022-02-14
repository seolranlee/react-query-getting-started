import { QueryClient, QueryClientProvider } from "react-query";
import Exmaple from "./Simple";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Exmaple />
    </QueryClientProvider>
  );
}
export default App;
