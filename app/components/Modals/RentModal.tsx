'use client'

import Modal from './Modal'
import useRentalModal from '@/app/hooks/useRentalModal'

const RentModal = () => {
    const rentModal = useRentalModal()

    return(
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel='Submit'
            title='AirBnB Your Home'
        />
    )
}

export default RentModal