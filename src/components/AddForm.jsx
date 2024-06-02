import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const AddForm = () => {
  return (
    <div className="mockup-window border border-base-300 bg-slate-100 m-10">
      <div className="text-center px-10 md:px-4 py-16 border-t border-base-300">
        <h3 className="text-lg md:text-3xl font-semibold mb-3">Have a new information? please share with us</h3>
        <a href="#tally-open=w2kNrA&tally-layout=modal&tally-width=500&tally-emoji-text=👋&tally-emoji-animation=wave" className="btn btn-secondary btn-sm md:btn-md">
          <FontAwesomeIcon icon={faPlus} /> Add New Journal Portal</a>
      </div>
    </div>
  )
}

export default AddForm