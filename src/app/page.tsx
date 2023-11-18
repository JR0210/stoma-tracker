import EntryButton from "@/components/EntryButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 lg:p-12">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl lg:text-6xl font-bold text-center">
          Osto<span className="text-primary">Mate</span>
        </h1>
        <h2 className="text-lg lg:text-xl text-center italic opacity-80">
          Keep tabs on your stoma output
        </h2>
      </div>

      <EntryButton />
    </main>
  );
}
