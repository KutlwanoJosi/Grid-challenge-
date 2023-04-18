const STATUS_MAP = {
shelf: {
color: 'green',
canReserve: true,
canCheckout: true,
canCheckIn: false,
},
reserved: {
color: 'blue',
canReserve: false,
canCheckout: true,
canCheckIn: false,
},
overdue: {
color: 'red',
canReserve: false,
canCheckout: false,
canCheckIn: true,
},
checkedOut: {
color: 'orange',
canReserve: false,
canCheckout: false,
canCheckIn: true,
}
}


// Get the relevant elements using their IDs and classes
const book1Status = document.querySelector('#book1 .status');
const book1ReserveButton = document.querySelector('#book1 .reserve');
const book1CheckoutButton = document.querySelector('#book1 .checkout');
const book1CheckinButton = document.querySelector('#book1 .checkin');

const book2Status = document.querySelector('#book2 .status');
const book2ReserveButton = document.querySelector('#book2 .reserve');
const book2CheckoutButton = document.querySelector('#book2 .checkout');
const book2CheckinButton = document.querySelector('#book2 .checkin');

const book3Status = document.querySelector('#book3 .status');
const book3ReserveButton = document.querySelector('#book3 .reserve');
const book3CheckoutButton = document.querySelector('#book3 .checkout');
const book3CheckinButton = document.querySelector('#book3 .checkin');

// Update the elements based on the status map and set the button to gray
book1CheckinButton.style.filter = 'grayscale(100%)';
book1Status.style.color = STATUS_MAP.overdue.color;
book1ReserveButton.disabled = !STATUS_MAP.overdue.canReserve;
book1CheckoutButton.disabled = !STATUS_MAP.overdue.canCheckout;
book1CheckinButton.disabled = !STATUS_MAP.overdue.canCheckIn;

book2CheckinButton.style.filter = 'grayscale(100%)';
book2Status.style.color = STATUS_MAP.reserved.color;
book2ReserveButton.disabled = !STATUS_MAP.reserved.canReserve;
book2CheckoutButton.disabled = !STATUS_MAP.reserved.canCheckout;
book2CheckinButton.disabled = !STATUS_MAP.reserved.canCheckIn;

book3CheckinButton.style.filter = 'grayscale(100%)';
book3Status.style.color = STATUS_MAP.shelf.color;
book3ReserveButton.disabled = !STATUS_MAP.shelf.canReserve;
book3CheckoutButton.disabled = !STATUS_MAP.shelf.canCheckout;
book3CheckinButton.disabled = !STATUS_MAP.shelf.canCheckIn;