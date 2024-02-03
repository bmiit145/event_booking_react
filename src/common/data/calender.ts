var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

const defaultevent = [
  {
    "id": 1,
    "title": "World Braille Day",
    "start": "2022-01-01T00:00:00.000Z",
    "end": "2022-01-08T00:00:00.000",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },
  {
    "id": 2,
    "title": "World Leprosy Day",
    "start": "2022-05-04",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },
  {
    "id": 3,
    "title": "International Mother Language Day",
    "start": "2022-02-21",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },
  {
    "id": 4,
    "title": "International Women's Day",
    "start": "2022-03-08",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 5,
    "title": "World Thinking Day",
    "start": "2022-02-22",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 6,
    "title": "International Mother Language Day",
    "start": "2022-03-21",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 7,
    "title": "World Water Day",
    "start": "2022-03-22",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 8,
    "title": "World Health Day",
    "start": "2022-04-07",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 9,
    "title": "International Special Librarians Day",
    "start": "2022-04-16",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  },

  {
    "id": 10,
    "title": "Earth Day",
    "start": "2022-04-22",
    "className": "bg-info-subtle",
    "allDay": true,
    "description": "N.A.",
    "location" : "N.A."
  }
];

const events = [
  {
    id: 456,
    title: "Velzon Project Discussion with Team",
    start: new Date(y, m, d + 23, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: false,
    className: "bg-info-subtle",
    location: "Head Office, US",
    extendedProps: {
      department: "Discussion",
    },
    description: "Tell how to boost website traffic",
  },
  {
    id: 356,
    title: "Project Discussion with Team",
    start: new Date(y, m, d + 23, 20, 0),
    end: new Date(y, m, d + 27, 16, 0),
    allDay: false,
    className: "bg-info-subtle",
    location: "Head Office, US",
    extendedProps: {
      department: "Discussion",
    },
    description: "Tell how to boost website traffic",
  },
];

const calenderDefaultCategories = [
  {
    id: 1,
    title: "New Event Planning",
    type: "success",
  },
  {
    id: 2,
    title: "Meeting",
    type: "info",
  },
  {
    id: 3,
    title: "Generating Reports",
    type: "warning",
  },
  {
    id: 4,
    title: "Create New theme",
    type: "danger",
  },
];

export { calenderDefaultCategories, events, defaultevent };