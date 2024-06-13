const Journal = ({ journal }) => {
  let sintaColor
  switch (journal.SINTA) {
    case 'SINTA 1':
      sintaColor = 'btn-secondary'
      break;
    case 'SINTA 2':
      sintaColor = 'btn-error'
      break;
    case 'SINTA 3':
      sintaColor = 'btn-success'
      break;
    case 'SINTA 4':
      sintaColor = 'btn-warning'
      break;
    case 'SINTA 5':
      sintaColor = 'btn-info'
      break;
    default:
      sintaColor = 'btn-primary'
      break;
  }
  return (
    <div className="card md:basis-1/4 w-full bg-base-100 shadow-xl image-full">
      <figure><img src={`https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfDB8MHx8fDA%3D`} alt={journal.title} /></figure>
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title text-3xl">{journal.title}</h2>
          <p className="text-end">
            <a href={`https://sinta.kemdikbud.go.id/journals/?q=${journal.title}`} className={`btn btn-sm ${sintaColor}`}>{journal.SINTA}</a>
          </p>
        </div>
        <ul>
          <li>{journal.longTitle}</li>
          <li>Prodi : <span className="uppercase">{journal.program}</span></li>
          <li>Publication Fee:</li>
          <li className="btn btn-sm btn-pill font-semibold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(journal.fee)}</li>
        </ul>
        <div className="card-actions absolute bottom-7 right-8">
          <a href={journal.urlJournal} className="btn btn-sm btn-primary">Visit</a>
        </div>
      </div>
    </div>
  )
}

export default Journal