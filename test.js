{
  const progress = document.querySelector('.progress')
  const out = document.querySelector('.debug .out')
  const out2 = document.querySelector('.debug .out2')
  out.textContent = 'test.js'

  const startSpamBtn = document.querySelector('#startSpam')
  const stopSpamBtn = document.querySelector('#stopSpam')
  const showAllBtn = document.querySelector('#showAll')

  let spamer = new Spamer()

  startSpamBtn.onclick = () => {
    spamer.stop()
    const eventsPerSec = +document.querySelector('#perSec').value
    spamer.start(eventsPerSec)
    progress.classList.add('animating')
    stopSpamBtn.focus()
  }
  stopSpamBtn.onclick = () => {
    spamer.stop()
    progress.classList.remove('animating')
    startSpamBtn.focus()
  }

  showAllBtn.onclick = () => {
    console.log(allEvents);
  }


  let timeCapsule = []
  let collectingStartAt = 0
  let filteredEvents = []
  let allEvents = []

  spamer.on(spamHandler)

  function spamHandler(obj) {
    timeCapsule.push(obj)
    allEvents.push(obj)
    out2.textContent = `Всего эвентов: ${allEvents.length}`

    if (collectingStartAt === 0) {
      collectingStartAt = Date.now()
    }

    if ((Date.now() - collectingStartAt) >= 1000) {
      collectingStartAt = Date.now()
      logick()
      timeCapsule = []
    }
  }

  function logick() {
    let agents = ['7841', '1547', '8456', '8411', '7100', '7200', '8777', '7400', '7325', '7445', '6548']
    let rndAgent = rndArrItem(agents) 

    out.textContent = `Длина timeCapsule: ${timeCapsule.length}`

    timeCapsule = timeCapsule.filter((item) => {
      return item.agent === rndAgent
    })

    filteredEvents.push(...timeCapsule)
    console.log(filteredEvents);
  }
}