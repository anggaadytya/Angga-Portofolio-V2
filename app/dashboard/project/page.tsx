import React from "react";

import BackButton from "@/components/elements/BackButton";
import Container from "@/components/elements/Container";

export default function Page() {
  return (
    <>
      <Container>
        <BackButton />
        <h1 className="text-3xl font-bold text-neutral-400">Project</h1>
      </Container>
    </>
  );
}
