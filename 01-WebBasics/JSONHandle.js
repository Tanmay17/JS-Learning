const student = {
    name: 'Tanmay',
    ug: false,
    rollNo: 1501051072
}

//Convert into JSON into String
const jsonToStr = JSON.stringify(student)
console.log(typeof jsonToStr);

//Convert into String to JSON
const strToJson = JSON.parse(jsonToStr)
console.log(typeof strToJson)