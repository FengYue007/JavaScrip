window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('create-element').addEventListener('click', function() {
    const timeDiv = document.createElement('div');

    // debugger
    timeDiv.classList.add('time')
    timeDiv.textContent = (new Date()).toString()
    document.querySelector('.right').appendChild(timeDiv)
  })

  document.getElementById('reset-inner-html').addEventListener('click', function() 
  {
    document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
  })
})

