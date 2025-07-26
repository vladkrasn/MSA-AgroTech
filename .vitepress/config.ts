import { defineConfig } from "vitepress";
import { configureDiagramsPlugin } from "vitepress-plugin-diagrams";

export default defineConfig({
  markdown: {
    config: (md) => {
      configureDiagramsPlugin(md, {
        diagramsDir: "./diagrams"
      });
    },
  },
  themeConfig: {
		sidebar: [
			{
				text: "Tasks",
				base: "/tasks",
				items: [
          {
						text: "Task1",
						base: "/Task1",
            items: [
              {
                text: "Solution 1",
                base: "/Task1/Solution1",
                items: [
                  { text: "ADR", link: "/adr" },
                  { text: "C1 Diagram", link: "/c1" },
                ]
              },
              {
                text: "Solution 2",
                base: "/Task1/Solution2",
                items: [
                  { text: "ADR", link: "/adr" },
                  { text: "C1 Diagram", link: "/c1" },
                ]
              },
            ]
					},
          {
						text: "Task2",
						base: "/Task2",
            items: [
              {
                text: "Solution 1",
                base: "/Task2/Solution1",
                items: [
                  { text: "ADR", link: "/adr" },
                  { text: "C2 Diagram", link: "/c2" },
                ]
              },
              {
                text: "Solution 2",
                base: "/Task2/Solution2",
                items: [
                  { text: "ADR", link: "/adr" },
                  { text: "C2 Diagram", link: "/c2" },
                ]
              },
            ]
					},
          {
						text: "Task3",
						base: "/Task3",
            items: [
              {
                text: "Solution 1",
                base: "/Task3/Solution1",
                items: [
                  { text: "C3 Diagram", link: "/c3" },
                  { text: "C4 Diagram", link: "/c4" },
                ]
              },
              {
                text: "Solution 2",
                base: "/Task3/Solution2",
                items: [
                  { text: "C3 Diagram", link: "/c3" },
                  { text: "C4 Diagram", link: "/c4" },
                ]
              },
            ]
					},
          {
						text: "Task4",
						base: "/Task4",
            items: [
              { text: "Final ADR", link: "/adr" },
            ]
					},
				],
			},
		],
	},
  vite: {
    publicDir: '.vitepress/diagrams', // So it's served from /diagrams
  },
});
