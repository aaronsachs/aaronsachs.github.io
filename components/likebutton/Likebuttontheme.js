import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';


const likeButtonTheme = createMuiTheme({
  palette: {
    primary: {
    	main: pink[100]
    },
    secondary: {
    	main: pink["A100"]
    },
  },
});

export default likeButtonTheme;