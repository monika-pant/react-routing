import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom'

function NewMeetupsPage() {
    const navigation = useNavigate()

    function addMeetupHandler(meetUpData) {
        // .json is firebase specific
        // we need to send a POST req but fetch sends a GET req, so we need more args
        fetch(
            'https://react-routing-575ff-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUpData),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            // pass target path here
            navigation('/');
        });
    }

    return (
        <section>
            <h1> Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    // <div>New Meetup page</div>
    )
}

export default NewMeetupsPage;