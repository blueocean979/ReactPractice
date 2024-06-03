import logo from './logo.svg';
import './App.css';
import List from './components/list/list';
import { list } from './constants'
import ThemeProvider from './components/themeProvider/themeProvider';
import { useState } from 'react';

function App() {
  const [ theme, setTheme ] = useState('dark')

  return (
    <ThemeProvider theme={theme} >
    <div className={`App ${theme}`} >
      <h1>Parent header</h1>
      <div className='toggleBox'>
        <p>dark</p>
        <label class="switch">
          <input type="checkbox" onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
          <span class="slider round"></span>
        </label>
        <p>light</p>
      </div>
      <div >
        <List list={list} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
