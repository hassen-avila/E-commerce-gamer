
import React from "react";
import MetaData from "../../component/more/Metadata";
import "./contact.css"

const Contact = () => {
  return (
    <>

      <MetaData title="Contacto" />
      <div className="back-contact">


        <div className="contact__main"
          style={{
            padding: "20px 10px",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            width: "360px",
            margin: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.514)"
          }}
        >

          <div className="content">
            <h2>CONTÁCTANOS!!</h2>
            <p className="slogan">TECNOCEL, Conectamos tu mundo...</p>
          </div>
          <div
            className="box"
            style={{
              padding: "1px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
              style={{
                color: "rgb(83, 192, 142)",
                justifyContent: "center",
                alignItems: "center"


              }}
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
            </svg>
            <p>
              Email: <a className="a" href="mailto:tecnocelcba.oficial@gmail.com">tecnocelcba.oficial@gmail.com</a>
            </p>
          </div>
          <div className="flex align__items__center "
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-geo-alt icon__color"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
            <p>   Direccion: <a className="a" href="https://goo.gl/maps/qcPfsVcDM6j48jMK7" target="_blank">Punilla Cordoba, Argentina</a>
            </p>
          </div>
          <h4
            style={{
              padding: "20px 0",
              textAlign: "center"
            }}
          >
            Podes ver nuestro catalogo:
          </h4>
          <div>

            <a href="https://docs.google.com/spreadsheets/d/1XuqUnhjtqcLwg5t9Pi5lhY178IPx8QmbgmdWJVe66Qs/edit" target="_blank">
              <div className="botones">
                <span className="boton3">Catalogo</span>
              </div>

            </a>
            <h4
              style={{
                padding: "20px 0",
                textAlign: "center"
              }}
            >
              Tambien nos puedes encontrar en:
            </h4>
            <a href="https://www.instagram.com/tecnocel.cba/" target="_blank">
              <div className="botones">
                <span className="boton3">Instagram</span>
              </div>
            </a>

          </div>
        </div>

        <div>

        </div>
      </div>
    </>
  );
};

export default Contact;