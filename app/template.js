export default html => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>test app</title>
        <link href="./static/main.css" rel="stylesheet" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="./static/index.js"></script>
    </body>
    </html>
`;
