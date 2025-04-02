import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
function _page($$payload) {
  let complainText = "";
  $$payload.out += `<head><title>nuke3 - complain</title></head> <main class="container"><h1>nuke3 complain</h1> <h2>about</h2> <p>send your complaints about this app, about life, or both into the complain hole where someone or something will read your stuff... never.</p> <h2>complain here</h2> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <textarea name="complain" placeholder="No one really cares actually" aria-label="complain">`;
  const $$body = escape_html(complainText);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <button>Send</button></main>`;
}
export {
  _page as default
};
