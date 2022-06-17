import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllAnimal } from "../../models/IAnimal";

import "./AnimalID.css";

export const AnimalID = () => {
  const [animal, setAnimal] = useState<AllAnimal>({
    id: 0,

    imageUrl: "",

    name: "",

    yearOfBirth: 0,

    shortDescription: "",

    latinName: "",

    longDescription: "",

    isFed: false,

    lastFed: "",
  });

  const handelTime = () => {
    let time: string = new Date().toLocaleString();

    setAnimal({ ...animal, isFed: true, lastFed: time });
  };

  let params = useParams();

  useEffect(() => {
    axios
      .get<AllAnimal>(
        "https://animals.azurewebsites.net/api/animals/" + params.id
      )
      .then((data) => {
        setAnimal(data.data);
      });
  }, [params.id]);

  return (
    <div>
      <div className="singleAnimal-container">
        <div className="singleImg">
          <h3>{animal.name}</h3>
          <img src={animal.imageUrl} alt={animal.name} />
        </div>

        <div className="singleAnimalInfo">
          <div className="textInfo">
            <p>{animal.latinName} : Is the latin name</p>
            <p>Born: {animal.yearOfBirth}</p>
            <p>{animal.shortDescription}</p>
            {animal.longDescription}
          </div>
        </div>
        <div className="get-food">
          {animal.isFed ? (
            <button> är matatad</button>
          ) : (
            <button onClick={handelTime}>mata</button>
          )}
          {animal.isFed ? (
            <p>
              {animal.name}
              :Matades {animal.lastFed}
            </p>
          ) : (
            <p>{animal.name}:är ej matad</p>
          )}
        </div>
      </div>
    </div>
  );
};
