import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm: React.FC = () => {
    return (
        <div id="search-form">
            <input type="text" placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
        </div>
    )
}
export default SearchForm;