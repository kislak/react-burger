[figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link?node-id=0%3A1)

[React Developer Burger Ui Components](https://yandex-praktikum.github.io/react-developer-burger-ui-components/docs/)

[sprint_1 specs](https://practicum.yandex.ru/learn/react/courses/8bb9f1d2-104b-4854-a4d5-d5d8766421ec/sprints/22204/topics/1b04cf53-64d6-46a0-ba92-2a857b20f0bd/lessons/a4bdfad8-d4c2-4b5b-aefa-04119daf305d/)

usefull links

https://habr.com/ru/company/ruvds/blog/445276/
https://habr.com/ru/company/yandex/blog/464071/
https://habr.com/ru/post/662549/
https://habr.com/ru/post/663792/

inPortal
https://www.joshwcomeau.com/snippets/react-components/in-portal/

```bash
prettier --write .
```

## sprint 2

[react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)

[uuid](https://www.npmjs.com/package/uuid/)

[ReactDND](https://react-dnd.github.io/react-dnd/about)

[redux toolkit](https://redux-toolkit.js.org/tutorials/overview)

## sprint 3

[specs](https://practicum.yandex.ru/learn/react/courses/36f94820-19c9-4dfb-beed-5c4858c587e2/sprints/22212/topics/f4914b23-ab6f-4362-aae4-e78a72093099/lessons/fdc72800-02ce-438c-8c16-effed1aa8268/)
[figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link)
[modal-gallery](https://reactrouter.com/web/example/modal-gallery)

## sprint 5

реконект, можно еще добавить попытку обновить токен
useMemo
useEffect return () => {} // destructor

## sprint 6

```bash
yarn test
```

```
yarn add cypress --dev
yarn cypress open

#pakcage.json  -> script -> "cy": "./node_modules/.bin/cypress open"

yarn cy
```

#### При первом запуске тестового окружения библиотека создаёт в приложении директорию cypress с такой архитектурой:

```
cypress
├── fixtures
├── integration
│   └── examples
├── plugins
└── support
```

```
yarn add eslint-plugin-cypress --dev
/cypress/.eslintrc.json
{
    "plugins": [
    "cypress"
    ],
    "extends": [
    "plugin:cypress/recommended"
    ]
}
```

#### first spec

```
describe('service is available', function() {
  it('should be available on localhost:3000', function() {
    cy.visit('http://localhost:3000');
  });
});
```


#### gh-pages
```
npm install gh-pages --save-dev 

scripts: {
...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
} 

package.json
  "homepage": "./", 

```

#### Couldn't find remote ref refs/heads/gh-pages
```gh-pages-clean```
