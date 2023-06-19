'use client'
   
import Button from './Button'
import Heading from './Heading'
import { useRouter } from 'next/navigation'

const EmptyState: React.FC<EmptyStateProps> = ({
  showReset,
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
}) => {
  const router = useRouter()
  
  return (
    <div className='h-[90vh] flex flex-col gap-2 justify-center items-center'>
      <Heading 
        center
        title={title}
        subtitle={subtitle}
      />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push('/')}
          />
        )}
       </div>
    </div>
  )
}

export default EmptyState 