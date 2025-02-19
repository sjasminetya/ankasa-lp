/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/no-reserved-component-names": [
      "error",
      {
        disallowVueBuiltInComponents: false,
        disallowVue3BuiltInComponents: false,
      },
    ],
    "prettier/prettier": "none"
  },
};
