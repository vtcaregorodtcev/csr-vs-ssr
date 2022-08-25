export const hydrate = (component: Record<string, any>) => {
  if (!component || typeof component === "string") {
    return;
  } else if (Array.isArray(component)) {
    component.map((comp) => hydrate(comp));
  } else {
    const tags = Object.keys(component);

    tags.forEach((tag) => {
      const { children, ...props } = component[tag];

      const propNames = Object.keys(props);
      propNames.forEach((name) => {
        if (typeof props[name] === "function") {
          const element = document.querySelector("#" + props.id);
          element?.addEventListener(name, props[name]);
        }
      });

      hydrate(children);
    });
  }
};
