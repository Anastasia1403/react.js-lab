export const TimeList = [
  '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm',
];

export const DoctorList = [
  {
    id: 1,
    imageUrl: '/img/avatar.png',
    firstName: 'Arlene',
    lastName: 'Sanders',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '4:00 pm', patient: 1 },
      { date: new Date(), time: '1:00 pm', patient: 2 },
      { date: new Date(), time: '5:00 pm' },
      { date: new Date(), time: '6:00 pm' },
    ],
  },
  {
    id: 2,
    imageUrl: '/img/avatar.png',
    firstName: 'Bill',
    lastName: 'Perez',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '12:00 am', patient: 1 },
    ],

  },
  {
    id: 3,
    imageUrl: '/img/avatar.png',
    firstName: 'Rachel',
    lastName: 'Williams',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],

  },
  {
    id: 4,
    imageUrl: '/img/avatar.png',
    firstName: 'Laura',
    lastName: 'Bennett',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],
  },
  {
    id: 5,
    imageUrl: '/img/avatar.png',
    firstName: 'Melissa',
    lastName: 'Casey',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],

  },
  {
    id: 6,
    imageUrl: '/img/avatar.png',
    firstName: 'Doris',
    lastName: 'Patterson',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],
  },
  {
    id: 7,
    imageUrl: '/img/avatar.png',
    firstName: 'John',
    lastName: 'Adams',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],
  },
  {
    id: 8,
    imageUrl: '/img/avatar.png',
    firstName: 'Timothy',
    lastName: 'Taylor',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '2:00 pm', patient: 1 },
    ],
  },
  {
    id: 9,
    imageUrl: '/img/avatar.png',
    firstName: 'Becky',
    lastName: 'Smith',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
    ],
  },
  {
    id: 10,
    imageUrl: '/img/avatar.png',
    firstName: 'Jennifer ',
    lastName: 'Haynes',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '3:00 pm', patient: 1 },
    ],

  },
  {
    id: 11,
    imageUrl: '/img/avatar.png',
    firstName: 'Donald',
    lastName: 'May',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '2:00 pm', patient: 1 },
    ],
  },
  {
    id: 12,
    imageUrl: '/img/avatar.png',
    firstName: 'Jeremy',
    lastName: 'Mason',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '6:00 pm', patient: 1 },
    ],
  },
  {
    id: 13,
    imageUrl: '/img/avatar.png',
    firstName: 'Russell',
    lastName: 'Soto',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '4:00 pm', patient: 1 },
    ],

  },
  {
    id: 14,
    imageUrl: '/img/avatar.png',
    firstName: 'Ann',
    lastName: 'Smith',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '3:00 pm', patient: 1 },
    ],

  },
  {
    id: 15,
    imageUrl: '/img/avatar.png',
    firstName: 'Carol',
    lastName: 'Clark',
    occupation: 'Surgeon',
  },
  {
    id: 16,
    imageUrl: '/img/avatar.png',
    firstName: 'Gregory',
    lastName: 'Smith',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '4:00 pm', patient: 1 },
    ],

  },
  {
    id: 17,
    imageUrl: '/img/avatar.png',
    firstName: 'Patricia',
    lastName: 'Martinez',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '2:00 pm', patient: 1 },
    ],

  },
  {
    id: 18,
    imageUrl: '/img/avatar.png',
    firstName: 'Richard',
    lastName: 'Walker',
    occupation: 'Therapist',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
      { date: new Date(), time: '6:00 pm', patient: 1 },
    ],

  },
  {
    id: 19,
    imageUrl: '/img/avatar.png',
    firstName: 'Lisa',
    lastName: 'Silva',
    occupation: 'Cardiologist',
    appointments: [
      { date: new Date(), time: '4:00 pm', patient: 1 },
      { date: new Date(), time: '6:00 pm', patient: 1 },
    ],
  },
  {
    id: 20,
    imageUrl: '/img/avatar.png',
    firstName: 'Joe',
    lastName: 'Milton',
    occupation: 'Surgeon',
    appointments: [
      { date: new Date(), time: '5:00 pm', patient: 1 },
      { date: new Date(), time: '6:00 pm', patient: 1 },
    ],
  },
];

export const occupations = [];
DoctorList.map((doctor) => {
  if (!occupations.includes(doctor.occupation)) occupations.push(doctor.occupation);
  return null;
});
