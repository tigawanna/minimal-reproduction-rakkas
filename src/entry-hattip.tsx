import { createRequestHandler } from "rakkasjs/server";
import { cookie } from "@hattip/cookie";



export default createRequestHandler({
  middleware: {
    beforePages: [],
    beforeApiRoutes: [],
    beforeNotFound: [],
    beforeAll: [cookie()],
  },

  createPageHooks(requestContext) {
    return {
      emitBeforeSsrChunk() {
        return ``;
      },

      emitToDocumentHead() {
        const cookie_theme = "light";

        return `
    <link rel="icon" type="image/svg+xml" href="/site.svg" />
    <script>
      (function() {
        document.documentElement.setAttribute("data-theme","${cookie_theme}");
      })();
     </script>
   
  `;
      },


      wrapApp(app) {
        return app;
      },
    };
  },
});
