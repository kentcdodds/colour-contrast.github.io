import glamorous from 'glamorous';

//language=SCSS
export default glamorous.input(
  {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '3rem',

    boxSizing: 'border-box',
    padding: '10px 20px',

    textAlign: 'center',
    letterSpacing: '5px',

    color: '#333',
    outline: '0',
    backgroundColor: 'rgba(255,255,255, .3)',

    borderRadius: '2px',
  },
  props => ({
    border: `4px solid ${props.isValid ? 'rgba(255,255,255, 0)' : '#CB5450'}`,
    '&:hover, &:focus': {
      border: `4px solid ${props.isValid ? 'rgba(255, 255, 255, 0.3)' : '#CB5450'}`,
    },
  }),
);
