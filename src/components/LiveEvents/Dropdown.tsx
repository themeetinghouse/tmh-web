import React, {useEffect, useState} from 'react'
import './Dropdown.scss';
import moment from "moment-timezone";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { ListLivestreamsQuery } from '../../API'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link} from 'components/Link/Link';

type Props ={
    close:any;
}
export const Dropdown = ({close} : Props) =>{
    const [events, setEvents] :any = useState([]);

    const loadLiveStreams = async()  =>{
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: {filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      const tempEvents:any =[];
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.startTime && item?.endTime && rightNow >= item.startTime && rightNow <= item.endTime
        const event : any = {
            eventName:item?.eventTitle ? item.eventTitle : item?.homepageLink,  
            eventTime:item?.videoStartTime ?? item?.startTime,
            eventLink:item?.liveYoutubeId ? "/live" : item?.externalEventUrl 
        }
        tempEvents.push({...event, live:showTime})
      })
      setEvents(tempEvents.map((a:any) => {
        console.log(a.eventTime)
        return a;
      }).sort((a:any,b:any) => a.eventTime.localeCompare(b.eventTime)))
    } catch (err) {
      console.error(err)
    }
  }
      
    useEffect(()=>{
        loadLiveStreams()
        console.log("a")
    },[])
    useEffect(()=>{
      setInterval
    },[])
    return (
        <ReactCSSTransitionGroup
        transitionName="Dropdown"
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionAppear={true}
      >
        <div className="MainContainer">
            <img onClick={close} className="close" style={{}}alt="Close Icon" src="/static/svg/Close-Cancel-White.svg"></img>
            <p className="Heading">{"Today's Livestreams"}</p>
            {events ? events.map((event: any, ind:any) =>{
                return (
                    <div style={ind === events?.length-1 ? {marginBottom:"16px"} : {}} className="EventItem" key={ind}>
                        <p className="EventTime">{moment(event?.eventTime, 'HH:mm').format('hh:mm')}<small>{moment(event?.eventTime, 'HH:mm').format('a')} EST</small> </p>
                        <p className="EventTitle">{event?.eventName}</p>
                        {event.eventLink === "/live" ?
                            <Link
                              className="EventButton"
                              style={event?.live ? {display: "grid", justifyContent: "center", alignItems:"center"} : {display: "grid", justifyContent: "center", alignItems:"center", color:"lightgrey", pointerEvents:"none"}}
                              to={"/live"}                          
                            >
                            Join
                            </Link> : 
                        <a className="EventButton" 
                        style={event?.live ? {display: "grid", justifyContent: "center", alignItems:"center"} : {display: "grid", justifyContent: "center", alignItems:"center", color:"lightgrey", pointerEvents:"none"}} 
                        href={!event.eventLink.includes("https://") ? `https://${event.eventLink}` : event.eventLink}
                        >
                          Join
                        </a>
                        }
                    </div>
                )
            }): null}
        </div>
        </ReactCSSTransitionGroup>
    )
}