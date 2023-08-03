import style from './component.module.css';
// For use CSS-modules and obfuscate the classes, styles file must be named as *.module.css

const App = () => {
  return (
    <div className={style.rootStyles}>
      <h3>Top level component</h3>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
      <div>Some text</div>
    </div>
  );
};

export default App;
