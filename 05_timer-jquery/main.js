$(document).ready(function() {
  $('button').click(function() {
    let cnt = 0
    setInterval(function() {
      cnt += 1
      $('#seconds').text(cnt)
    }, 1000)
    // $('#seconds').text('hello')

  })
})