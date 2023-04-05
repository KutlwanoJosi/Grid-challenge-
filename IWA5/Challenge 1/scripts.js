const FREE_WARNING = 'Free shipping only applies to single customer orders'  //defined "FREE_WARNING" by adding const
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'  //defined "BANNED_WARNING" by adding const
const NONE_SELECTED = null
const customers = 1
let location = 'RSA'  //declared location as "RSA"
let shipping = null  // declared "shipping" 
let currency = null //declared "currency" and added 'or' statements 

//fixed the structuring ofthe if statements 
if (location === 'RSA') {
    currency = 'R'
    shipping = 400
  } else if (location === 'NAM') {
    currency = '$'
    shipping = 600
  } else if (location === 'NK') { //declared location as 'NK'
    shipping = null  //declared shipping as 'null'
    currency = null
    console.log(BANNED_WARNING);
  } else {
    currency = '$'
    shipping = 800
  }

let shoes = 300 * 1
let toys = 100 * 5  //added eqaul sign
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2  //added equal sign
let pens = 5 * NONE_SELECTED
const totalPrice = toys + shoes + batteries + pens + shirts  
const totalCost = totalPrice + shipping 


if (totalPrice >= 1000 && (location === 'RSA' || location === 'NAM')) {  //added the value of 1000 
        if(customers === 1) {
            shipping = 0
        } else {
            console.log(FREE_WARNING) 
        }         
}


console.log('price', currency,totalCost) 
