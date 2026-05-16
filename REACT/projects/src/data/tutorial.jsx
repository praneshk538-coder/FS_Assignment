const tutorials = {
  html: {
    title: "HTML",
    content: `
HTML is the structure of a website.

Example:
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>

HTML uses tags like <h1>, <p>, <div>
    `
  },

  css: {
    title: "CSS",
    content: `
CSS is used to style HTML.

Example:
h1 {
  color: blue;
}

You can change colors, layout, spacing.
    `
  },

  javascript: {
    title: "JavaScript",
    content: `
JavaScript makes websites interactive.

Example:
alert("Hello!");

It can handle clicks, forms, animations.
    `
  },

  react: {
    title: "React",
    content: `
React is a JavaScript library to build UI.

Example:
function App() {
  return <h1>Hello</h1>;
}

It uses components.
    `
  },

  mysql: {
    title: "MySQL",
    content: `
MySQL is a database.

Example:
SELECT * FROM users;

It stores and manages data.
    `
  }
};

export default tutorials;