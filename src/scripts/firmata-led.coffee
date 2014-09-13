# Description
#   A Hubot script that set the LED by firmata protocol
#
# Dependencies:
#   "firmata": "^0.3.3"
#
# Configuration:
#   HUBOT_FIRMATA_LED_PORT
#   HUBOT_FIRMATA_LED_PIN
#
# Commands:
#   hubot firmata-led <on|off> - set the LED by firmata protocol
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  firmata = require 'firmata'

  PORT = process.env.HUBOT_FIRMATA_LED_PORT ? '/dev/ttyACM0'
  PIN = parseInt (process.env.HUBOT_FIRMATA_LED_PIN ? '13'), 10

  ready = false

  board = new firmata.Board PORT, (err) ->
    return robot.logger.error(err) if err?
    f = board.firmware
    robot.logger.info """
    firmata-led: connected #{f.name}-#{f.version.major}.#{f.version.minor}
    """
    board.pinMode PIN, board.MODES.OUTPUT
    ready = true

  robot.respond /firmata-led\s+(on|off)\s*$/i, (res) ->
    return res.send('does not ready yet') unless ready

    ledOn = res.match[1] is 'on'
    board.digitalWrite PIN, if ledOn then board.HIGH else board.LOW
