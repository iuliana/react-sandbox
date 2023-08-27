import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchComponent({search = ""} ){

  useEffect(() => {
    console.log("An effect dependent on a search prop", search);
  }, [search]);

  return (
    <>
      <div className={`alert-wrapper success`}>
        <p className="bbb">
          Search Component <FontAwesomeIcon icon={faSearch}/>
        </p>
      </div>
  </>
  );
}

export default SearchComponent