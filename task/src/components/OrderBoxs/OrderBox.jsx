import { Link } from "react-router-dom";
import Product from "../Product";

const OrderBox = () => {
  return (
    <div className="p-3 my-3 bg-white rounded-md flex flex-col md:flex-row justify-between border">
      <div className="my-5">
        {/* Seller name */}
        <h2 className="font-bold">
          Seller Name: <span>Karim Muhammad</span>
        </h2>
        {/* Order's products */}
        <div className="flex flex-col gap-1">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div>
        {/* Orders Actions */}
        <div className="flex flex-col md:justify-between gap-3 h-full">
          <div className="mx-auto flex md:flex-col gap-2 w-full">
            {/* Buttons For show order tracking or make changes in order */}
            <Link
              to="/tracking"
              className="p-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
            >
              Order Tracking
            </Link>
            <Link
              to="/edit"
              className="p-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Edit Order
            </Link>
          </div>
          <div className="text-center">
            {/* Order Details */}
            <p className="text-slate-400 border-b">Order Number NGG41111</p>
            <span>On the day 10:50PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderBox;
