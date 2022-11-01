import { Divider, Input } from 'antd';
import { useState } from 'react';


function SearchBar({searchProduct}) {
  
  
  const [query, setQuery] = useState('');


 const searchProductBar = (e) => {
        setQuery(e.target.value) // renderiza lo que escribo en search
       return searchProduct(e.target.value)
    }



  return (
    <>
      <Divider>Search</Divider>

      <label >Search</label>
      <Input  placeholder="Search by name" value={query} type="text"  onChange={searchProductBar}/>
    </>
  );
}

export default SearchBar;
