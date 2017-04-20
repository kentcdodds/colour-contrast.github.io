import glamorous from 'glamorous';

//language=SCSS
export default glamorous.p(
  {
    overflow: 'hidden',
    textOverflow: 'clip',
    lineHeight: '1.4em',
    maxHeight: '5.6em',
    marginTop: '8%',
  },
  ({colour, fontSize}) => ({color: colour, fontSize}),
);
