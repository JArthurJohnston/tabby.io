import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/instruments/$compId')({
  component: () => null,
})