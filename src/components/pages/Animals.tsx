import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IAnimal from "../../models/IAnimal";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  useEffect(() => {
    if (animals.length !== 0) return;
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
        console.log(response.data);
      });
  });
  return (
    <>
      {animals.map((animal) => {
        return (
          <Link to={"/animal/" + animal.id} key={animal.id}>
            <h3>{animal.name}</h3>
            <img src={animal.imageUrl} alt={animal.name} />
          </Link>
        );
      })}
    </>
  );
};
