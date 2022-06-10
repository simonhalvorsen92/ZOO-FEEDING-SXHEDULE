import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  useEffect(() => {
    if (animals.length !== 0) return;
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  });
  return (
    <>
      <div>
        {animals.map((animal) => {
          return <div key={animal.id}>{animal.name}</div>;
        })}
      </div>
    </>
  );
};
