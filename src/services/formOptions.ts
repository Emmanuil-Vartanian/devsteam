import { DropdownListOption } from 'components/DropdownList/DropdownList'

export function getDataOptions(data: string[]): DropdownListOption[] {
  const options = data.map((code, index) => ({
    id: index,
    code: code,
    value: code
  }))

  return options
}

export function getCitiesOptions(
  cities: string[],
  t: (key: string) => string
): DropdownListOption[] {
  const options = cities.map((code, index) => ({
    id: index,
    code: code,
    value: t(`cities.${code}`)
  }))

  return options
}

export function getPropertyTypesOptions(
  propertyTypes: string[],
  t: (key: string) => string
): DropdownListOption[] {
  const options = propertyTypes.map((code, index) => ({
    id: index,
    code: code,
    value: t(`propertyTypes.${code}`)
  }))

  return options
}
