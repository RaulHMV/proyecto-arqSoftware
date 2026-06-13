import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/abue7.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <section className="relative z-10 min-h-screen px-6 py-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] bg-white/95 px-6 py-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
              <span className="font-bold">N</span>
            </div>

            <div>
              <h1 className="text-lg font-bold">Panel principal</h1>
              <p className="text-xs text-zinc-500">Sistema de autenticación</p>
            </div>
          </div>

          <Link
            href="/login"
            className="rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            Cerrar sesión
          </Link>
        </nav>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="rounded-[2rem] bg-white/95 p-8 shadow-2xl md:p-12">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Acceso autorizado
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Bienvenido al sistema
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-500">
              Tu identidad fue verificada correctamente. Desde este panel podrás
              visualizar el estado general de la sesión.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                <p className="mb-2 text-sm text-zinc-500">Estado</p>
                <h3 className="text-2xl font-bold">Activo</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  La sesión se encuentra iniciada correctamente.
                </p>
              </article>

              <article className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                <p className="mb-2 text-sm text-zinc-500">Seguridad</p>
                <h3 className="text-2xl font-bold">2FA</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  El acceso requiere verificación por código.
                </p>
              </article>

              <article className="rounded-[1.5rem] border border-zinc-200 bg-white p-6">
                <p className="mb-2 text-sm text-zinc-500">Sistema</p>
                <h3 className="text-2xl font-bold">Protegido</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Flujo preparado para conectarse con el backend.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}