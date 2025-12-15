import Image from "next/image";

import BannerTop from "../app/assets/athlete-top.png";
import BannerBottom from "../app/assets/banner-bottom.png";
import Logo from "../app/assets/logo1.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* MINI HEADER (sticky) */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Left buttons */}
          <div className="w-[84px] sm:w-[380px]" />

          {/* Center logo (image) */}
          <a
            href="#top"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            aria-label="Athelete"
          >
            <Image src={Logo} alt="Athelete" width={140} height={20} priority />
          </a>

          {/* Right side spacer (keeps center perfectly centered) */}

          <div className="flex items-center gap-2">
            <a
              href="#registro"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition"
            >
              Quiero acceso anticipado
            </a>
            <a
              href="#como-funciona"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-black hover:bg-zinc-50 transition"
            >
              Cómo funciona
            </a>

            {/* Mobile (single) */}
            <a
              href="#registro"
              className="inline-flex sm:hidden items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition"
            >
              Acceso
            </a>
          </div>
        </div>
      </header>

      {/* HERO IMAGE (top) */}
      <section id="top" className="relative h-[45vh] w-full">
        <Image
          src={BannerTop}
          alt="Athelete — atleta en entrenamiento"
          fill
          priority
          className="object-cover"
        />
        {/* subtle overlay for elegance */}
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* BLOCK 1 */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
            Athelete
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Athelete no es solo ropa.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Es un ecosistema de entrenamiento, rendimiento y disciplina.
            Diseñado con intención. Construido con tecnología.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#registro"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition"
            >
              Quiero acceso anticipado
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-black hover:bg-zinc-50 transition"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE (middle divider style) */}
      <section className="relative h-[48vh] w-full">
        <Image
          src={BannerBottom}
          alt="Athelete — enfoque y disciplina"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* BLOCK 2 — Founder message + pillars */}
      <section
        id="como-funciona"
        className="mx-auto w-full max-w-5xl px-6 py-16"
      >
        <div className="mx-auto grid gap-10 lg:grid-cols-12">
          {/* Founder message */}
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
              Mensaje del Founder
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              “Estoy construyendo Athelete para gente que se toma en serio su
              progreso.”
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">
              No se trata de motivación temporal. Se trata de sistema,
              constancia y resultados medibles. Athelete nace desde la
              disciplina real: entrenamiento, estética, rendimiento… y una
              experiencia cuidada al nivel de detalle.
            </p>

            <p className="mt-5 leading-7 text-zinc-600">
              Esto recién comienza. Si entras ahora, entras desde el inicio.
            </p>

            <p className="mt-6 text-sm text-zinc-500">— Founder, Nicolás</p>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card
                title="Athelete Wear"
                desc="Drops minimalistas. Calidad, fit y presencia. Packaging premium con experiencia."
              />
              <Card
                title="App Athelete Intelligence"
                desc="Planificación y seguimiento. Rutinas, hábitos y progreso con enfoque inteligente."
              />
              <Card
                title="Gimnasio (próximamente)"
                desc="Un espacio físico diseñado con estándares de orden, estética y rendimiento."
              />
              <Card
                title="Comunidad & retos"
                desc="Disciplina colectiva. Retos, logros y recompensas para sostener adherencia."
              />
            </div>

            <div className="mt-10 rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.26)]  transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] p-6">
              <p className="text-sm font-medium text-zinc-900"></p>
              <p className="mt-2 text-sm text-zinc-600">
                Regístrate para enterarte primero de: lanzamiento de la app,
                próximos drops de Wear y novedades del gimnasio físico (en
                camino).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="registro" className="border-t border-zinc-200">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
              Lista de acceso
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Accede antes que el resto.
            </h3>

            <p className="mt-4 text-zinc-600">
              Deja tus datos y te avisamos primero cuando esté listo: app,
              próximos drops y el progreso del gimnasio físico.
            </p>
          </div>

          <form className="mx-auto mt-10 max-w-2xl space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Nombre" name="name" placeholder="Tu nombre" />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
              />
            </div>

            <Input
              label="Instagram (opcional)"
              name="instagram"
              placeholder="@tuusuario"
            />

            <div className="rounded-2xl border border-zinc-200 p-4 text-left">
              <p className="text-sm font-medium">¿Qué te interesa más?</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <Check label="Wear" name="interest_wear" />
                <Check label="App" name="interest_app" />
                <Check label="Gimnasio" name="interest_gym" />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-zinc-300"
                required
              />
              <label htmlFor="consent" className="text-sm text-zinc-600">
                Acepto recibir novedades de Athelete (puedo salir cuando
                quiera).
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition"
            >
              Unirme
            </button>

            <p className="pt-2 text-center text-xs text-zinc-500">
              A T H E L E T E — diseñado con intención.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Athelete. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.16)]  transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
      <p className="text-sm font-semibold tracking-tight text-zinc-900">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
    </div>
  );
}

function Input({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="text-left">
      <label htmlFor={name} className="text-sm font-medium text-zinc-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-black"
      />
    </div>
  );
}

function Check({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex items-center gap-2 text-sm text-zinc-700">
      <input
        type="checkbox"
        name={name}
        className="h-4 w-4 rounded border-zinc-300"
      />
      {label}
    </label>
  );
}
