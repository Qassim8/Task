const OrderInfo = () =>{
    return (
      <>
        
        <div className="my-3 bg-white w-full grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-3 text-[10px] md:text-[15px] border rounded-md">
          <div className="flex md:flex-col justify-between items-center gap-3">
            <p className="font-bold">the date of application</p>
            <div>
              <p>
                <i className="bi bi-file-text"></i> Order date:2/2/2024
              </p>
              <p>
                <i className="bi bi-truck text-emerald-500"></i> Reciept
                date:2/20/2024
              </p>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center md:items-start gap-3">
            <p className="font-bold">the address</p>
            <p>28 El-modair St Abu Dhabi, UAE</p>
          </div>
          <div className="flex md:flex-col justify-between items-center gap-3">
            <p className="font-bold">payment method</p>
            <p>
              <i className="bi bi-credit-card-fill text-blue-500"></i> Visa **65
            </p>
          </div>
          <div className="flex md:flex-col justify-between items-center gap-3">
            <p className="font-bold">total money</p>
            <p>5000 AED</p>
          </div>
        </div>
      </>
    );
}
export default OrderInfo;