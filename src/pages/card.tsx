import React from 'react';
import { useParams } from "react-router";

function Card() {
  const {id} = useParams()
  return (
    <div>
      Card {id}
    </div>
  );
}

export default Card;
