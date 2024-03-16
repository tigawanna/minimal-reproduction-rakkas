import { createRequestHandler } from "rakkasjs/server";
import { cookie } from "@hattip/cookie";

export default createRequestHandler({
  middleware: {
    beforePages: [cookie()],
    beforeApiRoutes: [],
    beforeNotFound: [],
    beforeAll: [cookie()],
  },

  createPageHooks() {
    return {
      emitBeforeSsrChunk() {
        return ``;
      },

      emitServerOnlyHeadElements() {
        return [
          {
            tagName: "link",
            rel: "icon",
            type: "image/svg+xml",
            href: "/site.svg",
          },
        ];
      },

      // Alternative to cookies would be read from localStorage or use matchMedia to detect dark
      // mode and store it. It won't send the info to the server, but it will still be
      // flicker-free.

      // emitToSyncHeadScript() {
      //   return `document.documentElement.setAttribute("data-theme",detectInitialSomehow());`;
      // },

      // Yet another alternative would be to read from matchMedia, set the cookie, and reload. But
      // doing so might cause infinite refresh loops if cookies are disabled.

      wrapApp(app) {
        return app;
      },
    };
  },
});
