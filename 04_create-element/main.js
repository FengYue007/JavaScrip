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
    // const input = prompt()
    // document.querySelector('.right').innerHTML = (
    //   '<div class="title">' + input + 'DOM practice...</div>'
    //   )
    document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
  })

  document.getElementById('remove').addEventListener('click', function() {
    const lastTimeDiv = document.querySelector('.time:last-child')
    if (lastTimeDiv) {
      lastTimeDiv.remove()
    }
  })

  document.getElementById('create-element-insert-adjacent').addEventListener('click', function() {
    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.textContent = (new Date()).toString();

    document.querySelector('.title').insertAdjacentElement('afterend', timeDiv);
})

