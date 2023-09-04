import { FC } from 'react'

interface authLayoutProps {
  children: React.ReactNode
}

const authLayout: FC<authLayoutProps> = ({ children }) => {
  return (
    <div className='h-full flex items-center justify-center'>{children}</div>
  )
}

export default authLayout
