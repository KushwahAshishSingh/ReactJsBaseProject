import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import userEvent from "@testing-library/user-event";

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageRef = useRef();
  const Addressref = useRef();
  const DescRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredDesc = DescRef.current.value;
    const enteredAddress = Addressref.current.value;
    const MeetupData = {
      Title: enteredTitle,
      image: enteredImage,
      Desc: enteredDesc,
      Address: enteredAddress,
    };
    props.onAddMeetups(MeetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={Addressref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={DescRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
