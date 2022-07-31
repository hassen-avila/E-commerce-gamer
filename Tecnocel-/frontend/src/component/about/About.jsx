import React from "react";
import Footer from "../../Footer";
import MetaData from "../more/Metadata";
import "./About.css";


const About = () => {

  return (
    <>

      <MetaData title="Nosotros" />
      <div>

        <div
          style={{
            width: "100%",
            margin: "0px auto",
          }}
        >
          <div className="about__page">
            {/* 1st verse */}
            <div className="row flex">
              <div className="col__2">
                <img src="https://cdn.pocket-lint.com/r/s/660x/assets/images/158557-phones-news-feature-letsgodigital-renders-image3-sr7b0puivr-jpg.webp" alt='' />
              </div>
              <div className="col__2">
                <div className="meta">
                  <span className="text-principal"
                    style={{
                      fontSize: "40px",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      color: "rgb(136,211,23)",
                    }}
                  >
                    Bienvenidos a TecnoCel
                  </span>
                  <p className="p-style">
                    ¿Te gusta la tecnología?
                  </p>
                  <p className="p-style">
                    Bien, si la respuesta es si, ésta es tu página! Los mejores precios, las principales marcas,
                    todo los que te gusta y buscas en un solo lugar!
                  </p>
                  <p className="p-style">
                    Una empresa Argentina haciendo foco en la innovacion y calidad, TecnoCel vende productos y experiencias...
                    Fundada en 2022 en Córdoba, Argentina, y en expanción hacia el mundo...
                    TecnoCel... Conecta tu mundo...
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd verse */}
            <div className="second">
              <div className="heading">
                <h2 className="text-secondary">¿Qué ofrecemos?</h2>
              </div>
              <div className="row flex">
                <div className="col__3">
                  <div style={{
                    padding: "10px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt='' />
                    </div>
                    <span
                      style={{
                        color: "rgb(136,211,23)",
                      }}
                    >
                      Mejores precios y ofertas</span>
                    <p className="p-style">
                      Tenemos los mejores precios de celulares, notebook y ofertas especiales para clientes
                    </p>
                  </div>
                </div>
                <div className="col__3">
                  <div style={{
                    padding: "10px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt='' />
                    </div>
                    <span
                      style={{
                        color: "rgb(136,211,23)",
                      }}
                    >Lo mejor para la confianza y la calidad</span>
                    <p className="p-style">
                      Nos preocupamos por los clientes, ya que los hacemos parte de nuestra gran familia para que vuelvan a elegirnos
                    </p>
                  </div>
                </div>
                <div className="col__3">
                  <div style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt='' />
                    </div>
                    <span
                      style={{
                        color: "rgb(136,211,23)",
                      }}
                    >Sistema de entrega rápida</span>
                    <p className="p-style">
                      Podemos enviar a cualquier lugar, solo necesitamos tu dirección y ¡listo!
                    </p>
                  </div>
                </div>


                <div className="col__3">
                  <div style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt='' />
                    </div>
                    <span
                      style={{
                        color: "rgb(136,211,23)",
                      }}
                    >Servicio de devoluciones agiles</span>
                    <p className="p-style">
                      Si no es lo que pediste, puedes devolverlo dentro de los primeros 30 días
                    </p>
                  </div>
                </div>



                <div className="col__3">
                  <div style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt='' />
                    </div>
                    <span
                      style={{
                        color: "rgb(136,211,23)",
                      }}
                    >Gran oferta diaria</span>
                    <p className="p-style">
                      Contamos con un amplio mercado para poder comprar de manera segura y efectiva!!!
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>

  );
};

export default About;