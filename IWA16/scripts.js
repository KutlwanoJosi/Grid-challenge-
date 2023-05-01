// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {                   //Fixed the destructuring syntax and array access
    const {firstName, surname, id, races }= athlete;
    const [{date, time: timeAsArray}] = races.reverse();
     const fragment = document.createDocumentFragment();

     /*Create a new h2 element, set its text content to the id property of the athlete, and append it to the document fragment.*/
    const title = document.createElement('h2');      //Fixed h2 and text content by adding quotes
     title.textContent= id;
     fragment.appendChild(title);
     const list = document.createElement('dl');   //Fixed D1 and text content by adding quotes

     //Fixed date handling and template string syntax
     const day = new Date(date).getDate();
     const month = MONTHS[new Date(date).getMonth()];
     const year = new Date(date).getFullYear();
     const [first, second, third, fourth] = timeAsArray;
     const total = first + second + third + fourth;
     const hours = Math.floor(total / 60);
     const minutes = total % 60;

     /*Create a new dl (description list) element, 
     set its HTML content using template literals that incorporate the extracted properties, 
     and append it to the document fragment.*/

     /*Create a new dl (description list) element, set its HTML content using template literals that incorporate the extracted properties, 
     and append it to the document fragment.*/
      // Fixed template string syntax and concatenation
     list.innerHTML =  `
       <dt>Athlete</dt>
       <dd>${firstName} ${surname}</dd>
       <dt>Total Races</dt>
       <dd>${races.length}</dd>
       <dt>Event Date (Latest)</dt>
       <dd>${day} ${month} ${year}</dd>
       <dt>Total Time (Latest)</dt>
       <dd>${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}</dd>
     `;
     fragment.appendChild(list);
      return fragment;      // fixed missing statement and return the completed document fragment from the createHtml function.
   }

   // Fixed query selector arguments and variable assignments
   ///the athlete  IDs should be passed as strings to 'querySelector"
   const { NM372, SV782} = data.response.data; // Extract the NM372 and SV782 properties from the data.response.data object.

   /*Used querySelector to find the HTML elements that have data-athlete attributes with the values "NM372" and "SV782", respectively. 
   And append document fragments created by the createHtml function, using the corresponding athlete objects as arguments.*/
   document.querySelector("[data-athlete= 'NM372']").appendChild(createHtml(NM372));
   document.querySelector("[data-athlete = 'SV782']").appendChild(createHtml(SV782));