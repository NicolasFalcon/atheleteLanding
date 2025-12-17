/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

import BannerTop from "../app/assets/athlete-top.png";
import BannerBottom from "../app/assets/banner-bottom.png";
import Logo from "../app/assets/logo1.png";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      instagram: String(form.get("instagram") || ""),
      gender: String(form.get("gender") || ""),
      interest_wear: Boolean(form.get("interest_wear")),
      interest_app: Boolean(form.get("interest_app")),
      interest_gym: Boolean(form.get("interest_gym")),
      consent: Boolean(form.get("consent")),
      source: "landing",
    };

    try {
      const r = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json();

      if (!r.ok || data?.ok === false) throw new Error(data?.error || "Error");

      setStatus("ok");
      setMsg("Listo. Estás dentro. Te avisaremos primero.");
    } catch (err: any) {
      console.log("Error submitting lead:", err);
      setStatus("error");
      setMsg("Ups. No se pudo enviar. Intenta otra vez. ❌");
    }
  }

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

          {status === "ok" ? (
            <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.40)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200">
                {/* Check */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4 className="mt-6 text-2xl font-semibold tracking-tight">
                Gracias.
              </h4>
              <p className="mt-3 text-zinc-600">
                Ya estás en la lista. Te avisaremos primero cuando Athelete esté
                listo.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setMsg("");
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition"
                >
                  Registrar otro
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 max-w-2xl space-y-4"
            >
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

              {/* GÉNERO */}
              <div className="rounded-2xl border border-zinc-200 p-4 text-left">
                <p className="text-sm font-medium">Género</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <Radio label="Hombre" name="gender" value="Hombre" />
                  <Radio label="Mujer" name="gender" value="Mujer" />
                  <Radio label="Otro" name="gender" value="Otro" />
                </div>
              </div>

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
                disabled={status === "loading"}
                className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Unirme"}
              </button>

              {status === "error" && (
                <p className="pt-2 text-center text-sm text-red-600">{msg}</p>
              )}

              <p className="pt-2 text-center text-xs text-zinc-500">
                A T H E L E T E — diseñado con intención.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Social icons */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <SocialIcon
              href="https://www.instagram.com/athelete_official/"
              label="Instagram"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5-2.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
              }
            />

            <SocialIcon
              href="https://x.com/"
              label="X"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M18.9 2H22l-6.8 7.77L23 22h-6.8l-5.33-6.82L4.9 22H2l7.34-8.4L1 2h6.97l4.82 6.14L18.9 2Zm-1.2 18h1.72L7.25 3.88H5.41L17.7 20Z" />
                </svg>
              }
            />

            <SocialIcon
              href="https://tiktok.com/"
              label="TikTok"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M16 2c.3 2.6 1.86 4.35 4.5 4.5v3.02c-1.6.06-3-.46-4.5-1.4v6.64c0 4.03-3.1 7.24-7.2 7.24-3.97 0-7.3-3.1-7.3-7.24 0-4.02 3.2-7.24 7.3-7.24.5 0 1 .06 1.48.18v3.35a3.9 3.9 0 0 0-1.48-.3c-2.17 0-3.93 1.74-3.93 4.01 0 2.28 1.76 4.02 3.93 4.02 2.35 0 3.86-1.58 3.86-4.35V2H16Z" />
                </svg>
              }
            />
          </div>

          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Athelete. All rights reserved.
          </div>
        </div>
      </footer>
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

function Radio({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: string;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-zinc-700">
      <input
        type="radio"
        name={name}
        value={value}
        className="h-4 w-4 border-zinc-300"
      />
      {label}
    </label>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.16)]  transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] ">
      <p className="text-sm font-semibold tracking-tight text-zinc-900">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
    >
      {icon}
    </a>
  );
}
