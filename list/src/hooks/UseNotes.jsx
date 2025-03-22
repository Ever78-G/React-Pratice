import { useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes() {
    const [notes, setNotes] = useState([]);

    // Load notes from localStorage on mount
    useEffect(() => {
        const savedNotes = localStorage.getItem(LOCALSTORAGE_KEY);
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    // Save notes to localStorage when notes change
    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    // Add new note
    function add(title, message) {
        const id = Date.now();
        const noteObject = { title, message, id };
        setNotes(prevNotes => [...prevNotes, noteObject]); // ✅ Corrección: Ahora `notes` es un array
    }
    function remove(id){
        let newNotes =notes.filter(note =>note.id != id)
        setNotes(newNotes);

    }

    return {
        notes,
        add,
        remove,
    };
}

export default useNotes;
