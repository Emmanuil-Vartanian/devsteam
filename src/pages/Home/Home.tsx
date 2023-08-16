import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageStateContext from 'services/context/languageStateContext'
import Button from 'components/Button'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { handleChangeStateLanguage } = useContext(LanguageStateContext)

  return (
    <div>
      <Button title="EN" onClick={() => handleChangeStateLanguage('en')} />
      <Button title="UA" onClick={() => handleChangeStateLanguage('ua')} />
    </div>
  )
}

export default Home
