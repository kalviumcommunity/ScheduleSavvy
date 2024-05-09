import React, { useState } from 'react';
import '../Styles/CalendarComp.css';
import Navbar from './Navbar';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const CalendarComp = () => {

  const [events, setEvents] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [eventTitle, setEventTitle] = useState('')

  const handleSelectSlot = (slotInfo) =>{
    setShowModal(true);
    setSelectedDate(slotInfo.start);
  }

  const saveEvent = () =>{
    if (eventTitle && selectedDate){
      const newEvent = {
        title: eventTitle,
        start: selectedDate,
        end: moment(selectedDate).add(1,'hours').toDate()
      }
      setEvents([...events,newEvent]);
      setShowModal(false);
      setEventTitle('');
    }
  }

  return (
    <>
    <Navbar/>
    <div className='calendar_container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className='calendar_component'
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
      {showModal && (
        <div>
          
        </div>
      )}
    </div>
    </>
  );
};

export default CalendarComp;