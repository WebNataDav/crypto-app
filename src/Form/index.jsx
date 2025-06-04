import {useState, useEffect} from 'react';


const Form = ({data}) => {
const[query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleChange = (e) => {
  setQuery(e.target.value);

}

const handleSubmit = (e) => {
e.preventDefault();
const filteredData = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
setResults(filteredData);
console.log('filteredData', filteredData)
}



return (
  <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
    <h1>Search Form</h1>
    <input onChange={handleChange} value={query} name="search" type="text"/>
    <button type="submit">Start search</button>
    <div>
      {!results && (
        <h3>Loading....</h3>
      )}
      {results && (
        results.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  </form>
)
};

export default Form;