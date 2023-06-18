import { create } from 'zustand'

const useSearchModal = create<CustomModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useSearchModal