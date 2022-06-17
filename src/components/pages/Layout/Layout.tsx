import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";
import { motion } from "framer-motion";
import IAnimal from "../../../models/IAnimal";

export const Layout = () => {
  const [width, setWidth] = useState<number>(0);
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
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: +700, left: -700 }}
              className="inner-carousel"
            >
              {animals.map((animal) => {
                return (
                  <motion.div key={animal.id} className="item">
                    <Link to={"/animal/" + animal.id} key={animal.id}>
                      <h3>{animal.name}</h3>
                      <img src={animal.imageUrl} alt="all the animals" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <br></br>
        </section>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
