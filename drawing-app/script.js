const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

//init
let size = 20
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  // x and y positioning
  x = e.offsetX
  y = e.offsetY
  
  drawCircle()
})

// Cleanup event
canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  // x and y positioning
  x = undefined
  y = undefined
  
  drawCircle()
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

// Path function
function drawCircle(x, y) {
  context.beginPath()
  context.arc(x, y, size, 0, Math.PI * 2, true)
  context.fillStyle = color
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.strokeStyle = color
  context.lineWidth = size * 2
  context.stroke()
}