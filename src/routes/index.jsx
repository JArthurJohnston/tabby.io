import { createFileRoute } from '@tanstack/react-router'
import { FingeringChart } from '../FingeringChart'
import { Composer } from '../Composer'
import { NotesSheet } from '../NotesSheet'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <div className='flex mb' style={{ height: '65vh' }}>
        <FingeringChart />
        <Composer />
      </div>
      <NotesSheet />
    </>
  ),
})
