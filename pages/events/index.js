import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-seach";
import { Fragment } from "react";
import { useRouter } from "next/router";



function AllEventsPage(){
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year , month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return(
        <Fragment>
            <EventSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}
export default AllEventsPage;