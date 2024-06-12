const OrderStatus = ({ visible, hide }) => {
  return (
    visible && (
      <>
        <div className="fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
          <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="w-[250px] md:w-[350px] p-5 border-0 rounded-lg shadow-lg relative flex flex-col text-center bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg font-semibold text-emerald-500 mx-auto">
                    Order status
                  </h3>
                  <i className="bi bi-x cursor-pointer" onClick={hide}></i>
                </div>
                <div className="pt-5">
                  The request has been submitted successfully The order number
                  is 111
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default OrderStatus;
