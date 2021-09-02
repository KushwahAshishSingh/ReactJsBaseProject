import Meetups from "../components/meetups/MeetupsList";
import { useState, useEffect } from "react";

function AllMeetUpPages() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://gurujiakhara-default-rtdb.firebaseio.com/meetups.json")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>...isLoading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>all Meetups</h1>
      <Meetups meetups={loadedMeetups} />
    </section>

    // <div>
    //   <h2>All Meet Up</h2>
    //   <ul>
    //     {DUMMY_DATA.map((meetup) => {
    //       return (
    //         <li key={meetup.id}>
    //           {meetup.title} "and desc is " {meetup.description}{" "}
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}
export default AllMeetUpPages;
