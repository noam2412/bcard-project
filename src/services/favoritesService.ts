export const getFavorites = (): number[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };
  
  export const toggleFavorite = (cardId: number): void => {
    const favorites = getFavorites();
    if (favorites.includes(cardId)) {
      const updatedFavorites = favorites.filter((id) => id !== cardId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(cardId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  