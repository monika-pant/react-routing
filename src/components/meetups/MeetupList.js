import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem';

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map(meetup => 
            <MeetupItem key={meetup.id}
                title={meetup.title}
                id={meetup.id}
                image={meetup.image}
                address={meetup.address}
                description={meetup.description}/>
        )}
    </ul>
}

export default MeetupList;