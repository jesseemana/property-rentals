type ContainerProps = {
  children: React.ReactNode
}

type ClientOnlyProps = {
  children: React.ReactNode
}


type MenuItemProps = {
  onClick: () => void
  label: string
}

type ModalProps = {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

type ButtonProps = {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

interface RegisterModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface LoginModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface RentalModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

interface AvatarProps {
  src: string | null | undefined
}

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
}

interface CategoryInputProps {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (value: string) => void
}

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

// interface CounterProps {
//   props: {
//     title: string;
//     subtitle: string;
//     value: number;
//     onChange: (value: number) => void;
//   }
// }

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}


interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

