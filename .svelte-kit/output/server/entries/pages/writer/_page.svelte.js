import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
import { c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let content = "";
  $$payload.out += `<head><title>nuke3 - writer</title></head> <main class="container"><h1>nuke3 writer</h1> <h2>about</h2> <p>Write your stuff and save it as a .txt file. No fucking autosaves, its literally just a notepad.</p> <h2>Writer</h2> <textarea name="writer" placeholder="Write your shit here" aria-label="writer">`;
  const $$body = escape_html(content);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <button>export</button></main>`;
  pop();
}
export {
  _page as default
};
