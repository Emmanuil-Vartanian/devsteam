import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SingleBedIcon from '@mui/icons-material/SingleBed'
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'

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

interface CardProps {
  data: Record<string, any>
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { image, price, address, tags, bed, bath, apartmentArea, ownerInfo } = data

  return (
    <div>
      <TopCardInfo>
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
                <WhatsAppSvg />
                <span>WhatsApp</span>
              </>
            }
          />
          <Link
            href={ownerInfo.whatsApp}
            title={
              <>
                <TelegramSvg />
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
