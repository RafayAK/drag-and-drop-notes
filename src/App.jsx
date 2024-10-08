import {useState} from "react";
import "./App.css";
import Notes from "./components/notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Stephen try moving this note",
    },
    {
      id: 2,
      text: "Stephen move this note over the other note",
    },
    {
      id: 3,
      text: "Try refreshing the tab",
    },
    
  ]);

  const [note, setNote] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            setNotes([...notes, {id: notes.length + 1, text: note}]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
      <div className="watermark">Rafay @ AiCEO</div>
    </div>
  );
}

export default App;
