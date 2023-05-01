// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = [];
    /*
    *The for loop in this function runs for length iterations.
    *In each iteration, it appends a new value to the result array,
    which is the value of the loop variable 'i' So, the result array will contain the values from 0 to length - 1.
    */
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    //After the for loop completes, the result array is returned by the function.
    return result;
};
//removed the arrow function syntax '=>' and replaced it with the function expression syntax.
//added semi-colons and parentheses after 'new Date'.
const createData = function () {
    const current = new Date();
    current.setDate(1);
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
    const weeks = createArray(6);
    const days = createArray(7);
    let result = []   //result is initialized to an empty array, which is a more appropriate initial value for an array that will be populated later.
    //the loop counters weekIndex and dayIndex using the let keyword, whereas Code 1 uses the in operator to iterate over the arrays.
    //This makes Code 2 more readable, as it is clear that the loops are iterating over the length of the arrays.
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        let value = {
            week: weekIndex + 1,
            days: []
        };

        // the value of day is calculated using the formula (weekIndex * 7) + dayIndex - startDay + 1.
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
            let classString = 'table__cell';
            if (dayIndex === 0 || dayIndex === 6) {
                classString += ' table__cell_weekend';
            }
            //added a class property to the object pushed to the 'value.days' array.
            value.days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
                class: classString,
            });
        }
        //updated the weeks array with the current value object using the statement weeks[weekIndex] = value.
        weeks[weekIndex] = value;
    }
    return weeks;
};
//changed the arrow function notation to the function declaration notation.
//replaced the template literal syntax with a string concatenation.
const addCell = function (existing, classString, value) {
    return `${existing}<td class="${classString}">${value}</td>`;
};
const createHtml = function (data) {              //removed the arrow function syntax '=>' and replaced it with the function expression syntax.
    let result = '';
    for (let i = 0; i < data.length; i++) {      //added the 'for (let i = 0; i < data.length; i++)' loop is used to iterate through the data array.
        const week = data[i];
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);  // the addCell function returns the updated inner value.
        for (let j = 0; j < week.days.length; j++) {                   //a template literal '${week.week}' to display the week number in the sidebar.
            const day = week.days[j];
            let classString = 'table__cell';
            //added constant to declare 'isToday, isWeekend, and isAlternate' variables.
            const currentDate = new Date();
            const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
            const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
            const isAlternate = week.week % 2 === 0;
            if (isToday) {
                classString = `${classString} table__cell_today`;      //corrected the logical operators from '===' to '='.
            }
            if (isWeekend) {
                classString = `${classString} table__cell_weekend`;    //corrected the logical operators from '===' to '='.
            }
            if (isAlternate) {
                classString = `${classString} table__cell_alternate`;
            }
            inner = addCell(inner, classString, day.value || '');
        }
        result += `<tr>${inner}</tr>`;
    }
    return result;
};

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)