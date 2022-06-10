import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";

export const AnimalID = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: 0,
  });

  return <></>;
};
