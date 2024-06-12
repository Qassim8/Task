import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-slate-800">
      <nav className="contain flex justify-between items-center flex-wrap md:flex-nowrap py-3 text-slate-700">
        <div className="flex items-center">
          <Link to='/' className="w-[100px] me-5">
            <img src={require("../../images/logo.png")} alt="logo" />
          </Link>
          <div className="text-white hidden md:flex flex-col">
            <p>
              <i className="bi bi-geo-alt"></i> Delivry to
            </p>
            <select className="select-option text-white">
              <option>downtown dubai city</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full md:w-[450px] mt-3 md:mt-0 order-last md:order-none">
          <input
            type="text"
            placeholder="what are you looking for"
            className="p-2.5 border border-slate-300 rounded-md me-8 w-full  outline-none"
          />
          <i className="bi bi-search -ms-16 md:-ms-20 py-2 px-1 md:px-5 md:bg-blue-500 text-blue-500 md:text-white rounded-md cursor-pointer duration-300 hover:bg-blue-600"></i>
        </div>
        <div className="flex justify-between items-center">
          <Link to="/profile" className="hidden md:flex justify-center items-center px-2 md:px-5 md:min-w-[60px] border-white border-r">
            <img
              src={require("../../images/user-profile.svg").default}
              alt="profile-icon"
            />
          </Link>
          <div className="hidden md:flex justify-center items-center px-2 md:px-5 md:min-w-[60px] border-white md:border-r cursor-pointer">
            <img
              src={require("../../images/bell-notification.svg").default}
              alt="bell-icon"
            />
          </div>
          <Link to='/cart' className=" justify-center items-center px-2 md:px-5 md:min-w-[60px] border-white border-r">
            <img
              src={require("../../images/shopping-cart.svg").default}
              alt="cart-icon"
            />
          </Link>
          <Link to='/favorite' className=" justify-center items-center px-2 md:px-5 md:min-w-[60px]">
            <img
              src={require("../../images/heart-favorite.svg").default}
              alt="heart-icon"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
