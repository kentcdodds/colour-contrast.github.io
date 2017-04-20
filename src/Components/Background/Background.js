import glamorous from 'glamorous';

//language=SCSS
export default glamorous.div(
  {
    position: 'fixed',
    width: '50%',
    top: 0,
    zIndex: -1,
    bottom: 0,
  },
  props => ({
    left: props.offset ? props.offset : 0,
    backgroundColor: props.colour,
  }),
);
