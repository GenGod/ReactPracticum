

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "es2017": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:promise/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "promise",
        "optimize-regex"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": ".",
        "sourceType": 'module',  // Allows for the use of imports
        "ecmaFeatures": {
            "jsx": true,  // Allows for the parsing of JSX
        },
    },
    "rules": {
        "import/no-unresolved": 0,
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
        ],
        "import/extensions": 0,
        "semi": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4]
    },
    "settings": {
        "react": {
            "version": "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    }
}