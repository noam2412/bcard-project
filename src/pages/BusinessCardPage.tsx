import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services/apiService";

const BusinessCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    if (id) { 
      getCardById(id)
        .then((res: { data: any; }) => setCard(res.data))
        .catch((err: any) => console.error(err));
    }
  }, [id]);
  return card ? (
    <div className="container mt-5">
      <h2>{card.name}</h2>
      <p>{card.description}</p>
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${card.location}`}
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BusinessCardPage;
