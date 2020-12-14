import './search-input.styles.css'

export const SearchInput = ({placeholder, handleChange}) => {
  return(
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange}/> 
  );
}