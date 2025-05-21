const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div
        className="grid mx-auto bg-central fondo-imagen"
        style={{ maxWidth: '1200px' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
