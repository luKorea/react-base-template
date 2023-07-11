import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  const navigate = useNavigate()
  function goPage() {
    navigate('/')
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => goPage()}>
          Back Home
        </Button>
      }
    />
  )
}

export default memo(NotFound)
