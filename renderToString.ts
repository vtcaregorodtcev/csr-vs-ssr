import { JSDOM } from "jsdom";
import { render } from "./render";

export const renderToString = (component: Record<string, any>) => {
  const dom = new JSDOM(`<div id="ssr-root"></div>`);

  const { document } = dom.window;

  render(component, document.querySelector("#ssr-root"), () => document);

  return dom
    .serialize()
    .replace("<html><head></head><body>", "")
    .replace("</body></html>", "");
};
