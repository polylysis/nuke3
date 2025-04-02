import { e as ensure_array_like, c as pop, p as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let tasks = [];
  let newTask = "";
  const each_array = ensure_array_like(tasks);
  $$payload.out += `<head><title>nuke3 - todo</title></head> <main class="container"><h1>nuke3 todo</h1> <h2>about</h2> <p>small todo list app</p> <h2>todo list</h2> <ul><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let task = each_array[index];
    $$payload.out += `<li>${escape_html(task)}</li>`;
  }
  $$payload.out += `<!--]--></ul> <input type="text" name="text" placeholder="add a task here" aria-label="Text"${attr("value", newTask)}> <button>add</button> <button class="secondary">rem</button></main>`;
  pop();
}
export {
  _page as default
};
