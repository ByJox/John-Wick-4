import React, { useCallback } from "react";
import { ActorCard } from "./ActorCard";
//import actors from "../assets/actor.json";
import "./TopCastContainer.css";

export const TopCastContainer = ({pelis}) => {
  
  const actors = pelis.Actors ? pelis.Actors.split(", ") : [];
  return (
    <section className="top-cast-container">
      <h6>Top Cast</h6>
      <div className="cards-container">
        {actors.map((actor) => {
          return <ActorCard actor={actor} key={actor.id} />;
        })}
      </div>
    </section>
  );
};
