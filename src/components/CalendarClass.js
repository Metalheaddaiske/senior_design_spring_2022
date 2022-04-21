import React from 'react';
//import * as calendar_lib from '../calendarjs/src/calendarjs';
import * as calendar_lib from '../calendarjs/src/calendarjs';
import * as supplement from './calendar_supplement';
const Page = require("!!html-loader!../calendarjs/calendarjs.html").default;
import ScriptTag from 'react-script-tag';
import {Helmet} from 'react-helmet';

class CalendarClass extends React.Component {

    render() {

    return(
    
        
            <div dangerouslySetInnerHTML={{__html: Page}}>
            <Helmet>
            <script type='text/javascript' src="./calendar_supplement.js"></script>
            </Helmet>
            </div>
        

    );
    }

    componentDidMount() {
        var calendarInstance = new calendar_lib.calendarJs( "myCalendar", { 
            exportEventsEnabled: true, 
            manualEditingEnabled: true, 
            showTimesInMainCalendarEvents: false,
            minimumDayHeight: 0,
            manualEditingEnabled: true,
            organizerName: "Your Name",
            organizerEmailAddress: "your@email.address",
            visibleDays: [ 0, 1, 2, 3, 4, 5, 6 ]
        } );

        document.title += " v" + calendarInstance.getVersion();
        document.getElementById( "header" ).innerText += " v" + calendarInstance.getVersion();

        calendarInstance.addEvents( supplement.getEvents() );

        supplement.test_function();
        
    }

} 

export default CalendarClass;