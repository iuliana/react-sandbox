import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchComponent({search = ""} ){

  useEffect(() => {
    console.log("An effect dependent on a search prop", search);
  }, [search]);

  return (
    <>
    <p className="bbb">
      Search <FontAwesomeIcon icon={faSearch}/>
    </p>
  </>
  );
}

export default SearchComponent