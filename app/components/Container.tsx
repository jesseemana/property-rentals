'use client'

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="max-w-[2480px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  )
}

export default Container  