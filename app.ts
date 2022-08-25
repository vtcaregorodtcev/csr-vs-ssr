export const app = {
  header: {
    style: "font-size: 20px",
    children: "This is the header for",
    "data-interpolation": "This is the header for {name}",
  },
  main: {
    children: [
      {
        button: {
          id: "button-count",
          children: "count button",
          style: "margin-top: 10px",
          click: function () {
            const p = document.querySelector("p.count");

            if (p) {
              const count = +(p?.innerHTML || 0);
              p.innerHTML = String(count + 1);
            }
          },
        },
      },
      {
        p: {
          children: "0",
          class: "count",
        },
      },
      {
        input: {
          id: "input-for-header",
          placeholder: "change me",
          style: "margin-top: 10px",
          input: function (e: any) {
            const header = document.querySelector("header");

            if (header) {
              header.innerHTML = String(
                header
                  .getAttribute("data-interpolation")!
                  .replace("{name}", e.target.value)
              );
            }
          },
        },
      },
      { br: {} },
      {
        img: {
          style: "margin-top: 10px",
          width: "200px",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnomL7vSfL1jOquBAsdQj2fhwyoRISheqY0erGyQo9Q&s",
        },
      },
      {
        div: {
          style: "display: flex",
          children: new Array(5).fill(0).map((_) => ({
            ul: {
              children: new Array(1000).fill(0).map((_, idx) => ({
                li: { children: `this is item ${idx} from big list` },
              })),
            },
          })),
        },
      },
    ],
  },
};
