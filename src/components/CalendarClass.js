import React from 'react';
import { useEffect } from 'react';
import jQuery from 'jquery';
import { html } from 'common-tags';

import $ from 'jquery';
import parse from 'html-react-parser';
const Page = require("../calendarjs/calendarjs.html");
var calendarjs = {__html: Page};

class CalendarClass extends React.Component {

    

    render() {
    
        

        return React.createElement('div', {dangerouslySetInnerHTML: calendarjs});
    }


} 

export default CalendarClass;