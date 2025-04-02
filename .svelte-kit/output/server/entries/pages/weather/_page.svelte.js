import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
import { c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const _0x589d25 = _0x1169;
  (function(_0x26d98b, _0x217b3e) {
    const _0x2e9b18 = _0x1169, _0x17fda3 = _0x26d98b();
    while (!![]) {
      try {
        const _0x540254 = -parseInt(_0x2e9b18(423)) / 1 * (-parseInt(_0x2e9b18(426)) / 2) + -parseInt(_0x2e9b18(439)) / 3 * (parseInt(_0x2e9b18(424)) / 4) + parseInt(_0x2e9b18(430)) / 5 + parseInt(_0x2e9b18(435)) / 6 + parseInt(_0x2e9b18(421)) / 7 + parseInt(_0x2e9b18(422)) / 8 + parseInt(_0x2e9b18(434)) / 9 * (-parseInt(_0x2e9b18(428)) / 10);
        if (_0x540254 === _0x217b3e) break;
        else _0x17fda3["push"](_0x17fda3["shift"]());
      } catch (_0x35992b) {
        _0x17fda3["push"](_0x17fda3["shift"]());
      }
    }
  })(_0x1211, 659057);
  function _0x1169(_0x124e1f, _0x41ab4f) {
    const _0x121148 = _0x1211();
    return _0x1169 = function(_0x11693d, _0x5cb5cb) {
      _0x11693d = _0x11693d - 418;
      let _0x106a04 = _0x121148[_0x11693d];
      return _0x106a04;
    }, _0x1169(_0x124e1f, _0x41ab4f);
  }
  function _0x1211() {
    const _0x26d758 = [
      "ae68722967274c3b31240dcccdcf4c27",
      "18PpjqCN",
      "6616152eilEsM",
      "rain",
      "temp",
      "N/A",
      "3555525XpDony",
      "main",
      "error fetching data",
      "json",
      "3253642ALTQjJ",
      "7469408psUUUx",
      "1GUqrgC",
      "4dIscvr",
      "&units=metric",
      "1464228DYhPRe",
      "description",
      "10207570RNKEiH",
      "loading...",
      "3262290QvadKG",
      "weather",
      "humidity"
    ];
    _0x1211 = function() {
      return _0x26d758;
    };
    return _0x1211();
  }
  let weather = "loading...", temp = _0x589d25(429), humidity = _0x589d25(429), pressure = _0x589d25(429), windSpeed = "loading...", rainfall = _0x589d25(429), description = _0x589d25(429);
  _0x589d25(433);
  $$payload.out += `<head><title>nuke3 - weather</title></head> <main class="container"><h1>nuke3 weather</h1> <h2>about</h2> <p>displays detailed weather information for Singapore</p> <h2>weather</h2> <table><thead><tr><th>property</th><th>value</th></tr></thead><tbody><tr><td><strong>weather</strong></td><td>${escape_html(weather)}</td></tr><tr><td><strong>description</strong></td><td>${escape_html(description)}</td></tr><tr><td><strong>temperature</strong></td><td>${escape_html(temp)}°C</td></tr><tr><td><strong>humidity</strong></td><td>${escape_html(humidity)}%</td></tr><tr><td><strong>pressure</strong></td><td>${escape_html(pressure)} hPa</td></tr><tr><td><strong>wind speed</strong></td><td>${escape_html(windSpeed)} m/s</td></tr><tr><td><strong>rainfall (last 1 hour)</strong></td><td>${escape_html(rainfall)} mm</td></tr></tbody></table></main>`;
  pop();
}
export {
  _page as default
};
