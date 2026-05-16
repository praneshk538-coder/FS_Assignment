import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Notes from './components/Notes'
import notesData from './data/notesData'

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="card-container">
          {notesData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <Notes />
      </div>
    </div>
  )
}

export default App