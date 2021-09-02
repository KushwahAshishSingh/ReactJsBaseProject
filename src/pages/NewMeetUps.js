import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";

function NewMeetUpsPage() {
  const history = useHistory();
  function addMeetupDataToServer(MeetUpDataForServer) {
    fetch("https://gurujiakhara-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(MeetUpDataForServer),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <NewMeetUpForm onAddMeetups={addMeetupDataToServer} />
    </div>
  );
}
export default NewMeetUpsPage;
