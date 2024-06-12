import Product from "../Product";

const ReturnExchange = ({display, visible, hide}) => {
  return (
    <>
      {display && (
        <div className="fixed top-0 start-0 h-full w-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
          <div className="flex justify-center items-center fixed my-5 inset-0 z-50 outline-none focus:outline-none">
            <div className="">
              <div className="w-[280px] md:w-[700px] h-[500px] md:h-[600px] my-5 overflow-y-scroll p-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-slate-100 outline-none focus:outline-none">
                <div className="flex items-start justify-between pb-2">
                  <h3 className="text-lg font-bold mx-auto">
                    Returns and exchange
                  </h3>
                  <button onClick={hide}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <form>
                  <div className="flex flex-col gap-5 py-3">
                    {/* Products */}
                    <Product edit={true} />
                    <Product edit={true} />
                    <Product edit={true} />
                  </div>
                  {/* Order info form */}
                  <div className="grid md:grid-cols-2 gap-5 my-3">
                    <div>
                      <label forHtml="deliveried" className="block">
                        place of delivery
                      </label>
                      <input
                        id="deliveried"
                        type="text"
                        placeholder="the place where it was recived"
                        className="p-2 w-[300px] rounded-md border-none outline-none"
                      />
                    </div>
                    <div>
                      <label forHtml="delivery" className="block">
                        delivery place
                      </label>
                      <input
                        id="delivery"
                        type="text"
                        placeholder="the place where the delivery was made"
                        className="p-2 w-[300px] rounded-md border-none outline-none"
                      />
                    </div>
                    <div>
                      <label forHtml="deliveried" className="block">
                        mobile phone
                      </label>
                      <input
                        id="deliveried"
                        type="text"
                        placeholder="your phone number"
                        className="p-2 w-[300px] rounded-md border-none outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        hide();
                        visible();
                      }}
                      className="my-1 py-2 w-[150px] text-center bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                    >
                      submitting
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReturnExchange;
