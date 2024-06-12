import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  
  return (
    <aside className="md:h-screen w-full overflow-x-scroll overflow-y-hidden flex md:bg-white text-slate-800 ">
      <nav >
        {/* user name */}
        <h1 className="font-bold text-[28px] pt-5 px-3 border-b hidden md:block">
          Hello Karim
        </h1>


        {/* sidebar main links */}
        <ul className="md:p-3 flex md:flex-col items-center md:items-start w-full ">
          <li className="py-1 w-full">
            <NavLink to="/profile" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <i className="bi bi-person-circle text-[19px] text-slate-600"></i>
              </div>
              Your account
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/orders" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={require("../../images/my-orders-icon.svg").default}
                  alt="icon"
                />
              </div>
              My Orders
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/address" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={require("../../images/pin-sign.svg").default}
                  alt="icon"
                />
              </div>
              My Addresses
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/payment" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={require("../../images/my-payment-icon.svg").default}
                  alt="icon"
                />
              </div>
              Payment method
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/wallet" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={require("../../images/my-wallet-icon.svg").default}
                  alt="icon"
                />
              </div>
              Wallet
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/return" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={require("../../images/my-returns-icon.svg").default}
                  alt="icon"
                />
              </div>
              Returns and exchanges
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/preferred" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <i className="bi bi-bookmark-check text-[19px]"></i>
              </div>
              Preferred sellers
            </NavLink>
          </li>
          <li className="py-[1px] w-full">
            <NavLink to="/premium" className="nav-link flex items-center">
              <div className="ps-1.5 pe-1 md:pe-3">
                <img
                  src={
                    require("../../images/my-premium-subscription-icon.svg")
                      .default
                  }
                  alt="icon"
                />
              </div>
              Premium
            </NavLink>
          </li>
        </ul>

        {/* logout element */}
        <Link className="block md:flex justify-center items-center md:mt-24 md:pb-8 md:px-3">
          <div className="ps-1 pe-1 md:pe-3">
            <i className="bi bi-box-arrow-left text-[18px]"></i>
          </div>
          Log out
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
