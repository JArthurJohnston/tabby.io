import { createFileRoute } from '@tanstack/react-router'
import { Compositions } from '../../components/Compositions'

export const Route = createFileRoute('/compositions/$compId')({
  component: Compositions,
})
