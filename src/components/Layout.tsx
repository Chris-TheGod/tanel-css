type LayoutProps = {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='app'>
      <div className='nav'></div>
      <div className='content'>{children}</div>
    </div>
  )
}
