import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
/* import ProductCard from "../Products/productCard"; */
import MetaData from "../../component/more/Metadata";
import bg from "../../Assets/background.jpg";
import bg2 from "../../Assets/background2.jpg";

import { Link } from "react-router-dom";



const Home = () => {
  


  useEffect(() => {
    
  }, [])

  return (
    <>
            
          <>
            <MetaData title="Inicio" />
  
            {/* Carousel */}
            <div className="banner">
              <Carousel>
                <img src={bg} className="bgImg" alt='' />
                <img src={bg2} className="bgImg" alt='' />
              </Carousel>
              <div className="home__content">
                <div style={{
                  display: "flex",
                  alignItems: "center", 

                  
                }}>
                  <h2 style={{
                      fontSize: "3em",
                      fontFamily: "Poppins,sans-serif",
                      color: "#fff",
                  }}>Lo último en equipos</h2>
                </div>
                <div>
                  <h2 style={{
                    fontSize: "4.5em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}>Hasta 12 cuotas</h2>
                </div>
                <div>
                  <h2 style={{
                    fontSize: "4.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7"
                  }}>Sin interes</h2>
                </div>
                <div>
                  <Link to="/products">
                    <button type="submit" style={{
                      width: "135px",
                      height: "50px",
                      border: "none",
                      background: "#88d317",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "black",
                      cursor: "pointer",
                      textAlign: "center",
                      display: "initial"
                    }}
                      className="Home__button"
                    >Ver más!</button>
                  </Link>
                </div>
              </div>
            </div>           
          </>
      
    </>
  );
};

export default Home;