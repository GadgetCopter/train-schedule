var trainName
var destination
var frequency
var firstTrain
var firstTrainMoment
var timeCurrent
var differenceTime
var remainder
var minutesRemaining
var nextTrain
var nextTrainMoment


    var config = {
    apiKey: "AIzaSyBb7sC9EofrhWXrlmZ1PYTeZsgpD6PXEF8",
    authDomain: "train-preject.firebaseapp.com",
    databaseURL: "https://train-preject.firebaseio.com",
    projectId: "train-preject",
    storageBucket: "train-preject.appspot.com",
    messagingSenderId: "384309758613"
}

firebase.initializeApp(config);

var database = firebase.database()

$("#add-train").on("click", function(event){
    
    event.preventDefault();
    trainName = $("#name-input").val().trim()
    destination = $("#destination-input").val().trim()
    frequency = $("#frequency-input").val().trim()
    firstTrain = $("#first-train-input").val().trim()
    

    // Moment JS that handles the converting and keeping track of train timing.
    firstTrainMoment = moment(firstTrain, "hh:mm")
    timeCurrent = moment()
    differenceTime = timeCurrent.diff(moment(firstTrainMoment), "minutes")
    remainder = differenceTime % frequency;
    minutesRemaining = frequency - tRemainder
    nextTrain = moment().add(minutesRemaining, "minutes")
    nextTrainMoment = moment(nextTrain).format("hh:mm")

    database.ref().push({
        name: trainName,
        destination: destination,
        frequency: frequency,
        nextTrain: nextTrainMoment,
        minutesRemaining: minutesRemaining

    })

})

database.ref().on("child_added", function(snapshot){
    $("#tbody").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + snapshot.val().nextTrain + "</td><td>" + snapshot.val().minutesRemaining + "</td></tr>")
})