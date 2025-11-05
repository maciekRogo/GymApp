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
    const [showEditModal, setShowEditModal] = useState(false);
    const [newEventDate, setNewEventDate] = useState('');
    const [newEventTitle, setNewEventTitle] = useState('');
    const [editEvent, setEditEvent] = useState(null);

    const handleDateClick = (info) => {
        setNewEventDate(info.dateStr);
        setShowModal(true);
    };

    const handleEventClick = (info) => {
        setEditEvent({
            id: info.event.id,
            title: info.event.title,
            start: info.event.startStr,
            end: info.event.endStr,
        });
        setShowEditModal(true);
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

    const handleUpdateEvent = () => {
        if (editEvent && editEvent.title.trim() !== '') {
            setEvents(events.map(ev => ev.id === editEvent.id ? editEvent : ev));
            setShowEditModal(false);
            setEditEvent(null);

        }

    };

    return (
        <div className={style.container}>
            <h1 className={style.header}>Harmonogram treningów</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                locale="pl"
                firstDay={1}
                events={events}
                selectable={true}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                height="80vh"
            />

            {showModal && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <h2 className="text-xl font-bold mb-4">Dodaj nowy trening</h2>
                        <input
                            type="text"
                            placeholder="Tytuł wydarzenia"
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            className={style.input}
                        />
                        <p className="mb-4 text-gray-600">
                            Data: {new Date(newEventDate).toLocaleDateString('pl-PL')}
                        </p>
                        <button onClick={handleAddEvent} className={style.button}>Dodaj</button>
                        <button onClick={() => setShowModal(false)} className={style.cancelButton}>Anuluj</button>
                    </div>
                </div>
            )}

            {showEditModal && editEvent && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <h2 className="text-xl font-bold mb-4">Edytuj trening</h2>
                        <input
                            type="text"
                            value={editEvent.title}
                            onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
                            className={style.input}
                        />
                        <p className="mb-4 text-gray-600">
                            Data: {new Date(editEvent.start).toLocaleDateString('pl-PL')}
                        </p>
                        <button onClick={handleUpdateEvent} className={style.button}>Zapisz</button>
                        <button onClick={() => setShowEditModal(false)} className={style.cancelButton}>Anuluj</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarFull;
