const FREE_WARNING = 'Free shipping only applies to single customer orders'  //defined "FREE_WARNING" by adding const
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'  //defined "BANNED_WARNING" by adding const
const NONE_SELECTED = '0'
const customers = '1'
let location = 'RSA'  //declared location as "RSA"
let shipping = null  // declared "shipping" 
let currency = 'R'  //declared "currency" and added 'or' statements 


//fixed the structuring of the boolean
if (location =='RSA') { 
    currency == 'R'
    shipping = 400

        if (location == 'NAM'){  //declared loaction as 'NAM'
            currency == '$'  //added currency value
            shipping = 600    
    }

        else {
            currency == '$'  //added currency value
            shipping = 800    
    }

}

let shoes = 300 * 1
let toys = 100 * 5  //added eqaul sign
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2  //added equal sign
let pens = 5 * NONE_SELECTED 

if (shoes + batteries + pens + shirts >= 1000 && currency === 'R' ) {  //added the value of 1000 and the currency
    
        if (location == 'NAM' || location == 'RSA' && customers !== 1) {
            shipping = null  
	}

        else {
            console.log(FREE_WARNING) 

    }
    
}

if(location === 'NK'){  //declared location as 'NK'
    currency = null  //declared shipping as 'null'
    console.log(BANNED_WARNING)
}

    

console.log('price', currency, shoes + batteries + pens + shirts + shipping)


