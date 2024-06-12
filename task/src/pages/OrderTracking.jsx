import { Link } from "react-router-dom"
import ProductDetails from "../components/ProductDetails";
import { useState } from "react";
import Feedback from "../components/Modal/Feedback";
import Stepper from "../components/Stepper";
import OrderInfo from "../components/OrderBoxs/OrderInfo";

const OrderTracking = () =>{
  const [modalShow, setModalShow] = useState(false);
    return (
      <>
        {/* FeedBack Modal */}
        <Feedback showModal={modalShow} hide={() => setModalShow(false)} />

        {/* Order tracking cntent */}
        <div className="flex flex-col md:flex-row justify-between md:items-center pt-6 pb-3">
          <Link to="/orders" className="text-[15px] md:text-[20px]">
            <i className="bi bi-arrow-left-short pe-1"></i>
            Back to Orders
          </Link>
          <span className='text-[12px] md:text-[15px]'>Order number:ADDFG144174</span>
        </div>
        <div className="flex justify-between items-center pt-5">
          <div>
            <h1 className="font-bold text-[20px] md:text-[28px]">Order tracking</h1>
            <p>view and update your product delivery information</p>
          </div>
          {/* this button shown feedback modal */}
          <button
            className="hidden md:block my-1 py-2 w-[150px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
            onClick={() => setModalShow(true)}
          >
            Feedback
          </button>
        </div>

        {/* Progress Stepper */}
        <div className="py-10">
          <Stepper />
        </div>

        {/* Order Information box */}
        <div>
          <OrderInfo />
        </div>

        {/* Product Details box */}
        <div>
          <ProductDetails />
        </div>
        
        {/* this button shown feedback modal on the mobile screen */}
        <button
          className="block md:hidden my-3 py-2 w-full bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
          onClick={() => setModalShow(true)}
        >
          Feedback
        </button>
      </>
    );
}
export default OrderTracking