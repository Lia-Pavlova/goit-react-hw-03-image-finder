# Критерии приема

- Созданы репозитории `goit-react-hw-03-image-finder`
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу
  проектов на `GitHub pages`
- В состоянии компонентов хранится минимально необходимый набор данных,
  остальное вычисляется
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей
- Для компонентов описаны `propTypes`, и где необходимо, `defaultProps`
- Все что компонент ожидает в виде пропов, передается ему при вызове
- Имена компонентов понятные, описательные
- JS-код чистый и понятный, используется `Prettier`
- Стилизация делается только `SASS`, `CSS-модулями` или `Styled Components`,
  поэтому классы в результирующем DOM могут отличаться от примеров.
- Для стилизации достаточно позиционирование и размеры приближенные к макету.
  Компоненты, в первую очередь, должны работать, а уже потом быть красивые,
  выделяй 20% времени на стилизацию и 80% на JS.

# Поиск изображений

Напиши приложение поиска изображений по ключевому слову. Превью рабочего
приложения
[смотри по ссылке](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Создай компоненты `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` и `<Modal>`. Готовые стили компонентов можно взять в
файле [styles.css](./preview/styles.css) и подправить под себя, если необходимо.

![preview](./preview/preview.jpeg)

## Инструкция Pixabay API

Для HTTP-запросов используй публичный сервис поиска изображений
[Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся и получи приватный
ключ доступа.

URL-строка HTTP-запроса.

```bash
https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API поддерживает пагинацию, по умолчанию параметр `page` равен `1`.
Пусть в ответе приходит по 12 объектов, установлено в параметре `per_page`. Не
забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение
`page` в `1`.

В ответе от апи приходит массив объектов, в которых тебе интересны только
следущие свойства.

- `id` - уникальный идентификатор
- `webformatURL` - ссылка на маленькое изображение для списка карточек
- `largeImageURL` - ссылка на большое изображение для модального окна

## Описание компонента Searchbar

Компонент принимает один проп `onSubmit` - функцию для передачи значения инпута
при сабмите формы. Создает DOM-элемент следующей структуры.

```html
<header className="Searchbar">
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Описание компонента ImageGallery

Список карточек изображений. Создает DOM-элемент следующей структуры.

```html
<ul className="ImageGallery">
  <!-- Набор <li> с изображениями -->
</ul>
```

## Описание компонента ImageGalleryItem

Компонент элемента списка с изображением. Создает DOM-элемент следующей
структуры.

```html
<li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>
```

## Описание компонента Button

При нажатии на кнопку `Load more` должна догружаться следующая порция
изображений и рендериться вместе с предыдущими. После загрузки и рендера новой
партии изображений страница должна плавно скролиться. Для скрола используй
следующий код.

```js
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});
```

Кнопка должна рендерится только тогда, когда есть какие-то загруженные
изобаржения. Если массив изображений пуст, кнопка не рендерится.

## Описание компонента Loader

Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой
готовый компонент, например
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) или любой
другой.

## Описание компонента Modal

При клике по элементу галереи должно открываться модальное окно с темным
оверлеем и отображаться большая версия изображения. Модальное окно должно
закрываться по нажатию клавиши `ESC` или по клику на оверлее.

Внешний вид похож на функционал этого
[VanillaJS-плагина](https://basiclightbox.electerious.com/), только вместо
белого модального окна рендерится изображение (в примере нажми `Run`). Анимацию
делать не нужно!

```html
<div className="Overlay">
  <div className="Modal">
    <img src="" alt="" />
  </div>
</div>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
