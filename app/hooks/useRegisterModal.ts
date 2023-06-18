import { create } from 'zustand'

const useRegisterModal = create<CustomModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default useRegisterModal