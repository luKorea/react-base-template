import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'
import Skeleton from '@/base-ui/skeleton'

import { Button } from '@arco-design/web-react'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [loading])
  return (
    <>
      <Skeleton loading={loading} animate={true}></Skeleton>
      {!loading && (
        <HomeWrapper>
          <Button type="primary">测试</Button>
        </HomeWrapper>
      )}
    </>
  )
}

export default memo(FrontHomePage)
