export const filterCards = (cards: any[], searchTerm: string) => {
    return cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  