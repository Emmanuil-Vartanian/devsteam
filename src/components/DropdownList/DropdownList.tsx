import React, { useContext } from 'react'

import { DropdownBlock, ListDropdown } from './style'

import ArrowDownSvg from 'assets/svg/ArrowDownSvg'

interface DropdownListProps {
  currentValue: string
  handleChangeValue: (value) => () => void
  dropdownList: string[]
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
        {dropdownList.map((value, index) => (
          <div key={index} onClick={handleChangeValue(value)}>
            {value.toUpperCase()}
          </div>
        ))}
      </ListDropdown>
    </DropdownBlock>
  )
}

export default DropdownList
