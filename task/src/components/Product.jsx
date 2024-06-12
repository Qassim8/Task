
const Product = ({edit}) =>{

  // edit props it well show the checkbox for cancel product 

  
    return (
      <div className="flex gap-5 items-center my-1 p-2 ">
        {edit && <input type="checkbox" value="" className="accent-blue-600" />}
        <div className="w-[50px] h-[50px] rounded-md">
          <img src={require('../images/airpod-product.png')} alt='product' />
        </div>
        <div>
          <h3 className="font-bold text-[12px] md:text-[15]">Air pods Apple</h3>
          {edit &&<p className="text-[10px] md:text-[14px] text-slate-500">
            this product cannot be exchanged or returned
          </p>}
          <span className='text-[10px] md:text-[14px]'>300 AED</span>
        </div>
      </div>
    );
}

export default Product;