import React, { useContext } from 'react'

import { DropdownBlock, ListDropdown } from './style'

import ArrowDownSvg from 'assets/svg/ArrowDownSvg'

export interface DropdownListOption {
  id: number
  value: string
  code: string
}

interface DropdownListProps {
  currentValue: string
  handleChangeValue: (value) => () => void
  dropdownList: DropdownListOption[]
}

const DropdownList: React.FC<DropdownListProps> = ({
  currentValue,
  handleChangeValue,
  dropdownList
}) => {
  return (
    <DropdownBlock>
      <span>{currentValue.toUpperCase()}</span>
      <ArrowDownSvg />
      <ListDropdown className="listDropdown">
        {dropdownList.map(({ id, value, code }) => (
          <div key={id} onClick={handleChangeValue(code)}>
            {value.toUpperCase()}
          </div>
        ))}
      </ListDropdown>
    </DropdownBlock>
  )
}

export default DropdownList
