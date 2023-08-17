const styledCustomPropsNames = ['focus', 'mouseEnter', 'maxWidth', 'languageCode']

export const styledCustomProps = {
  shouldForwardProp: prop => !styledCustomPropsNames.includes(prop)
}
