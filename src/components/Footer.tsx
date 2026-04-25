import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">Shalla Wellness Center</h3>
          <p className="mt-4 max-w-md leading-7 text-slate-300">
            Promoting preventive healthcare and metabolic wellness through
            science-based, culturally adapted solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-300">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-300">Contact</h4>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>Platinum Plaza, House no. 386</p>
            <p>5th floor, Addis Ababa, Ethiopia</p>
            <p>0920244516 / 0988035023</p>
            <p>Shallawell7@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 Shalla Wellness Center. All rights reserved.
      </div>
    </footer>
  );
}