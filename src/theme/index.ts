import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
        primary: '#7391C8',
        secondary: "#3bb75e",
        'gray-3': "#E4E4E4",
        "gray-6": "#808080",
        'gray-7': "#5B5B5B",
        'gray-8': "#373737",
        black: "#121212"
    }
  },
  styles: {
   
    global:{
        "*" : {
            margin: "0",
            boxSizing: "border-box"
        },
        body: {
            color: "#121212",
        }
    }
},
  fonts: {
    body: "'Lato', sans-serif", // Set your default font
    heading: "'Lato', sans-serif", // Set your heading font
  },
  components: {
    Button: {
        baseStyle: {
            fontWeight: "medium",  
            bgColor: "#7391C8",
            color: "white"
        },
        variant: {
          primary: {
            bgColor: "#3bb75e"
          },
    
        },
       
    }
  },
});

export default theme;