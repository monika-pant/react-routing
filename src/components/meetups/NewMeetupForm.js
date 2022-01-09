import {useRef}  from 'react';
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const AddressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = AddressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetUpData);
        // console.log(meetUpData);


    }
     return (
         <Card>
             <form className={classes.form} onSubmit={submitHandler}>
             <div className={classes.control}>
                     <label htmlFor="title">Meetup title</label>
                     <input type="text" required id="title" ref={titleInputRef}/>
                 </div>
                 <div className={classes.control}>
                     <label htmlFor="image">Meetup image</label>
                     <input type="url" required id="image" ref={imageInputRef}/>
                 </div>
                 <div className={classes.control}>
                     <label htmlFor="address">Meetup Address</label>
                     <input type="text" required id="address" ref={AddressInputRef}/>
                 </div>
                 <div className={classes.control}>
                     <label htmlFor="description">Meetup description</label>
                     <textarea required rows="5" id="description" ref={descriptionInputRef}/>
                 </div>
                 <div className={classes.actions}>
                     <button> Add Meetup </button>
                 </div>
             </form>
         </Card>
     )
}

export default NewMeetupForm;