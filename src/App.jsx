import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loagin from "./pages/Loagin";
import UserTable from "./pages/UserTable";
import ContextApi from "./component/contextapi";
import Shop from "./pages/Shop";
import AppAppLayOute from "./pages/AppLayOute";
import Cart from "./pages/cart";
import NotFound from "./component/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 10000,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <ContextApi>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loagin />} />
            <Route path="login" element={<Loagin />} />
            <Route path="app" element={<AppAppLayOute />}>
              <Route path="usertable" element={<UserTable />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ContextApi>
  );
}

export default App;
