import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ABC_Composer } from "../ABC_Composer";

export const Route = createFileRoute('/abc_composer')({
  component: () => <ABC_Composer />
})