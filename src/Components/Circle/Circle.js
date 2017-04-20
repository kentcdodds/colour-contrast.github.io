import glamorous from 'glamorous';

//language=SCSS
export default glamorous.div(
  {
    height: 120,
    width: 120,
    borderRadius: '50%',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: '1.4em',
    fontFamily: '"Roboto Mono", monospace',
  },
  ({size, colour, pass}) => ({
    fontSize: size ? size : '1.1em',
    backgroundColor: colour ? colour : pass ? '#1f9c30' : '#c1293d',
  }),
);
