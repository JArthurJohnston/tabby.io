import { createFileRoute, createRoute } from '@tanstack/react-router'
import { Compositions } from '../../components/Compositions'
import { ABC_SONGS } from '../../arrangements'

export const Route = createFileRoute('/compositions/$compId')({
  component: Compositions,
})
