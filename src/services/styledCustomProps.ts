const styledCustomPropsNames = [
  'focus',
  'mouseEnter',
  'maxWidth',
  'languageCode',
  'colorTag',
  'justifyContent'
]

export const styledCustomProps = {
  shouldForwardProp: prop => !styledCustomPropsNames.includes(prop)
}
