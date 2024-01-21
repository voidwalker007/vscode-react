export const data = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
      {
        id: 2,
        name: "Public",
        isFolder: true,
        items: [
          {
            id: 5,
            name: "src",
            isFolder: true,
            items: [
              {
                id: 3,
                name: "index.html",
                isFolder: false,
              },
              {
                id: 4,
                name: "style.css",
                isFolder: false,
              },
              {
                id: 5,
                name: "script.js",
                isFolder: false,
              },
            ],
          },
          {
            id: 8,
            name: "components",
            isFolder: true,
            items: [
              {
                id: 8,
                name: "App.js",
                isFolder: false,
                items: [],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "package.json",
        isFolder: false,
        items: [],
      },
    ],
  };
  