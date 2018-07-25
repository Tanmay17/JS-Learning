let myToDos = {
  totalMeeting : 0,
  meetingDone : 0,
  addMeetings : function(num){
    this.totalMeeting = this.totalMeeting + num
  },
  updateMeetings : function(num){
    this.meetingDone = this.meetingDone + num
  },
  summaryOfDay : function(){
    console.log(`You have attended ${this.meetingDone} meetings, ${this.totalMeeting-this.meetingDone} is still left` );
  },
  resetTodos : function(){
    this.totalMeeting = 0
    this.meetingDone = 0
    console.log(myToDos);
  }
}
myToDos.addMeetings(11)
myToDos.updateMeetings(10)
myToDos.summaryOfDay()
myToDos.resetTodos()
