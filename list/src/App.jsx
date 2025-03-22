import NoteList from "./notes/NotesList"
import NotasForm from "./notes/NotesForm"
import { NotesProvider } from "./contexts/NoteContext"

function App() {

  return (
    <div className="App">
      <NotesProvider>
          <NotasForm/>
          <NoteList/>
      </NotesProvider>

    </div>

  )
}

export default App
