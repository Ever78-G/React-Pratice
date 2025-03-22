import NoteDeleteBtn from "./NoteDeleteBtn";

function Note({id, title, message }) {
    return (
        <div className="note">
            <h2>{title}</h2>
            <p>{message}</p>
            <NoteDeleteBtn id={id}/>
        </div>
    );
}

export default Note;
