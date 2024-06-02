import AddForm from './components/AddForm'
import Footer from './components/Footer'
import Journals from './components/Journals'
import Navbar from './components/Navbar'
import Search from './components/Search'
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
      <main className='px-5'>
        <Search onSearch={handleSearch} />
        <Journals journals={journals} />
        <div className="divider"></div> 
      </main>
      <AddForm />
      <Footer />
    </>
  )
}

export default App