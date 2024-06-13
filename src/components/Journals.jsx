import Journal from "./Journal"

const Journals = ({ journals }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3 mb-5">
      {journals.map((journal) => (
        <Journal key={journal["Submitted at"]} journal={journal} />
      ))}
    </div>
  )
}

export default Journals