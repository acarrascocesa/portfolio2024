import "./home.css";
import me from "../../assets/mee.png";
import Navbar from "../../components/Navbar/Navbar";
import Socials from "../../components/Socials/Socials";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    // Layout Principal
    <div className="layout">
      {/*Barra lateral - Informacion general usuario */}
      <aside className="layout__aside">
        <section className="aside__user-info">
          <div className="user-info__general">
            <div className="user-info__container-imagen">
              <img src={me} alt="angel" className="user__imagen" />
            </div>

            <h2 className="user-info__name">Angel Carrasco</h2>
            <h4 className="user-info__job">Fullstack Developer</h4>
          </div>

          {/* Menu de navegacion */}
          <Navbar />

          {/* Links redes sociales */}
          <Socials />

          {/* Boton CV */}
          <Button />

          {/* Pie de pagina */}
          <Footer />
        </section>
      </aside>

      {/* Contenido Principal */}
      <main className="layout__content">
        <section className="content__page">
          <h1 className="page__name">Angel Carrasco</h1>
          <h2 className="page__job">Fullstack Developer</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
