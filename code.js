function countdownTimer() {
    console.log("sounter timer working");
    var currTime = 50;
    document.getElementById("CountdownStatus").innerHTML = currTime;
    currTime = currTime - 5;

    //Timer for 45
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //Timer for 40
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 1000);

    //Timmer for 35
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    //Timmer for 30
     setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

        //Timer for 25
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);
    
    //Timer for 20
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    //Timer for 15
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    //Timer for 10
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    //Timer for 5
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);
    
    //Blastoff
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("CountdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 50000);

}