import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Orders from "./pages/Orders";
import OrderTracking from "./pages/OrderTracking";
import OrderEdit from "./pages/OrderEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/edit" element={<OrderEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
