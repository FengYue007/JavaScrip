$(document).ready(function() {
  let timer;
  let cnt = 0;
  $('button').click(function() {
      if (timer) {
        clearInterval(timer)
        time = null;
      } else {
        timer = setInterval(function() {
          cnt += 1;
          $('#seconds').text(cnt)
        }, 1000)
      }
    // $('#seconds').text('hello')
  })
})