const styledCustomPropsNames = []

export const styledCustomProps = {
  shouldForwardProp: prop => !styledCustomPropsNames.includes(prop)
}
