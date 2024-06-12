const Stepper = () => {
  return (
    <>
      <ol className="flex flex-col md:flex-row gap-10">
        <li className="relative w-full h-full flex md:flex-col items-center justify-between after:absolute after:-bottom-11 md:after:top-1/2 after:start-5 md:after:start-[90px] after:h-full md:after:h-1 after:w-1 md:after:w-full after:bg-slate-200">
          <p className="text-[10px] md:text-[15px] order-last md:order-none">Recived order</p>
          <div className="flex justify-center items-center my-1 bg-slate-200 h-10 w-10 rounded-full">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <p className='text-[10px] md:text[15px]'>On april 5</p>
        </li>
        <li className="relative w-full h-full flex md:flex-col items-center justify-between after:absolute after:-bottom-11 md:after:top-1/2 after:start-5 md:after:start-[90px] after:h-full md:after:h-1 after:w-1 md:after:w-full after:bg-slate-200">
          <p className="text-[10px] md:text-[15px] order-last md:order-none">In proces</p>
          <div className="flex justify-center items-center my-1 bg-slate-200 h-10 w-10 rounded-full">
            <i className="bi bi-shop"></i>
          </div>
          <p className='text-[10px] md:text[15px]'>On friday, april 5th</p>
        </li>
        <li className="relative w-full h-full flex md:flex-col items-center justify-between after:absolute after:-bottom-11 md:after:top-1/2 after:start-5 md:after:start-[90px]  after:h-full md:after:h-1 after:w-1 md:after:w-full after:bg-slate-200">
          <p className="text-[10px] md:text-[15px] order-last md:order-none">Confier</p>
          <div className="flex justify-center items-center my-1 bg-slate-200 h-10 w-10 rounded-full">
            <i className="bi bi-shop"></i>
          </div>
          <p className='text-[10px] md:text[15px]'>On friday, april 5th</p>
        </li>
        <li className="relative w-full h-full flex md:flex-col items-center justify-between after:absolute after:-bottom-11 md:after:top-1/2 after:start-5 md:after:start-[90px]  after:h-full md:after:h-1 after:w-1 md:after:w-full after:bg-slate-200">
          <p className="text-[10px] md:text-[15px] order-last md:order-none">It was recived</p>
          <div className="flex justify-center items-center my-1 bg-slate-200 h-10 w-10 rounded-full">
            <i className="bi bi-truck"></i>
          </div>
          <p className='text-[10px] md:text[15px]'>On sunday, 7th</p>
        </li>
        <li className="w-full h-full flex md:flex-col items-center justify-between">
          <p className="text-[10px] md:text-[15px] order-last md:order-none">Delivery</p>
          <div className="flex justify-center items-center my-1 bg-slate-200 h-10 w-10 rounded-full">
            <i className="bi bi-file-check"></i>
          </div>
          <p className='text-[10px] md:text[15px]'>Expected on wdensday, 11th</p>
        </li>
      </ol>
    </>
  );
};
export default Stepper;
