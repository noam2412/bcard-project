import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // פונקציה שמעבירה את הערך בחיפוש
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value); // מעדכן את ה-state
    onSearch(value); // מעביר את הערך החוצה דרך הפונקציה
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
