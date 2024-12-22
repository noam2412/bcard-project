import React, { useEffect, useState } from "react";
import { fetchCards } from "../services/apiService";
import { toggleFavorite, getFavorites } from "../services/favoritesService";

const HomePage: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetchCards().then((data: React.SetStateAction<any[]>) => setCards(data));
    setFavorites(getFavorites());
  }, []);

  const handleFavoriteToggle = (cardId: number) => {
    toggleFavorite(cardId);
    setFavorites(getFavorites());
  };

  return (
    <div className="container mt-5">
      <h2>Available Cards</h2>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className="card p-3 mb-3">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button
                className={`btn ${
                  favorites.includes(card.id) ? "btn-danger" : "btn-outline-primary"
                }`}
                onClick={() => handleFavoriteToggle(card.id)}
              >
                {favorites.includes(card.id) ? "Unfavorite" : "Add to Favorites"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
