import { useState } from "react";

export const SearchMovie = ({ setQuery }) => { 
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const q = inputValue.trim();

    if (!q) {
      setQuery("");
      return;
    }
    setQuery(q);   
  };  

  return  (
    <form onSubmit={ onSubmit } className="d-flex gap-2">
      <input 
        className="form-control mr-sm-2"
        type="text"
        placeholder="🔎 Buscar Movie..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
};