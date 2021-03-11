import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    mainColor: '#fd8b4b',
    secondaryColor: '#231d1f',
    dangerColor: '#f44336',
    successColor: '#4caf50',
    white: '#ffffff',
    black: '#000000',
    blue: '#4bbdfd',
    greyA5: '#a5a5a5',
    greyEE: '#eeeeee',
    greyCC: '#cccccc',
    greyAA: '#aaaaaa',
    darkGrey33: '#333333',
    greyFA: '#fafafa',
    arrowColor: 'rgba(255,255,255, 0.3)',
    darkGrey5B: '#5b5b5b',
  },
  typography: {
    fontFamily: {
      heading: '"Montserrat", sans-serif',
      text: '"Open Sans", sans-serif',
    },
  },
});

export default theme;
