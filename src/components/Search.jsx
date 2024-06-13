import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = ({ onSearch }) => {
  return (
    <div className="flex flex-col text-center gap-2 my-5">
      <div className="input input-bordered flex items-center gap-2 md:w-1/3 mx-auto">
        <input type="text" placeholder="Cari Portal Jurnal" className="grow" onChange={(e) => onSearch(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-30" />
      </div>
      <p className="text-xs md:w-1/3 mx-auto">Last update 3 Jun 2024 | 5.14 PM</p>
    </div>
  )
}

export default Search