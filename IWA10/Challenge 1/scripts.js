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
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

//create a new date for the 6th object
let copied = { ...holidays[christmas] };
const copiedDate = copied.date.getTime();
const christmasDate = holidays[christmas].date.getTime();

//check if the date copied is earlier then the old date
let isEarlier;

if (copiedDate < christmasDate) {
  isEarlier = true;
} else {
  isEarlier = false;
}


// log the changes made to copied object
console.log(`ID change: false`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${copied.date}`);

// output first and last holiday of the year in DD/MM/YYYY format
const firstHolidayTimestamp = Math.min( 
new Date(holidays[0].date).getTime(), 
new Date(holidays[1].date).getTime(), 
new Date(holidays[2].date).getTime(), 
new Date(holidays[3].date).getTime(), 
new Date(holidays[4].date).getTime(), 
new Date(holidays[5].date).getTime(), 
new Date(holidays[6].date).getTime(),
new Date(holidays[7].date).getTime(), 
new Date(holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max( 
  new Date(holidays[0].date).getTime(), 
  new Date(holidays[1].date).getTime(), 
  new Date(holidays[2].date).getTime(), 
  new Date(holidays[3].date).getTime(), 
  new Date(holidays[4].date).getTime(), 
  new Date(holidays[5].date).getTime(), 
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(), 
  new Date(holidays[8].date).getTime(),
  )

const firstHoliday = new Date(firstHolidayTimestamp) 
const firstDay = firstHoliday.getDate().toString().padStart(2, 0) 
const firstMonth = (firstHoliday.getMonth() + 1).toString().padStart(2, 0) 
console.log(`${firstDay}/${firstMonth}/${currentYear}`)

const lastHoliday = new Date(lastHolidayTimestamp) 
const lastDay = lastHoliday.getDate().toString().padStart(2, 0) 
const lastMonth = (lastHoliday.getMonth() + 1).toString().padStart(2, 0) 
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

// output a random holiday date in DD/MM/YYYY format
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = Object.values(holidays)[randomHolidayIndex];
console.log(randomHoliday)