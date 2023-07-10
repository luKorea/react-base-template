import { NotFoundWrapper } from './styled'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NotFoundPage: FC<IProps> = () => {
  return <NotFoundWrapper>NotFoundPage</NotFoundWrapper>
}

export default memo(NotFoundPage)
