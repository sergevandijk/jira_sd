module.exports = {
    extends: [
        // https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts
        'tslint:recommended',

        // https://github.com/palantir/tslint-react
        'tslint-react',

        // https://github.com/progre/tslint-config-airbnb
        'tslint-config-airbnb',

        // https://www.npmjs.com/package/tslint-eslint-rules
        // Allows us to reuse eslint rules that are missing from tslint
        'tslint-eslint-rules',

        // https://github.com/bcherny/tslint-no-circular-imports
        'tslint-no-circular-imports',

        //https://github.com/prettier/tslint-plugin-prettier
        'tslint-plugin-prettier',

        //https://github.com/prettier/tslint-config-prettier
        'tslint-config-prettier',
    ],

    rules: {
        'object-literal-sort-keys': [true, 'shorthand-first'],
        'space-in-parens': false,
        semicolon: false,
        'ter-indent': false,
        'space-before-function-paren': false,
        'no-consecutive-blank-lines': false,
        'ter-arrow-parens': false,
        'trailing-comma': false,
        'jsx-wrap-multiline': false,
        quotemark: false,
        'max-line-length': [true, { limit: 120, 'ignore-pattern': '^import |^export {(.*?)}' }],
        align: false,
        'object-curly-spacing': false,
        'jsx-alignment': false,
        eofline: false,
        'one-line': false,
        'jsx-no-multiline-js': false,
        'jsx-curly-spacing': false,

        // Ensure each case has a break.
        'no-switch-case-fall-through': true,

        // https://palantir.github.io/tslint/rules/variable-name/
        // Enforces consistent variable names.
        'variable-name': [true, 'ban-keywords', 'check-format', 'allow-pascal-case'],

        // https://palantir.github.io/tslint/rules/no-console/
        // Disable console
        'no-console': true,

        // https://palantir.github.io/tslint/rules/no-for-in-array/
        // Disable for in array, use [].forEach and other functional
        'no-for-in-array': true,

        // https://palantir.github.io/tslint/rules/no-return-await/
        // Disable returning a promise with await
        'no-return-await': true,

        // https://palantir.github.io/tslint/rules/no-string-throw/
        // Disable throwing a string. Throw and error instead!
        'no-string-throw': true,

        // https://palantir.github.io/tslint/rules/switch-default/
        // Require switches to have a default case
        'switch-default': true,

        // https://palantir.github.io/tslint/rules/prefer-object-spread/
        // Use { ...obj } over Object.assign
        'prefer-object-spread': true,

        // To allow mixed array types e.g. Array<number|string>
        'prefer-array-literal': false,
        'array-type': [true, 'generic'],

        // https://palantir.github.io/tslint/rules/member-access/
        // Don't allow public modifier as it's the default behaviour
        'member-access': [true, 'no-public'],

        // https://palantir.github.io/tslint/rules/no-parameter-properties/
        // Disables using param properties in class constructors.
        // E.g constructor(public name, private address) will error.
        'no-parameter-properties': true,

        // https://palantir.github.io/tslint/rules/interface-name/
        // Enforces interfaces to have an 'I' prefix.
        'interface-name': [true, 'always-prefix'],

        // Dont enforce variable names based on package name.
        'import-name': false,

        // Use shorthand for boolean in jsx elements.
        'jsx-boolean-value': [true, 'never'],

        // Prefer `${}` over x + z
        'prefer-template': true,

        // https://palantir.github.io/tslint/rules/no-namespace/
        'no-namespace': [true, 'allow-declarations'],

        'no-any': true,

        prettier: true,
    },
};
