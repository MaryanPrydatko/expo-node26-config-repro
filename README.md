# expo config fails on node 26

Minimal repro for [expo/expo#48725](https://github.com/expo/expo/issues/48725). **Fixed upstream in [expo/expo#48826](https://github.com/expo/expo/pull/48826).**

A stock `create-expo-app` blank template with `app.json` renamed to `app.config.ts`. No TypeScript installed.

```bash
npm install
npx expo config --json
```

- node 24.19.0: prints the config
- node 26.7.0: `TypeError [ERR_INVALID_ARG_VALUE]: The property 'options.mode' must be one of: 'strip'. Received 'transform'`

Without TypeScript, `@expo/require-utils` falls back to node's `stripTypeScriptTypes(code, { mode: 'transform', sourceMap: true })`. Node 26 removed both options ([nodejs/node#61803](https://github.com/nodejs/node/pull/61803), [nodejs/node#63738](https://github.com/nodejs/node/pull/63738)). Calling it with defaults works.
