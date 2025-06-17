import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions/themeActions';

const Project3_ThemeSwitcher = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const style = {
    background: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '20px',
    minHeight: '100px',
  };

  return (
    <div style={style}>
      <h2>Theme Switcher</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Project3_ThemeSwitcher;
