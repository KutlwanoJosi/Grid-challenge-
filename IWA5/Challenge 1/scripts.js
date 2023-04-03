const FREE_WARNING = 'Free shipping only applies to single customer orders'  //defined "FREE_WARNING" by adding const
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'  //defined "BANNED_WARNING" by adding const
const NONE_SELECTED = '0'
let location = 'RSA'  //declared location as "RSA"
let shipping = 400 || 600 || 800 || null  // declared "shipping" and added 'or' statements 
let currency = 'R'  //declared "currency" and added 'or' statements 
const customers = '1'

//fixed the structuring of the boolean
if (location) { 
    shipping === 400 && currency === 'R' 

    location = 'NAM' //declared loaction as 'NAM'
if (location){
    currency = '$'
    shipping = 600 && currency === '$'  //added currency value 
}

else {
    currency = '$'
    shipping = 800 && currency === '$'  //added currency value 
}

}

let shoes = 300 * 1
let toys = 100 * 5  //added eqaul sign
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2  //added equal sign
let pens = 5 * 'NONE_SELECTED' 

if (shoes + batteries + pens + shirts >= 1000 && currency === 'R' || 60 && currency === '$' ) {  //added the value of 60 and the currency
	shipping = null  //declared shipping as 'null'
    location = 'NAM'
    if (location && customers < 2) {

        location = 'RSA'  //declared location as "RSA"
			if (location)
		    shipping = null 
		}
	}

if (shipping = 0 && customers !== 1) {
    console.log(FREE_WARNING) 

    location = 'NK'  //declared location as 'NK'
    if(location){
        currency = null  //declared shipping as 'null'
        console.log(BANNED_WARNING)
}
}

console.log('price', currency, shoes + batteries + pens + shirts + shipping)


