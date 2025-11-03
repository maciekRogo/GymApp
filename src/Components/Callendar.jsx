import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import style from '../Components/css/Callendar.module.css';

const CalendarFull = () => {
    const [events, setEvents] = useState([
        { id: '1', title: 'Spotkanie zespołu', start: '2025-11-03T10:00:00', end: '2025-11-03T11:00:00' },
        { id: '2', title: 'Rezerwacja sali', start: '2025-11-04T14:00:00', end: '2025-11-04T15:30:00' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newEventDate, setNewEventDate] = useState('');
    const [newEventTitle, setNewEventTitle] = useState('');

    const handleDateClick = (info) => {
        setNewEventDate(info.dateStr);
        setShowModal(true);
    };

    const handleAddEvent = () => {
        if (newEventTitle.trim() !== '') {
            const newEvent = {
                id: String(events.length + 1),
                title: newEventTitle,
                start: newEventDate,
            };
            setEvents([...events, newEvent]);
            setShowModal(false);
            setNewEventTitle('');
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.header}>Kalendarz Spotkań</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                locale="pl"
                firstDay={1} // tydzień zaczyna się od poniedziałku
                events={events}
                selectable={true}
                dateClick={handleDateClick}
                eventClick={(info) => alert(`Wybrano event: ${info.event.title}`)}
                height="80vh"
            />

            {showModal && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <h2 className="text-xl font-bold mb-4">Dodaj nowe wydarzenie</h2>
                        <input
                            type="text"
                            placeholder="Tytuł wydarzenia"
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            className={style.input}
                        />
                        <p className="mb-4 text-gray-600">Data: {newEventDate}</p>
                        <button onClick={handleAddEvent} className={style.button}>
                            Dodaj
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            Anuluj
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarFull;