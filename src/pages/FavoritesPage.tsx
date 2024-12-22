import React from "react";

const FavoritesPage: React.FC = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <div className="container mt-5">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((card: any) => (
          <div key={card.id} className="card p-3 mb-3">
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
