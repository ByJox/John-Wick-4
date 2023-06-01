import React from "react";
import { Gender } from "./Gender";
import movie from "../assets/movie.json";
import "./MovieMain.css";

export const MovieMain = ({peli}) => {
  return (
    <div className="movie-main-container">
      <img src={peli.Poster} alt="" />
      {/* <img src={movie.imgsrc} alt="" /> */}
      {/* <img src={dogs[0]?.url} alt="" /> */}
      <Gender peli={peli} />
      <span>{peli.Plot}</span>
    </div>
  );
};
