import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ResultProps } from 'antd/es/result'

interface IProps {
  children?: ReactNode
  resultType: ResultProps
}

const NotFound: FC<IProps> = (props) => {
  const navigate = useNavigate()
  function goPage() {
    navigate('/')
  }
  return (
    <Result
      extra={
        <Button type="primary" onClick={() => goPage()}>
          Back Home
        </Button>
      }
      {...props.resultType}
    />
  )
}

export default memo(NotFound)
