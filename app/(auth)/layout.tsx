import { FC } from 'react'

interface authLayoutProps {
  children: React.ReactNode
}

const authLayout: FC<authLayoutProps> = ({ children }) => {
  return (
    <div className='bg-red-500 h-full'>{children}</div>
  )
}

export default authLayout
