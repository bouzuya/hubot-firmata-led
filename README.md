# hubot-firmata-led

A Hubot script that set the LED by firmata protocol

## Installation

    $ npm install git://github.com/bouzuya/hubot-firmata-led.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-firmata-led.git#TAG'

## Example

    bouzuya> hubot help firmata-led
      hubot> hubot firmata-led <on|off> - set the LED by firmata protocol

    bouzuya> hubot firmata-led on

## Configuration

See [`src/scripts/firmata-led.coffee`](src/scripts/firmata-led.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-firmata-led
[travis-badge]: https://travis-ci.org/bouzuya/hubot-firmata-led.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-firmata-led
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-firmata-led.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-firmata-led
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-firmata-led.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
