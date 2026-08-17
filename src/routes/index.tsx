import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zuvvi" },
      { name: "description", content: "Zuvvi — mobilidade urbana." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Zuvvi</h1>
      <p className="text-lg text-muted-foreground">Estrutura inicial do projeto.</p>
    </div>
  );
}
