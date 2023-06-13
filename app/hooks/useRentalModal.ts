import { create } from 'zustand'

const useRentalModal = create<RentalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useRentalModal