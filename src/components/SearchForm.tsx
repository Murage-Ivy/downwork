import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, } from "react";
import { postContext } from "../contexts/PostContext";

const SearchForm: React.FC = () => {
    const { search, handleSearch } = useContext(postContext)
    return (
        <div id="search-form">
            <input type="text" placeholder="Search" value={search} name="search" onChange={handleSearch} />
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
        </div>
    )
}
export default SearchForm;