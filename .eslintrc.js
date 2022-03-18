module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],

  globals: {
    // eslint was complaining when using jsdom namespace which is declared in global scope
    jsdom: true,
    spyOn: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
  },

  plugins: ["sort-destructure-keys"],

  root: true,

  rules: {
    "react/require-default-props": 0,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
