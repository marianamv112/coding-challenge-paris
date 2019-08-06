import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [detailedCelebrity, setdetailedCelebrity] = useState(null);


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?page=1&api_key=4e61776b388311fb95c57db785053553"
      )
      .then(res => {
        console.log(res.data.results);
        setCelebrities(res.data.results);
      });
  }, []);

  function handleDetail(e, i) {
    setdetailedCelebrity(celebrities[i])
  }

  return (
    <div className="containerPage">
      <h1>Celebrities</h1>
      <div className="celebritiesContainer">
        <div className="celebrities-list">
          {celebrities &&
            celebrities.map((cel, i) => (
              <div key={i} className="celebrity_portrait" onClick={(e) => handleDetail(e, i)}>
                <img src={"https://image.tmdb.org/t/p/w185" + cel.profile_path} />
                <p> {cel.name}</p>
              </div>
            ))}
        </div>
        <div className="celebrities-detail">
            {detailedCelebrity && 
                <div>
                <img src={"https://image.tmdb.org/t/p/w185" + detailedCelebrity.profile_path} />
                <h1>{detailedCelebrity.name}</h1>
                <h3>Known for: </h3>
                {detailedCelebrity.known_for.map((movie, i) =>
                <div>
                    <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} /> 
                    <p key={i}>{movie.original_title}</p> 
                </div>
                )}
                </div>
            }
        </div>
      </div>
    </div>
  );
}
