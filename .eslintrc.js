module.exports = {
    env: {
        "jest": true
    },
    extends: ["standard", "plugin:prettier/recommended"],
    "prettier/prettier": ["error", { "singleQuote": true }]
}