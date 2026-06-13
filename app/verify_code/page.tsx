import Link from "next/link";

export default function VerifyCodePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/abue7.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-[2rem] bg-white/95 px-8 py-10 shadow-2xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-black">
              <span className="text-2xl font-bold">2FA</span>
            </div>

            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Verificación
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-black">
              Código de acceso
            </h1>

            <p className="mt-3 text-sm text-zinc-500">
              Ingresa el código enviado a tu móvil para confirmar tu identidad.
            </p>
          </div>

          <div className="mb-8 flex justify-center gap-3">
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
            <input
              maxLength={1}
              className="h-14 w-12 rounded-2xl border border-zinc-300 bg-white text-center text-xl font-semibold outline-none transition focus:border-black"
            />
          </div>

          <Link
            href="/dashboard"
            className="block w-full rounded-2xl bg-black py-3 text-center font-semibold text-white transition hover:bg-zinc-800"
          >
            Verificar código
          </Link>

          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-500">¿No recibiste el código?</p>
            <button className="mt-2 text-sm font-medium text-black underline">
              Reenviar código
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}