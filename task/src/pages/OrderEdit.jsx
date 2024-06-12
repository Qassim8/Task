import { Link } from "react-router-dom"
import ProductDetails from "../components/ProductDetails";
import OrderInfo from "../components/OrderBoxs/OrderInfo";
import Stepper from "../components/Stepper";

const OrderEdit = () =>{
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between md:items-center pt-6 pb-3">
          <Link to="/orders" className="text[15px] md:text-[20px]">
            <i className="bi bi-arrow-left-short pe-2"></i>
            Back to Orders
          </Link>
          <span className='text-[12px] md:text-[15px]'>Order number:ADDFG144174</span>
        </div>
        <div className="flex justify-between items-center pt-5">
          <div>
            <h1 className="font-bold text-[20px] md:text-[28px]">Order edit</h1>
            <p>view and update your product delivery information</p>
          </div>
        </div>

        {/* Stepper components */}
        <div>
          <Stepper />
        </div>

        {/* The OrderInfo component */}
        <div>
          <OrderInfo />
        </div>

        {/* The ProductDetails component */}
        <div>
          <ProductDetails edit={true}/>
        </div>
      </>
    );
}
export default OrderEdit