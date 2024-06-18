import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeExternalLinks from "rehype-external-links";

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
            { label: "The CLI", link: "/quickstart/cli" },
            { label: "Deploy from Dockerfile", link: "/dockerfile-to-compose" },
          ],
        },
        {
          label: "How to Deploy",
          //   autogenerate: { directory: "reference" },
          items: [
            { label: "Your app", link: "/deploying-private-images" },
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
        {
          label: "Framework Guides",
          items: [
            {
              label: "Deploy a Next.js app",
              link: "/framework-guides/next-js",
            },
            {
              label: "Deploy an Astro app",
              link: "/framework-guides/astro",
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
});
