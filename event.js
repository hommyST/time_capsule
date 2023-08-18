{
  const out = document.querySelector('.event .out')
  out.textContent = 'event.js'
}
function hLog(arg, type = 'blue') {
  const types = {
    green: 'background-color: green;',
    orange: 'background-color: orangered;',
    red: 'background-color: red;',
    blue: 'background-color: #0d47a1;',
  }

  console.log('%c' + arg, types[type] + 'font-size: 1.5rem; padding: 0.8rem 1.2rem;')
}

class Spamer {
  constructor() {
    this.interval = null
    this.listeners = []
  }

  start(spamPerSec) {
    let callCount = 0

    let events = ['AgentState', 'DeleteAgent', 'SubscribeAgent']
    let statuses = ['ring', 'free', 'talk', 'pause']
    let agents = ['7841', '1547', '8456', '8411', '7100', '7200', '8777', '7400', '7325', '7445', '6548']

    hLog('interval: ' + (1000 / spamPerSec).toFixed(2) + 'ms');
    
    this.interval = setInterval(() => {
      callCount++
      let spamObject = {}
      spamObject.event = rndArrItem(events)
      spamObject.startedAt = Date.now()
      spamObject.status = rndArrItem(statuses)
      spamObject.agent = rndArrItem(agents)

      
      this.listeners.forEach(func => {
        func(spamObject)
      })

      const out = document.querySelector('.event .out')
      out.textContent = `Эвентов отослано: ${callCount}`
    }, 1000 / spamPerSec)
  }

  stop() {
    clearInterval(this.interval)
  }

  on(func) {
    if (this.listeners.includes(func)) return
    this.listeners.push(func)
  }

  off(func) {
    let index = this.listeners.indexOf(func)
    if (index === -1) return
    this.listeners.splice(index, 1)
  }

  offAll() {
    this.listeners = []
  }

}