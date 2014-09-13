// Description
//   A Hubot script that set the LED by firmata protocol
//
// Dependencies:
//   "firmata": "^0.3.3"
//
// Configuration:
//   HUBOT_FIRMATA_LED_PORT
//   HUBOT_FIRMATA_LED_PIN
//
// Commands:
//   hubot firmata-led <on|off> - set the LED by firmata protocol
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var PIN, PORT, board, firmata, ready, _ref, _ref1;
  firmata = require('firmata');
  PORT = (_ref = process.env.HUBOT_FIRMATA_LED_PORT) != null ? _ref : '/dev/ttyACM0';
  PIN = parseInt((_ref1 = process.env.HUBOT_FIRMATA_LED_PIN) != null ? _ref1 : '13', 10);
  ready = false;
  board = new firmata.Board(PORT, function(err) {
    var f;
    if (err != null) {
      return robot.logger.error(err);
    }
    f = board.firmware;
    robot.logger.info("firmata-led: connected " + f.name + "-" + f.version.major + "." + f.version.minor);
    board.pinMode(PIN, board.MODES.OUTPUT);
    return ready = true;
  });
  return robot.respond(/firmata-led\s+(on|off)\s*$/i, function(res) {
    var ledOn;
    if (!ready) {
      return res.send('does not ready yet');
    }
    ledOn = res.match[1] === 'on';
    return board.digitalWrite(PIN, ledOn ? board.HIGH : board.LOW);
  });
};
