import apartments from 'assets/images/apartments.png'
import cottageTownships from 'assets/images/cottageTownships.png'
import houses from 'assets/images/houses.png'
import commercialProperty from 'assets/images/commercialProperty.png'

export const mainData = t => [
  { title: t('main.apartments'), image: apartments },
  { title: t('main.cottageTownships'), image: cottageTownships },
  { title: t('main.houses'), image: houses },
  { title: t('main.commercialProperty'), image: commercialProperty }
]
