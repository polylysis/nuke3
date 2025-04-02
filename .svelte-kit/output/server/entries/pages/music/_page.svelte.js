import { e as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let currentTrack = 0;
  let tracks = [
    {
      name: "01 - backroom labyrinth",
      src: "/audio/backroom_labyrinth.ogg"
    },
    {
      name: "02 - korobeiniki",
      src: "/audio/korobeiniki.ogg"
    },
    {
      name: "03 - watasi wa ame",
      src: "/audio/watasi_wa_ame.ogg"
    },
    {
      name: "04 - lhs rld installer #10",
      src: "/audio/lhs_rld_installer_10.ogg"
    }
  ];
  let progress = 0;
  let currentTime = 0;
  let duration = 0;
  function formatTime(time) {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${("0" + seconds).slice(-2)}`;
  }
  const each_array = ensure_array_like(tracks);
  $$payload.out += `<head><title>nuke3 - music</title></head> <main class="container"><h1>nuke3 music</h1> <h2>playlist</h2> <ul><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let track = each_array[index];
    $$payload.out += `<li><a>${escape_html(track.name)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <p>these songs belong to their respective artists and this is (hopefully) not violating tos as it is merely a playlist.</p> <h2>now playing</h2> <p>${escape_html(tracks[currentTrack].name)}</p> <p>${escape_html(formatTime(currentTime))}/${escape_html(formatTime(duration))}</p> <input type="range" min="0" max="100"${attr("value", progress)}> <button>${escape_html("Play")}</button> <button class="secondary">Discrete Pause</button></main>`;
  pop();
}
export {
  _page as default
};
