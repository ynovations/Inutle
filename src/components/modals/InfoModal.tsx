import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Halika Turuan Kita" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Hulaan ang salita sa loob ng 6 na subok. Makalipas ang hula, mag-iiba ang kulay ng tiles upang ipakita kung 
        gaano kalapit ang iyong hula sa tamang salita.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" status="correct" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ang letrang K ay nasa salita at tamang puwesto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="P" status="present" />
        <Cell value="A" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ang letrang P ay nasa salita ngunit maling puwesto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="N" />
        <Cell value="D" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ang letrang D ay wala sa salita.
      </p>
    </BaseModal>
  )
}
