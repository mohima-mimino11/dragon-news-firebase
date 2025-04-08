import Header from "../components/Header";
import LatestNews from "../components/LatestNews";


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

      </nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;