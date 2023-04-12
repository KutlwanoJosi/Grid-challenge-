const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// check if item has been assigned to 9 key
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

// create a copy of Christmas object and modify name and date
let copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';
copied.date.setHours(0, 0, 0, 0);

// check if new date is earlier
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);

// if new date is earlier, update copied object
if (isEarlier) {
  const { date, ...rest } = copied;
  copied = { ...rest, date: copied.date.toISOString().substr(0, 10) };
}

// log the changes made to copied object
console.log(`ID change: false`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${copied.date}`);

// output first and last holiday of the year in DD/MM/YYYY format
const holidayDates = Object.values(holidays).map((holiday) => (holiday).date.getTime());
const firstHoliday = new Date(Math.min(...holidayDates));
const lastHoliday = new Date(Math.max(...holidayDates));
console.log(`First holiday of the year: ${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.getFullYear()}`);
console.log(`Last holiday of the year: ${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${lastHoliday.getFullYear()}`);

// output a random holiday date in DD/MM/YYYY format
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = Object.values(holidays)[randomHolidayIndex];
console.log(`Random holiday`)