import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";
import { motion } from "framer-motion";
import IAnimal from "../../../models/IAnimal";

export const Layout = () => {
  const [width, setWidth] = useState(0);
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  useEffect(() => {
    if (animals.length !== 0) return;
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  });

  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(carousel.current!.scrollWidth, carousel.current!.offsetWidth);
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <>
      <div className="layout-container">
        <header>
          <button>
            <Link to="/">HEM</Link>
          </button>
        </header>
        <section>
          {/* <div className="allAnimals"> */}
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {animals.map((animal) => {
                return (
                  <motion.div key={animal.id} className="item">
                    {/* <div key={animal.id}> */}
                    <Link to={"/animal/" + animal.id} key={animal.id}>
                      <h3>{animal.name}</h3>
                      <img src={animal.imageUrl} alt="all the animals" />
                      {/* </div> */}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          {/* </div> */}

          <Link to="/animals">COMPONENT ANIMALS </Link>
          <br></br>
        </section>
        <main>
          <p>detta är MAin där allt innhehål ska visas</p>
          <Outlet></Outlet>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
