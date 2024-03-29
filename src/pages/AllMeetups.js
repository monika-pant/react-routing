import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const[loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // cosnt url = props.url;
        fetch(
            //dont forget to add .json in the end other wise u wont be able to render
            'https://react-routing-575ff-default-rtdb.firebaseio.com/meetups.json'
        )
            .then(response => {
            return response.clone().json();
        })
            .then( data => {
                const meetups = [];

                for (const key in data) {
                    const meetup ={
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                } 
                setIsLoading(false);
                setLoadedMeetups(meetups);
            }).catch((e) => {
                console.log('error',e);
            });
    }, []);

    if(isLoading) {
        return (
            <section>
                <p> Loading....</p>
            </section>
        )
    }
    return <section>
        {/* react ability */}
        {/* {[<li>Item1</li>, <li>item2</li>]} */}

        {/* {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>
        })} */}


        <h1>All meetups</h1>
        <MeetupList meetups={loadedMeetups}></MeetupList>
        </section>
}

export default AllMeetupsPage;