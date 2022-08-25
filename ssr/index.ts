export const index = (content: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR Example</title>
  </head>
  <body>
    ${content}
    <script src="javascript.js"></script>
    <script type="module" src="ssr/client.js" async="async"></script>
  </body>
</html>
`;
