import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Paalala" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ang Inutle ay hinango mula sa sikat na larong Wordle -{' '}
        <a
          href="https://ynovations.com/"
          className="underline font-bold"
        >
          Para sa iba pang proyekto ni Yno "Ynutle" Calamiong, pwede kang dumalaw sa www.ynovations.com
        </a>{' '}
      </p>
    </BaseModal>
  )
}
