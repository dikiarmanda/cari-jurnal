import AddForm from './components/AddForm'
import Footer from './components/Footer'
import Journals from './components/Journals'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Summary from './components/Summary'
import { useState } from 'react'
import { data } from './assets/data.js'

const App = () => {
  const dataJournals = data
  const [journals, setJournals] = useState(dataJournals)

  const handleSearch = (search) => {
    const newJournal = dataJournals.filter((journal) => {
      return search === '' ? journal
        : journal.title.toLowerCase().includes(search.toLowerCase())
        || journal.longTitle.toLowerCase().includes(search.toLowerCase())
        || journal.SINTA.toLowerCase().includes(search.toLowerCase())
        || journal.program.toLowerCase().includes(search.toLowerCase())
    })
    setJournals(newJournal)
  }

  return (
    <>
      <Navbar />
      <main>
        <section className='px-5'>
          <Search onSearch={handleSearch} />
          <Journals journals={journals} />
          <div className="divider"></div>
        </section>
        <section className='bg-base-200 p-5'>
          <h3 className='text-2xl font-semibold mb-5'>Publication Fee Summary</h3>
          <div className='flex flex-row flex-wrap gap-3'>
            {[1, 2, 3, 4, 5].map(sinta => (
              <Summary key={sinta} journals={dataJournals.filter(journal => journal.SINTA.includes(sinta))} sinta={sinta} />
            ))}
          </div>
        </section>
        <div className="divider"></div>
        <AddForm />
      </main>
      <Footer />
    </>
  )
}

export default App