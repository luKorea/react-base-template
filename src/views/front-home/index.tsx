import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  return <HomeWrapper>FrontHomePage</HomeWrapper>
}

export default memo(FrontHomePage)