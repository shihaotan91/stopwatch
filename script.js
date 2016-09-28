
function stopWatch() {
  var time = document.getElementById('time')

  var reset = document.getElementById('reset')
  var start = document.getElementById('start')
  var pause = document.getElementById('pause')

  var count = 0

  start.addEventListener('click', timer)
  reset.addEventListener('click', resetCount)
  pause.addEventListener('click', pauseCount)

  var timer = setInterval(function()
  {startCount()}, 1000);

  function startCount() {
    time.textContent = count++
    // window.setInterval(startCount, 1000)
  }

  function resetCount() {
    count = 0
  }

  function pauseCount() {
    window.clearInterval(timer);
  }
}

stopWatch();

//   var count = 0
//
//   start.addEventListener('click', timer)
//   reset.addEventListener('click', resetCount)
//   pause.addEventListener('click', pauseCount)
//
// var timer = setInterval(function()
// {startCount()}, 1000);

// var timer = setInterval(startCount, 1000);

// function startCount() {
//     time.textContent = count++
// }
// function resetCount() {
// count = 0
// }
//
// function pauseCount() {
//     clearInterval(timer);
// }
  //
  // function startCount() {
  //   time.textContent = count++
  //   window.setInterval(startCount, 1000)
  //   }

    // window.setInterval(startCount, 1000)

  // function resetCount() {
  //   count = 0
  // }
  //
  // function pauseCount() {
  //   window.clearInterval(startCount)
  // }

// window.setInterval(startCount, 1000)
// window.clearInterval(startCount)
// }

// stopWatch();
//
// var time = document.getElementById('time')
//
// function startCount() {
//   time.innerHTML = "sakjdaskdjas"
//   }
//
//   startCount();
