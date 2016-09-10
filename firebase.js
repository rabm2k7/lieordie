

// <script src="https://www.gstatic.com/firebasejs/3.3.2/firebase.js"></script>




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_OYkwKvZWYwi-mYKWnEKY4EWfMPhkAms",
    authDomain: "lieordie-20dc5.firebaseapp.com",
    databaseURL: "https://lieordie-20dc5.firebaseio.com",
    storageBucket: "lieordie-20dc5.appspot.com",
  };
  firebase.initializeApp(config);

  function like(){

  	console.log("liked clicked");

	   firebase.database().ref('videos/trump/like').push({
	   		value:1
	  });
	}

	function disLike(){
	firebase.database().ref('videos/trump/disLike').push({
	   		value:1
	    
	  })
}

///Retreive a lie

var lieCountRef = firebase.database().ref('videos/trump/lie');

lieCountRef.on('child_added', function(item) {
  //updateYourUIWithSomeCoolCode(); //use .val() to get the actual value from the snapshot if that has any relevant value item.val()
});

