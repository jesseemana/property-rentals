import { create } from 'zustand'

const useLoginModal = create<CustomModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useLoginModal