import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/layout-components/LeftNavBar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;