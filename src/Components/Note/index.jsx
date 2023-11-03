import { ImgCircle } from "../Images";
import { NoteContainer } from "./styles";

export default function Note({ note }) {
  return (
    <NoteContainer>
      <div className="note-top">
        <div className="note-top-profile">
          <ImgCircle size="32px" src={note.image} />
          <h3>
            {note.user_name} <span>em</span> {note.date_time}
          </h3>
        </div>
      </div>
      <hr />
      <p dangerouslySetInnerHTML={{__html: note.description}} />
    </NoteContainer>
  );
}
