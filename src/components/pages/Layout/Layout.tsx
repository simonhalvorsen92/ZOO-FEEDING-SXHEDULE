import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import "./Layout.css";
import { motion } from "framer-motion";
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

  // useEffect(() => {
  //   console.log(carousel.current);
  // }, []);
  return (
    <>
      <div className="Layout-container">
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
                    {animal.name}
                    <Link to="/animal:id">
                      <img src={animal.imageUrl} alt="all the animals" />
                    </Link>
                    {/* </div> */}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          {/* </div> */}

          <Link to="/animals">COMPONENT ANIMALS </Link>
          <br></br>
          <Link to="/animal:id">Denna link är för ID till djurren </Link>
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
