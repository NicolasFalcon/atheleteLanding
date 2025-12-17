/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const url =
      "https://script.google.com/macros/s/AKfycbzb8r9cNQzpngvn0XPFm3BLp0CJQQPp0h93CSDKxQbx-4JSrP5ZLqN_-kUsXTRlRobr/exec?token=OkIOQI5zH79gwVVOXh1HKkAhj4B9b9";
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });

    const text = await r.text();

    const ok = r.status >= 200 && r.status < 400;

    console.log(body, "=>", r.status, text);

    try {
      const json = JSON.parse(text);
      return NextResponse.json({ ...json, ok }, { status: 200 });
    } catch {
      return NextResponse.json(
        { ok, status: r.status, raw: text },
        { status: 200 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
