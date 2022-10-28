import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';

const Option7 = () => {
  const [events, setEvents] = useState<any>([]);

  const calendarID = 'primary';
  const apiKey = 'AIzaSyAus-O0jag-UpZiutDvJvjMS5oPb3MP7rM';
  const accessToken = '';

  const getEvents = (calendarID: any, apiKey: any) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
          calendarID: calendarID,
        })

        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })

        .then(
          (response: any) => {
            let events = response.result.items;
            return events;
          },
          function (err: any) {
            return [false, err];
          }
        );
    }

    gapi.load('client', initiate);
  };

  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);

  return (
    <>
      <h1>React App with Google Calendar API!</h1>
      <div>
        <ul>
          {events?.map((event: any) => (
            <li key={event?.id} className='flex justify-center'>
              {event?.summary}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Option7;
