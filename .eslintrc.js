module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module",
        "typeRoots":["node_modules/@types","./src/assets/types"]
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version":"detect"
        }
    },
    "rules": {
        "no-unused-vars": ["error",{
            "vars": "all",
            "args": "none",
            "caughtErrors": "none",
            "ignoreRestSiblings": true
        }],
        "no-unused-expressions": "error",
        "quotes": ["error", "double",{ "allowTemplateLiterals": true }],
        "comma-spacing":["off"],
        "prefer-const": "error",
        "quote-props":["off"],
        "indent": 0,
        "space-before-function-paren": 0,
        "space-before-blocks":[0],
        "key-spacing": ["off", {
            "beforeColon":false
        }],
        "comma-dangle": ["error", "never"],
        "keyword-spacing": ["off"],
        "no-use-before-define": ["off", { "functions": true, "classes": true, "variables": true }],
        "react/prop-types": 0
    }
}
