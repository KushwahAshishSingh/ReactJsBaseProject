import MeetupItem from "./MeetupsItem";
import classes from "./MeetupsList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          Title={meetup.Title}
          Address={meetup.Address}
          Desc={meetup.Desc}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
