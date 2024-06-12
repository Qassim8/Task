
import { Outlet } from "react-router-dom";
import Header from "../components/MainComponents/Header";
import SideBar from "../components/MainComponents/SideBar";
import Footer from "../components/MainComponents/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Topbar 'Header componenet' */}
      <Header />

      {/* The main conents */}
      <section className="contain flex flex-col md:flex-row md:gap-10">

        {/* Sidebar component */}
        <aside>
          <SideBar />
        </aside>

        {/* Outlet component the Children of main layout page in the routes */}
        <article className="w-full md:w-[75%]">
          <Outlet />
        </article>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};
export default MainLayout;
