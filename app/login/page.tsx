import Link from "next/link";

export default function LoginPage() {
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
              <span className="text-2xl font-bold">N</span>
            </div>

            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Acceso seguro
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-black">
              Iniciar sesión
            </h1>

            <p className="mt-3 text-sm text-zinc-500">
              Ingresa tus datos para continuar con la verificación.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="usuario@correo.com"
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Contraseña
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-black outline-none transition focus:border-black"
              />
            </div>

            <Link
              href="/verify_code"
              className="block w-full rounded-2xl bg-black py-3 text-center font-semibold text-white transition hover:bg-zinc-800"
            >
              Iniciar sesión
            </Link>
          </form>

          <p className="mt-8 text-center text-xs text-zinc-500">
            Se enviará un código de verificación a tu dispositivo móvil.
          </p>
        </div>
      </section>
    </main>
  );
}