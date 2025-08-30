import { createFileRoute } from "@tanstack/react-router";
import { Composer } from "../ComposerV2";

export const Route = createFileRoute('/composer')({
  component: () => <Composer />
})
