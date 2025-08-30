import { createFileRoute } from '@tanstack/react-router'
import { Compositions } from '../components/Compositions'

export const Route = createFileRoute('/compositions')({
  component: Compositions,
})
