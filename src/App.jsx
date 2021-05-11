import logo from './logo.svg';
import './App.css';
import './i18n'
import i18n from './i18n';
import { Trans, useTranslation } from 'react-i18next'
import { Suspense } from 'react';

function Hello() {
  const { t } = useTranslation()

  return <h1>{t('hello')}</h1>
}

function HelloWithALink() {
  const { t } = useTranslation()

  return (
    <Trans t={t} i18nKey="helloWithALink">
      This is <b>hello</b> with a <a href="/">link in English</a>
    </Trans>
  )
}

function HelloWithALinkAlternative() {
  const { t, i18n } = useTranslation()
  let link = `/?=${i18n.language}`

  return (
    <Trans
      i18nKey="helloWithALinkAlternative"
      defaults="This is <boldCustom>{greeting}</boldCustom>" // optional
      values={{
        greeting: (t('hello')).toLowerCase(),
      }}
      components={{ boldCustom: <strong /> }}
    />
  )
}

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <header className="App-header">
          <select onChange={e => i18n.changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <img src={logo} className="App-logo" alt="logo" />
          <Hello />
          <p>
            <HelloWithALink />
          </p>
          <p>
            <HelloWithALinkAlternative />
          </p>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
