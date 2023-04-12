// const leoName = 'Leo'
// const leoSurname = 'Musvaire     '
// const leoBalance = '-9394'

// const sarahName = 'Sarah    '
// const sarahSurname = 'Kleinhans'
// const sarahBalance = '-4582.21000111'

// const divider = '----------------------------------'

// // Only change below this line

// const owed = parseFloat(`${(-1*leoBalance) + (-1*sarahBalance)}`)
// const leo =   (`${leoName} ${leoSurname.trim()} (Owed R: ${(-1*leoBalance).toFixed(2)})`)
// const sarah = (`${sarahName.trim()} ${sarahSurname} (Owed R: ${(-1*sarahBalance).toFixed(2)})`)
// const total = (`Total amount owed: R${(owed).toFixed(2)}`)
// const result = (`${leo} \n ${sarah} \n \n ${divider} \n ${(total)} \n ${divider}`)

// console.log(result)


// RECOMMENDED SOLUTION
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'
const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'
const divider = '----------------------------------'
// Only change below this line
const leoOwed = parseFloat(leoBalance) * -1
const sarahOwed = parseFloat(sarahBalance) * -1
const totalOwed = leoOwed + sarahOwed
const thousands = totalOwed / 1000
const hundreds = totalOwed % 1000
const leo =
	`${leoName} ${leoSurname .trim()} (Owed: R ${leoOwed.toFixed(2)})`
const sarah =
	`${sarahName.trim()} ${sarahSurname .trim()} (Owed: R ${sarahOwed.toFixed(2)})`
const total = `  Total amount owed: R ${thousands.toFixed(0)} ${hundreds.toFixed(2)}`
const result = `
${leo}
${sarah}
${divider}
${total}
${divider}
`
console.log(result)
