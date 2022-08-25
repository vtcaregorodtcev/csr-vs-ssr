export const render = (
  component: Record<string, any>,
  node: Node | null,
  getDocument = () => document
) => {
  const document = getDocument();

  if (!component) {
    return;
  } else if (typeof component === "string") {
    const text = document.createTextNode(component);
    node!.appendChild(text);
  } else if (Array.isArray(component)) {
    component.map((comp) => render(comp, node, getDocument));
  } else {
    const tags = Object.keys(component);

    tags.forEach((tag) => {
      const { children, ...props } = component[tag];
      const element = document.createElement(tag);

      const propNames = Object.keys(props);
      propNames.forEach((name) => {
        if (typeof props[name] === "function") {
          if (typeof window !== "undefined") {
            element.addEventListener(name, props[name]);
          }
        } else {
          element.setAttribute(name, props[name]);
        }
      });

      render(children, element, getDocument);

      node!.appendChild(element);
    });
  }
};
