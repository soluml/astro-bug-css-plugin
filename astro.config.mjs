import { defineConfig } from "astro/config";

function examplePlugin() {
  const fileRegex = /(\.example.s?css)$/;

  return {
    name: "example-plugin",
    transform: async function (code, id) {
      if (fileRegex.test(id)) {
        return {
          code: "I am a replaced style sheet!",
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [examplePlugin()],
  },
});
