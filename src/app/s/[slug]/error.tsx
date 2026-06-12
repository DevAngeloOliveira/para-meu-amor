"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-center text-coffee">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-love">
          Jardim de Nós
        </p>
        <h1 className="serif mt-4 text-4xl font-bold">
          Não conseguimos abrir essa surpresa
        </h1>
        <p className="mt-4 text-earth">
          O conteúdo retornado não passou pela validação ou houve uma falha de
          conexão.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-love px-6 text-sm font-semibold text-warm-white transition hover:bg-rose"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
