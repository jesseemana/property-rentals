type ContainerProps = {
  children: React.ReactNode
}

type ClientOnlyProps = {
  children: React.ReactNode
}

type MenuItemProps = {
  label: string
  onClick: () => void
}

type ModalProps = {
  title?: string
  isOpen?: boolean
  disabled?: boolean
  actionLabel: string
  body?: React.ReactElement
  footer?: React.ReactElement
  secondaryActionLabel?: string
  onClose: () => void
  onSubmit: () => void
  secondaryAction?: () => void
}

type ButtonProps = {
  label: string
  icon?: IconType
  small?: boolean
  outline?: boolean
  disabled?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface CustomModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface HeadingProps {
  title: string
  center?: boolean
  subtitle?: string
}

interface AvatarProps {
  src: string | null | undefined
}

interface CategoryBoxProps {
  label: string
  icon: IconType
  selected?: boolean
}

interface CategoryInputProps {
  label: string
  icon: IconType
  selected?: boolean
  onClick: (value: string) => void
}

interface CounterProps {
  value: number
  title: string
  subtitle: string
  onChange: (value: number) => void
}

interface ImageUploadProps {
  value: string
  onChange: (value: string) => void
}

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

interface IParams {
  userId?: string
  authorId?: string
  listingId?: string
  reservationId?: string
}

interface IListingParams {
  userId?: string
  guestCount?: number
  roomCount?: number
  bathroomCount?: number
  startDate?: string
  endDate?: string
  locationValue?: string
  category?: string
}

interface HomeProps { 
  searchParams: IListingParams 
}
