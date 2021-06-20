/* eslint-disable*/
webgazer
  .setGazeListener(function (data, elapsedTime) {
    console.log(data, elapsedTime); //elapsed time is based on time since begin was called
  })
  .begin();
