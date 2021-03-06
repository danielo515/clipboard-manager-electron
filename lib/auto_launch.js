const db = require('../lib/db')
const AutoLaunch = require('auto-launch')
const clipboardManagerElectron = new AutoLaunch({
  name: title,
  isHidden: true
})

function toggle () {
  clipboardManagerElectron
    .isEnabled()
    .then((isEnabled) => {
      db.set('autoLaunch', !isEnabled)
        .write()

      if (isEnabled) {
        clipboardManagerElectron.disable()
      } else {
        clipboardManagerElectron.enable()
      }
    })
    .catch(() => {})
}

function isEnabled (callback) {
  return db.get('autoLaunch')
    .value()
}

module.exports = { toggle, isEnabled }
