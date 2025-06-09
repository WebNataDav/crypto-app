import {useState, useEffect} from 'react';


const Form = ({data}) => {
const[query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleChange = (e) => {
  setQuery(e.target.value);
}  

const handleSubmit = (e) => {
 e.preventDefault();
const filteredData = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
 setResults(filteredData)
}

useEffect(() => {
  if(query.trim() === '') {
    setResults([])
  }
}, [query]);



return (
 <>
  <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
    <h2>Start search</h2>
    <input onChange={handleChange} value={query} type="text"/>
    <button type="submit">search</button>
  </form>
  <h4>{results}</h4>
 </>
)
};

export default Form;