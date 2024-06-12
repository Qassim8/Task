import { useState } from "react";
import Product from "./Product";
import ReturnExchange from "./Modal/ReturnExchange";
import CancelProduct from "./Modal/CancelProduct";
import OrderStatus from "./Modal/OrderStatus";

const ProductDetails = ({ edit }) => {
  const [modalShow, setModalShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* Importing modals */}
      {/* Cancel product modal it well shown when showModal state = true and it well show Return&Exchange modal when display state = true*/}
      <CancelProduct
        showModal={modalShow}
        hide={() => setModalShow(false)}
        display={() => setDisplay(true)}
      />

      {/* Return&Exchange modal it well shown when display state = true and it well show OrderStatus modal when visible state = true */}
      <ReturnExchange
        display={display}
        hide={() => setDisplay(false)}
        visible={() => setVisible(true)}
      />

      {/* OrderStatus modal it well shown when visible state = true */}
      <OrderStatus visible={visible} hide={() => setVisible(false)} />

      
      {/* Start component's contents */}
      <div className="bg-white py-3 mb-3 border rounded-md">
        <h2 className="font-bold md:text-[23px] px-3">Product details</h2>
        <div className="flex flex-col md:flex-row justify-between md:items-center text-[12px] md:text-[15px] p-3 border-b border-slate-200 border-dashed ">
          <span>
            Once confirmed, the products cannot be canceld from the order
          </span>
          <span className="font-bold">Seller Name: Karim Muhammad</span>
        </div>
        <div className="p-3">
          <div className="flex flex-col md:flex-row justify-between md:items-center text-[12px] md:text-[15px]">
            <p>products requsted throught the seller: Karim Muhammad</p>
            {edit && (
              <div className="text-[12px] md:text-[15px]">
                Reason for cancellation:
                <select className="select-option">
                  <option>Changed my mind</option>
                  <option>it's not good for me</option>
                  <option>Changed my mind</option>
                </select>
              </div>
            )}
          </div>

          {/* Products */}
          <div>
            <Product edit={edit} />
            <Product edit={edit} />
            <Product edit={edit} />
          </div>
        </div>

        {/* This button shown the cancel product modal */}
        {edit && (
          <button
            className="block mx-auto my-1 py-2 px-8 bg-blue-500 text-white text-[12px] md:text-[16px] rounded-md duration-300 outline-none border-none hover:bg-blue-600"
            onClick={() => setModalShow(true)}
          >
            cancel the selected products
          </button>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
