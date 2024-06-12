import OrderBox from "../components/OrderBoxs/OrderBox";

const Orders = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-3">
        {/* Page Title */}
        <h1 className="font-bold text-[23px]">Orders</h1>
        <select className="text-slate-800 bg-transparent p-3 border-none outline-none">
          <option>LAST 3 MONTHS</option>
          <option>LAST 2 MONTHS</option>
          <option>LAST MONTH</option>
          <option>LAST 3 WEEKS</option>
          <option>LAST 2 WEEKS</option>
          <option>LAST WEEK</option>
          <option>LAST 3 DAYS</option>
        </select>
      </div>

      {/* The order box component*/}
      <div>
        <h2 className="font-bold">In Process</h2>
        <OrderBox />
        <OrderBox />
        <h2 className="font-bold">Complete</h2>
        <OrderBox />
      </div>
    </>
  );
};
export default Orders;
