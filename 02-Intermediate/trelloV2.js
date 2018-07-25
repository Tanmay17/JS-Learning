let myToDos = {
  totalMeeting : 0,
  meetingDone : 0,
}

let addMeetings = function(todo,meet = 0){
    todo.totalMeeting = todo.totalMeeting + meet
}

let updateMeets = function(todo,meetsDone) {
  todo.meetingDone = todo.meetingDone + meetsDone
}

let summaryOfDay = function(todo){
  console.log(`You have attended ${todo.meetingDone} meetings, ${todo.totalMeeting-todo.meetingDone} is still left `);
}

addMeetings(myToDos,11)
updateMeets(myToDos,10)
summaryOfDay(myToDos)
