import { useEffect, useState } from "react";

import { Button } from "./Button";
import { MovieCard } from "./MovieCard";

import "../styles/global.scss";

import "../styles/sidebar.scss";
import "../styles/content.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Props {
  button: JSX.Element[];
}
export function SideBar(props: Props) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">{props.button}</div>
    </nav>
  );
}
