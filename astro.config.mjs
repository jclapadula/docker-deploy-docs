import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.dockerdeploy.cloud",

  integrations: [
    starlight({
      title: "🚀 Docker Deploy - Docs",
      social: {
        email: "mailto:support@dockerdeploy.cloud",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          // <script defer data-domain="dockerdeploy.cloud" src="https://plausible.juanlapadula.eu/js/script.outbound-links.js"
          // ></script>
          tag: "script",
          attrs: {
            defer: true,
            src: "https://plausible.juanlapadula.eu/js/script.outbound-links.js",
            "data-domain": "dockerdeploy.cloud",
          },
        },
      ],
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Quickstart",
          items: [
            { label: "Deploy from Dockerfile", link: "/dockerfile-to-compose" },
          ],
        },
        {
          label: "How to Deploy",
          //   autogenerate: { directory: "reference" },
          items: [
            { label: "Private images", link: "/deploying-private-images" },
            {
              label: "Private images - Local",
              link: "/deploying-private-images-local",
            },
            {
              label: "Private images - Github",
              link: "/deploying-private-images-github",
            },
            {
              label: "Public images",
              link: "/deploy-public-images",
            },
          ],
        },
        {
          label: "Limitations",
          link: "limitations",
        },
      ],
    }),
  ],
});
