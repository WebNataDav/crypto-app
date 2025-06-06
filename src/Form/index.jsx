import {useState, useEffect} from 'react';


const Form = ({data}) => {
const[query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleChange = (e) => {
  setQuery(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const filteredRes = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  setResults(filteredRes);
}

useEffect(() => {
if(query.trim() === '') {
  setResults([])
}
}, [query])

return (
  <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
    <h1>Search Form</h1>
    <input onChange={handleChange} id="search" value={query} name="search"/>
    <button type="submit">Search</button>
    <>{results}</>
  </form>
)
};

export default Form;