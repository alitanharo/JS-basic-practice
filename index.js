//1.Sum 3 Numbers
const ar = [1, 2, 3, 4, 5]
const sum = (arr) => {
    const add = arr.reduce((v, total) => {
        return total + v;
    }, 0)
    return add
}

console.log(sum(ar));

////////////////////////////////////////
//2.Sum And VAT
const newArr = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']
function svt(ar) {
    const arr = ar.map(c => +c)
    const sum = arr.reduce((v, total) => {
        return total + v;
    }, 0)

    const vat = sum * 0.2
    const total = vat + sum

    console.log(` sum=${sum} \n vat=${vat}\n total=${total} `);
}
svt(newArr)
/////////////////////////////////////////////////////////////////////
//3.Letter Occurrences In String

const sArray = ['hello', 'l']
const reapet = (ar) => {
    let arr = ar[0];
    let l = ar[1]
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == l) {
            count++
        }
    }
    return count
}
console.log(reapet(sArray))

/////////////////////////////////////////////////////////////
//4.Filter By Age
const input = ['12', 'John', '15', 'Alfred', '9']

function minAge(arr) {
    const ageLimit = Number(arr[0])
    const person1 = { name: arr[1], age: Number(arr[2]) }
    const person2 = { name: arr[3], age: Number(arr[4]) }

    person1.age > ageLimit ? console.log(person1) : console.log(person2);;


}
minAge(input)
//////////////////////////////////////////////////////
// 5.String Of Numbers 1...N
const input2 = ['11']
const str = (arr) => {
    const num = Number(arr[0]);
    
    var newstr = "";
    for (let i = 1; i <= num; i++) {

        newstr +=i
    }
    const st = newstr.toString()
return console.log(st);

}

str(input2);
////////////////////////////////////////////////////
//6.Figure Area

const input3 = ['2', '4', '5', '3'];
const area=(ar)=>{
const w=ar[0]
const h=ar[1]
const W=ar[2]
const H= ar[3]
    
    return (H * W) + ((h - H) * w)


}
console.log(area(input3));
///////////////////////////////////////////////
//7.Next Day
const input4 = ['2016', '9', '30']
const nextDay=(arr)=>{
    const d = new Date()
    const year = d.setFullYear(Number(arr[0]))     
    const month = d.setMonth(Number(arr[1]))    
    const day = d.setDate(Number(arr[2]) + 1) 


    return d.toJSON()
}
console.log(nextDay(input4));