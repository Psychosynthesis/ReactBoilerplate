import style from './app.module.css';
// For use CSS-modules and obfuscate the classes, styles file must be named as *.module.css

const App = () => {
  return (
    <div className={style.rootStyles}>
      <h3>Super simple React Boilerplate</h3>
      <div>This is top-level component</div>
      <div>Отдельным файлом добавлен пример шаблона с параллаксом: <a href="/parallax.html">Parallax example</a></div>
      <div>Исходники параллакса: <a href="https://github.com/GoogleChromeLabs/ui-element-samples/tree/gh-pages/parallax">UI-element-samples GIT</a></div>
    </div>
  );
};

export default App;
