import { FiEdit2, FiUser } from "react-icons/fi";
import { EventContainer } from "./styles";

export default function HistoryEvent(props) {
  return (
    <EventContainer>
      <div>
        {props.icon === 'edit' ? <FiEdit2 /> : <FiUser />}
      </div>
      <span>
        {props.children}
      </span>
    </EventContainer>
  );
}
