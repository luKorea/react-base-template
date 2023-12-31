import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'
import Skeleton from '@/base-ui/skeleton'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [loading])
  return (
    <>
      <Skeleton loading={loading} animate={true}></Skeleton>
      {!loading && <HomeWrapper>FrontHomePage</HomeWrapper>}
    </>
  )
}

export default memo(FrontHomePage)
