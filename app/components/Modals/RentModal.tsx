'use client'

import Modal from './Modal'
import { useState, useMemo } from 'react'
import useRentalModal from '@/app/hooks/useRentalModal'

enum STEPS {
    CATEGORY = 0,
    LOCATION= 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentalModal()

    const [step, setStep] = useState(STEPS.CATEGORY)

    function onBack() {
        setStep(value => value - 1)
    }

    function onNext() {
        setStep(value => value + 1)
    }

    const actionLabel = useMemo(() => {
        if(step === STEPS.PRICE) return 'Create'

        return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if(step === STEPS.CATEGORY) return undefined

        return 'Back'
    }, [step])

    return(
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={steps === STEPS.CATEGORY ? undefined : onBack}
            title='AirBnB Your Home'
        />
    )
}

export default RentModal