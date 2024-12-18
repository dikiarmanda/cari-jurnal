import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const AddForm = () => {
  return (
    <div className="mockup-window border border-base-300 bg-base-200 m-10">
      <div className="text-center px-10 md:px-4 py-16 border-t border-base-300">
        <h3 className="text-lg md:text-3xl font-semibold mb-3" id="add-new">Have a new information? please share with us</h3>
        <a href="#tally-open=w2kNrA&tally-layout=modal&tally-width=500&tally-emoji-text=👋&tally-emoji-animation=wave" className="btn btn-secondary btn-sm md:btn-md">
          <FontAwesomeIcon icon={faPlus} /> Add New Journal Portal</a>
      </div>
      <div className="divider"></div>
      <p className="p-5">
        <span className="font-semibold">Disclaimer: </span>
        Semua data pada website ini bersumber dari <a href="https://sinta.kemdikbud.go.id" className="link">https://sinta.kemdikbud.go.id</a> dan masing-masing website jurnal.
        Publication fee/Author fee/Biaya publikasi dapat berubah sewaktu-waktu sesuai dengan kebijakan masing-masing jurnal.
      </p>
    </div>
  )
}

export default AddForm