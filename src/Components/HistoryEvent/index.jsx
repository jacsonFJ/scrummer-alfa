import { FiEdit2, FiUser } from "react-icons/fi";
import { EventContainer } from "./styles";

export default function HistoryEvent({ history }) {
  return (
    <EventContainer>
      <div>
        {history.image === 'FiEdit2' ? <FiEdit2 /> : <FiUser />}
      </div>
      <span>
        <strong>{history.user_name}</strong> {history.description} em <strong>{history.date_time}</strong>
      </span>
    </EventContainer>
  );
}
