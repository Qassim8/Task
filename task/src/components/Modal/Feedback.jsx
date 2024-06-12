
const Feedback = ({ showModal, hide }) => {
  return (
    showModal && (
      <>
        <div className="fixed top-0 start-0 w-full h-full before:absolute before:top-0 before:start-0 before:h-full before:w-full before:bg-slate-700/40 z-40">
          <div className="flex justify-center items-center fixed inset-0 z-50 outline-none">
            <div>
              <div className="px-5 border-0 rounded-lg shadow-lg relative flex flex-col w-[250px] md:w-full bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg mx-auto font-bold">Give feedback</h3>
                </div>
                <div>
                  <div className="my-3 flex justify-center items-center gap-3 text-center">
                    <i className="bi bi-star-fill text-[20px] cursor-pointer text-amber-400"></i>
                    <i className="bi bi-star-fill text-[20px] cursor-pointer text-amber-400"></i>
                    <i className="bi bi-star-fill text-[20px] cursor-pointer text-amber-400"></i>
                    <i className="bi bi-star-fill text-[20px] cursor-pointer text-amber-400"></i>
                    <i className="bi bi-star text-[20px] cursor-pointer"></i>
                  </div>
                  <span>Do you have any thoughts you'r like to share </span>
                  <form>
                    <textarea
                      className="border p-3 mt-3 w-full resize-none outline-none rounded-md"
                      placeholder="Addtional comment..."
                    ></textarea>
                    <div className="w-full flex items-center gap-3 p-2 md:p-5">
                      <button
                        className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-blue-500 text-white rounded-md duration-300 outline-none border-none hover:bg-blue-600"
                        onClick={hide}
                      >
                        submit review
                      </button>
                      <button
                        className="my-1 py-2 w-full md:w-[150px] text-center text-[12px] md:text-[16px] bg-white text-blue-500 rounded-md duration-300 outline-none border border-blue-500 hover:bg-blue-600 hover:text-white"
                        onClick={hide}
                      >
                        not now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Feedback;
