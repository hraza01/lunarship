'use client'

const request = {
  action: 'auth',
  key: process.env.NEXT_PUBLIC_ALPACA_API_KEY,
  secret: process.env.NEXT_PUBLIC_ALPACA_API_SECRET,
}

function alpacaConnect(socket) {
  socket.onerror = function () {
    throw Error('Websocket connection error')
  }

  socket.onopen = function () {
    // Send handshake data
    socket.send(JSON.stringify(request))
  }
}

export default alpacaConnect
