import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../contexts/NoteContext";

function NoteList() {
    console.log("✅ Renderizando NoteList..."); // 🛠️ Depuración

    const { notes } = useContext(NotesContext);
    console.log("📝 Contexto en NoteList:", notes); // 🛠️ Depuración

    return (
        <div>
            {notes && notes.length > 0 ? (
                notes.map(note => (
                    <Note key={note.id} id={note.id} title={note.title} message={note.message} />
                ))
            ) : (
                <p>📭 No hay notas aún.</p>
            )}
        </div>
    );
}

export default NoteList;

