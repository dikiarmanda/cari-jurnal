import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = ({ onSearch }) => {
  return (
    <div className="flex justify-center gap-2 my-5">
      <div className="input input-bordered flex items-center gap-2">
        <input type="text" placeholder="Cari Portal Jurnal" className="grow" onChange={(e) => onSearch(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-30" />
      </div>
    </div>
  )
}

export default Search