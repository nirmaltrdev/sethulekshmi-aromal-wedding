export function generateICSFile(event: {
  title: string;
  description: string;
  location: string;
  startDate: string; // YYYYMMDDTHHMMSS
  endDate: string;
}): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sethulekshmi & Aromal Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: Wedding Celebration of Sethulekshmi & Aromal tomorrow!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function openGoogleCalendar(event: {
  title: string;
  description: string;
  location: string;
  startDate: string; // 20261025T110000Z
  endDate: string; // 20261025T153000Z
}): void {
  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', event.title);
  url.searchParams.set('details', event.description);
  url.searchParams.set('location', event.location);
  url.searchParams.set('dates', `${event.startDate}/${event.endDate}`);
  window.open(url.toString(), '_blank', 'noopener,noreferrer');
}
