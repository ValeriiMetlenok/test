module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/indent": ["error", 4],
    },
    overrides: [
        { 
            "files": ["**/*.tsx"],
            "rules": {
                "react/prop-types": "off",
                "react/jsx-indent": [2, 4],
                "react/jsx-indent-props": [2, 4],
                "react/jsx-props-no-spreading": "off"
            }
        }
    ]
};