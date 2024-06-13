import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = ({ onSearch, journals }) => {
  const lastSubmittedDate = journals.reduce((acc, journal) => {
    const date = new Date(journal["Submitted at"]);
    return date > acc ? date : acc;
  }, new Date(0));
  return (
    <div className="flex flex-col text-center gap-2 my-5">
      <div className="input input-bordered input-primary flex items-center gap-2 md:w-1/3 mx-auto">
        <input type="text" placeholder="Cari Portal Jurnal" className="grow" onChange={(e) => onSearch(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-30" />
      </div>
      <p className="text-xs md:w-1/3 mx-auto">
        Last update {lastSubmittedDate.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) + ' | ' + lastSubmittedDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: true })}
      </p>
    </div>
  )
}

export default Search