import exp from "constants";
import { useState } from "react";
import Seo from "./components/Seo";
const movie_key = "f1ec9d96adc79f49392ad84cd93231cc"

export default function Movie() {
    const [movies, setMovies] = useState([])
    return (
        <div>
            <Seo title = "Movie"/>
            <h1> Movie</h1>
        </div>
    )
}
