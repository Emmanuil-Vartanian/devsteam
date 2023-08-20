import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SingleBedIcon from '@mui/icons-material/SingleBed'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import { useNavigate } from 'react-router-dom'

import {
  CardImageBlock,
  CardPrice,
  HouseLocation,
  HouseTag,
  HouseTags,
  InfoHouse,
  OwnerContacts,
  OwnerData,
  TopCardInfo
} from './style'

import WhatsAppSvg from 'assets/svg/WhatsAppSvg'
import TelegramSvg from 'assets/svg/TelegramSvg'
import Link from 'components/Link'

import { ROUTES } from 'constants/routes'

interface CardProps {
  data: Record<string, any>
}

const Card: React.FC<CardProps> = ({ data }) => {
  const navigate = useNavigate()

  const { image, price, address, tags, bed, bath, apartmentArea, ownerInfo } = data

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <div>
      <TopCardInfo onClick={handleGoToPageUnderConstruction}>
        <CardImageBlock>
          <img src={image} alt="card" />
          <div>
            <FavoriteBorderIcon />
          </div>
        </CardImageBlock>
        <div>
          <CardPrice>{price}</CardPrice>
          <InfoHouse>
            <div>
              <SingleBedIcon />
              {bed} bed
            </div>
            <div>
              <ShowerOutlinedIcon />
              {bath} bath
            </div>
            <div>
              <FullscreenExitIcon />
              {apartmentArea}
            </div>
          </InfoHouse>
          <HouseLocation>
            <LocationOnOutlinedIcon />
            {address}
          </HouseLocation>
          <HouseTags>
            {tags.map((item, index) => (
              <HouseTag key={index} colorTag={item.includes('For')}>
                {item}
              </HouseTag>
            ))}
          </HouseTags>
        </div>
      </TopCardInfo>
      <div>
        <OwnerData>
          <img src={ownerInfo.avatar} alt="avatar" />
          <div>{`${ownerInfo.name} ${ownerInfo.surname}`}</div>
        </OwnerData>
        <OwnerContacts>
          <Link
            href={ownerInfo.whatsApp}
            title={
              <>
                <WhatsAppSvg color="#00A11A" />
                <span>WhatsApp</span>
              </>
            }
          />
          <Link
            href={ownerInfo.whatsApp}
            title={
              <>
                <TelegramSvg color="#1084EF" />
                <span>Telegram</span>
              </>
            }
          />
          <Link
            href={ownerInfo.whatsApp}
            title={
              <>
                <PhoneInTalkOutlinedIcon />
                <span>Phone call</span>
              </>
            }
          />
        </OwnerContacts>
      </div>
    </div>
  )
}

export default Card
