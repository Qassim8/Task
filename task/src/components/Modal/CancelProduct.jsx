
const CancelProduct =({showModal, display, hide}) =>{
    return (
      showModal && (
        <div className="fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40">
          <div
            className='flex justify-center items-center fixed inset-0 z-50 outline-none'
          >
            <div>
              <div className="w-[275px] md:w-[370px] text-center px-5 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 text-center border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg mx-auto font-bold text-red-500">
                    Cancel products
                  </h3>
                </div>
                <div className="pt-5 pb-2">
                  <p className="pb-3">
                    The request has been submitted successfully 
                    <span className="font-bold">
                       are you sure you want to delete this card?
                    </span>
                    You can't undo that
                  </p>

                  <div className="w-full flex items-center gap-3 p-2 md:p-5">
                    <button
                      className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                      onClick={ () =>{
                        hide() ; display()}
                    }
                    >
                      confirm
                    </button>
                    <button
                      className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                      onClick={hide}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
}

export default CancelProduct;