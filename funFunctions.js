//Store and Get items from localStorage. Call getItem("your object", "Name in Storage") in init() to prevent errors
function storeItem(item, storeName) {
    //Json stringify item and store to localStorage
    localStorage.setItem(storeName, JSON.stringify(item));
  }

  function getItem(item, storeName) {
    //Check if there is a stored already. 
    item = JSON.parse(localStorage.getItem("storeName"));
    if (!item) {//if not, initialize Globally
        item = [];
    }
  }

  //Set a timer to countdown from time, in seconds, and do something at the end. Display time in the element passed as timerEL
  function countdown(startTime,timerEl) {
    var timeLeft = startTime;
      timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        //Put the function you want to run on timer end here
      }
    }, 1000);
  }

//Build and object variable for settings or properties you want to save to local storage. Use this with getItem and storeItem
function projectObj(prop1, prop2, prop3, prop4,) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
    this.prop4 = prop4;
  }

