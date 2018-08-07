// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let color = document.getElementById('colorPicker').value;

function makeGrid(e) {
  let gHeight = document.getElementById('inputHeight').value;
  console.log(gHeight);
  let gWidth = document.getElementById('inputWidth').value;
  console.log(gWidth);
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = '';
  for (let i=0; i<gHeight; i++) {
    let node = document.createElement('tr');
    table.appendChild(node);
  }
  let rows = document.querySelectorAll('table > tr');
  for (row of rows) {
    for (let i=0; i<gWidth; i++) {
      let node = document.createElement('td');
      row.appendChild(node);
    }
  }
}

function colorChange(e) {
  color = document.getElementById('colorPicker').value;
  console.log(color);
};

function paintCell(e) {
  if (e.target.nodeName === 'TD') {
    if (e.target.getAttribute('class') == 'filled') {
      e.target.setAttribute('class', '');
      e.target.style.backgroundColor='transparent';
    }
    else {
      e.target.setAttribute('class', 'filled');
      e.target.style.backgroundColor=color;
    }
  }
}

document.getElementById('inputSubmit').addEventListener('click', makeGrid, false);
document.getElementById('colorPicker').addEventListener('change', colorChange, false);
document.getElementById('pixelCanvas').addEventListener('click', paintCell, false);
