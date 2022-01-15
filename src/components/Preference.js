import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie' ;

import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    Switch,
  } from '@material-ui/core';


  export default function LayoutChange({ children }) {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      // Check if browser contains cookie with name 'darkMode'. If it does, check if its value is 'true', if it is, 
      // set currentMode to true, if not, set currentMode to false.  
      let currentMode = /^true$/i.test(Cookies.get('darkMode'));
      setDarkMode(currentMode)
    }, [])
  
    //creating a material ui object them to customize our web page
    const theme = createTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: '#f0c000',
        },
        secondary: {
          main: '#208080',
        },
      },
    });
    
    /**
     * @description
     */
    const darkModeChangeHandler = () => {
      Cookies.set('darkMode', !darkMode);
      setDarkMode(!darkMode);
    };
    return (
      <div>
        {/* this entails the title of the page  */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
                <Switch checked={darkMode} onChange={darkModeChangeHandler} ></Switch>
          {/* the children is coming from the Layout which enable us to wrap the content in index.js */}
          {/* this is the footer of the page */}
        </ThemeProvider>
    </div>
    );
  }
