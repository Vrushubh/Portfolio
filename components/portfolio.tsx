"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2, Database, Download,
  Github, Linkedin, Mail, MapPin, Menu, MessageSquare, Send, Server, Sparkles,
  Table2, Workflow, Wrench, X, Layers, Terminal, Cpu, ExternalLink
} from "lucide-react";
import { experience, profile, projects, skillGroups, socialLinks, strengths } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { code: Code2, server: Server, database: Database, table: Table2, workflow: Workflow, sparkles: Sparkles, wrench: Wrench };
const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: "easeOut" as const } } };

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }}>
    <span className="eyebrow">{label}</span><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}
  </motion.div>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | "idle"; text: string }>({ type: "idle", text: "" });
  const [sending, setSending] = useState(false);
  const nav = ["About", "Skills", "Experience", "Projects", "Contact"];

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSending(true); setStatus({ type: "idle", text: "" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Message could not be sent. Please email me directly.");
      setStatus({ type: "success", text: "Thanks — your message has been sent. I’ll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) { setStatus({ type: "error", text: err instanceof Error ? err.message : "Something went wrong." }); }
    finally { setSending(false); }
  }

  return <main>
    <header className="fixed top-0 z-50 w-full border-b border-white/[.06] bg-[#090b10]/85 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Vrushubh Gandhi home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-blue-300/30 bg-blue-300/[.09] text-sm font-black tracking-tight text-blue-200">VG</span>
          <span className="text-sm font-semibold tracking-tight">Vrushubh Gandhi<span className="ml-2 text-blue-300">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">{nav.map(n => <a key={n} className="nav-link" href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
        <div className="hidden md:block"><a className="btn btn-ghost !px-4 !py-2.5" href="/resume.pdf" download><Download size={14}/> Download Resume</a></div>
        <button className="md:hidden text-slate-200" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className="border-t border-white/10 bg-[#0c1018] px-6 py-5 md:hidden">{nav.map(n => <a key={n} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-slate-300" href={`#${n.toLowerCase()}`}>{n}</a>)}<a className="btn btn-primary mt-3" href="/resume.pdf" download>Download Resume <Download size={14}/></a></nav>}
    </header>

    <section id="home" className="relative flex min-h-[780px] items-center overflow-hidden pt-24 hero-glow">
      <div className="grid-bg absolute inset-0 opacity-80"/>
      <div className="orb left-[58%] top-[18%] h-64 w-64 opacity-50"/>
      <div className="orb right-[4%] bottom-[8%] h-36 w-36 opacity-40"/>
      <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
          <motion.div variants={reveal} className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.06] px-3 py-2 text-[11px] font-medium text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]"/> Open to meaningful opportunities</motion.div>
          <motion.p variants={reveal} className="mb-3 text-sm text-slate-400">Hi, I’m</motion.p>
          <motion.h1 variants={reveal} className="text-5xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl xl:text-[76px]">Vrushubh<br/><span className="bg-gradient-to-r from-blue-200 via-blue-400 to-violet-400 bg-clip-text text-transparent">Gandhi.</span></motion.h1>
          <motion.h2 variants={reveal} className="mt-7 max-w-[640px] text-xl font-medium leading-snug tracking-tight text-slate-200 sm:text-2xl">Building scalable backend systems & intelligent web applications.</motion.h2>
          <motion.p variants={reveal} className="mt-5 max-w-[560px] text-[14px] leading-8 text-slate-400">{profile.summary}</motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3"><a className="btn btn-primary" href="#projects">View My Projects <ArrowRight size={15}/></a><a className="btn btn-ghost" href="/resume.pdf" download>Download Resume <Download size={14}/></a></motion.div>
          <motion.div variants={reveal} className="mt-9 flex items-center gap-5 text-slate-400">
            <a className="transition hover:text-white" href="mailto:vrushubhgandhi717@gmail.com" aria-label="Email"><Mail size={18}/></a>
            {socialLinks.map(s => <a key={s.label} className="transition hover:text-white" href={s.href || "#contact"} aria-label={s.label} title={s.href ? s.label : `Add ${s.label} URL in lib/data.ts`}><span className="text-xs font-semibold">{s.label}</span></a>)}
            <span className="ml-1 h-px w-12 bg-slate-700"/><span className="flex items-center gap-2 text-xs"><MapPin size={13}/> Pune, India</span>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-6 rounded-[34px] bg-blue-500/[.07] blur-3xl"/>
          <div className="panel relative overflow-hidden p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[.08] pb-4"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-400/80"/><i className="h-2 w-2 rounded-full bg-amber-300/80"/><i className="h-2 w-2 rounded-full bg-emerald-300/80"/></div><span className="font-mono text-[10px] text-slate-500">backend.engineer.cs</span><Terminal size={15} className="text-slate-500"/></div>
            <div className="py-7 font-mono text-[12px] leading-7 sm:text-[13px]">
              <p className="text-slate-500">// A little about how I build</p>
              <p><span className="text-violet-300">public class</span> <span className="text-blue-200">Developer</span></p><p className="pl-4">{"{"}</p>
              <p className="pl-8"><span className="text-sky-300">string</span> Focus = <span className="text-emerald-300">"Backend systems"</span>;</p>
              <p className="pl-8"><span className="text-sky-300">string</span> Stack = <span className="text-emerald-300">"C# · .NET · SQL"</span>;</p>
              <p className="pl-8"><span className="text-sky-300">string</span> Mindset = <span className="text-emerald-300">"Clean & reliable"</span>;</p>
              <p className="pl-8"><span className="text-sky-300">bool</span> ExploringAI = <span className="text-violet-300">true</span>;</p><p className="pl-4">{"}"}</p>
              <div className="mt-8 flex items-center gap-2 text-slate-500"><span className="h-4 w-2 animate-pulse bg-blue-300"/> <span>Ready to build something useful</span></div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-white/[.08] pt-4 sm:grid-cols-3">
              {["C#", ".NET", "ASP.NET Core", "SQL Server", "EF Core", "REST APIs"].map((t,i)=><span key={t} className="flex items-center gap-2 rounded-lg border border-white/[.07] bg-white/[.025] px-3 py-2 text-[11px] text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-blue-300"/>{t}</span>)}
            </div>
          </div>
          <div className="absolute -left-5 top-24 hidden rounded-xl border border-blue-300/20 bg-[#111a2a]/90 px-4 py-3 shadow-2xl sm:block"><Braces className="mb-1 text-blue-300" size={18}/><span className="text-[10px] text-slate-300">Clean architecture</span></div>
          <div className="absolute -right-4 bottom-16 hidden rounded-xl border border-violet-300/20 bg-[#171326]/90 px-4 py-3 shadow-2xl sm:block"><Sparkles className="mb-1 text-violet-300" size={18}/><span className="text-[10px] text-slate-300">AI exploration</span></div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-slate-500 md:flex">Scroll to explore <ArrowDown size={13}/></a>
    </section>

    <section id="about" className="section border-t border-white/[.04]">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><SectionHeading label="About me" title="A little about me."/><div className="mt-8 flex items-center gap-3 text-xs text-slate-400"><MapPin size={15} className="text-blue-300"/> Pune, Maharashtra, India</div><div className="mt-4 flex items-center gap-3 text-xs text-slate-400"><Mail size={15} className="text-blue-300"/> {profile.email}</div></div>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once:true }} className="space-y-5 text-[14px] leading-8 text-slate-400">
          <p>I’m a Computer Engineering graduate from <strong className="font-medium text-slate-200">Savitribai Phule Pune University</strong>, working as a .NET Developer at <strong className="font-medium text-slate-200">Humanus Global Private Limited</strong>.</p>
          <p>My work centers on backend development: building RESTful APIs, shaping application business logic, working with relational databases, and keeping services maintainable through OOP, SOLID principles, and dependency injection.</p>
          <p>I enjoy understanding how systems fit together — from API design and data access to responsive interfaces. Alongside core .NET development, I’m exploring Generative AI, LLM integrations, prompt engineering, and RAG to build more intelligent applications.</p>
          <p>I’m motivated by continuous learning, thoughtful problem-solving, and turning practical requirements into reliable software.</p>
          <div className="grid grid-cols-2 gap-3 pt-5 sm:grid-cols-3">
            {[["2026","B.E. Computer Engineering"],["Apr 2025","Professional role began"],[".NET","Primary development stack"]].map(([v,l])=><div key={v} className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"><div className="text-xl font-semibold tracking-tight text-blue-200">{v}</div><div className="mt-2 text-[10px] leading-5 text-slate-500">{l}</div></div>)}
          </div>
        </motion.div>
      </div>
    </section>

    <section id="skills" className="section border-y border-white/[.04] bg-[#0c0f16]">
      <div className="container"><SectionHeading label="Technical toolkit" title="Tools of the trade." copy="A practical toolkit across .NET backend development, relational data, application architecture, and emerging AI workflows."/>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g,i)=>{const Icon=iconMap[g.icon];return <motion.div key={g.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.15}} transition={{delay:i*.04}} className="skill-card panel p-5"><div className="mb-5 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-300/[.09] text-blue-200"><Icon size={17}/></span><h3 className="text-sm font-semibold">{g.title}</h3></div><div className="flex flex-wrap gap-2">{g.skills.map(s=><span key={s} className="tag">{s}</span>)}</div></motion.div>})}
        </div>
      </div>
    </section>

    <section id="experience" className="section">
      <div className="container"><SectionHeading label="Professional experience" title="Where I make an impact." copy="Building software in a professional team environment, with a focus on dependable backend services and practical delivery."/>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.15}} className="relative mt-12 pl-7 sm:pl-10">
          <div className="absolute bottom-4 left-[7px] top-2 w-px bg-gradient-to-b from-blue-300/70 via-blue-300/20 to-transparent sm:left-[15px]"/>
          <div className="timeline-dot absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-blue-200 bg-[#101b2d] sm:left-[8px]"/>
          <div className="panel p-6 sm:p-9">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-xs font-semibold text-blue-200">{experience.period}</p><h3 className="mt-2 text-xl font-semibold tracking-tight">{experience.company}</h3><p className="mt-1 text-sm text-slate-400">{experience.role} <span className="mx-2 text-slate-600">·</span>{experience.location}</p></div><span className="w-fit rounded-lg border border-emerald-300/20 bg-emerald-300/[.06] px-3 py-2 text-[10px] font-medium text-emerald-200">Current position</span></div>
            <div className="my-7 h-px bg-white/[.07]"/><ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">{experience.points.map(p=><li key={p} className="flex gap-3 text-[12px] leading-6 text-slate-400"><Check size={14} className="mt-1 shrink-0 text-blue-300"/>{p}</li>)}</ul>
          </div>
        </motion.div>
      </div>
    </section>

    <section id="projects" className="section border-y border-white/[.04] bg-[#0c0f16]">
      <div className="container"><SectionHeading label="Selected work" title="Projects with purpose." copy="A snapshot of applications that bring together backend engineering, data workflows, and emerging AI capabilities."/>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((p,i)=><motion.article key={p.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.15}} className="project-card panel overflow-hidden">
            <div className="relative flex h-[220px] items-center justify-center overflow-hidden border-b border-white/[.07] bg-[radial-gradient(ellipse_at_center,rgba(75,117,197,.18),transparent_65%)]">
              <div className="absolute inset-0 grid-bg opacity-50"/>
              {p.visual==="employees" ? <div className="relative w-[78%] rounded-xl border border-blue-200/20 bg-[#0b111d]/95 p-4 shadow-2xl"><div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-5 w-5 rounded bg-blue-300/20"/><span className="text-[9px] text-slate-300">People / Employees</span></div><span className="rounded bg-blue-300/15 px-2 py-1 text-[8px] text-blue-200">+ Add employee</span></div><div className="grid grid-cols-3 gap-2">{["Total staff","Departments","Active"].map((x,j)=><div key={x} className="rounded border border-white/[.07] bg-white/[.025] p-2"><div className="text-[7px] text-slate-500">{x}</div><div className="mt-1 text-sm text-slate-200">{["—","—","—"][j]}</div></div>)}</div><div className="mt-3 space-y-2">{[1,2,3].map(x=><div key={x} className="flex items-center gap-2 border-t border-white/[.05] pt-2"><span className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-300/40 to-violet-400/20"/><span className="h-1.5 w-20 rounded bg-slate-600/50"/><span className="ml-auto h-1.5 w-10 rounded bg-emerald-300/30"/></div>)}</div></div> : <div className="relative w-[78%] rounded-xl border border-violet-200/20 bg-[#0c101b]/95 p-4 shadow-2xl"><div className="mb-4 flex items-center gap-2"><Sparkles size={14} className="text-violet-300"/><span className="text-[9px] text-slate-300">Document assistant</span><span className="ml-auto text-[8px] text-slate-500">AI workspace</span></div><div className="rounded-lg bg-white/[.035] p-3 text-[9px] leading-5 text-slate-400">Summarize this document and highlight the key decisions...</div><div className="ml-7 mt-3 rounded-lg border border-violet-300/15 bg-violet-300/[.06] p-3 text-[9px] leading-5 text-slate-300"><span className="mb-1 block text-violet-200">Assistant response</span>Here are the main points, decisions, and follow-up actions extracted from your document...</div><div className="mt-3 flex items-center gap-2 rounded border border-white/[.08] px-3 py-2 text-[8px] text-slate-600">Ask a question <ArrowUpRight className="ml-auto" size={11}/></div></div>}
              <span className="absolute left-5 top-5 font-mono text-[10px] text-slate-600">{p.number} / FEATURED</span>
            </div>
            <div className="p-6 sm:p-7"><div className="text-[10px] font-semibold uppercase tracking-[.14em] text-blue-200">{p.type}</div><h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3><p className="mt-3 text-[12px] leading-7 text-slate-400">{p.description}</p><ul className="mt-4 grid gap-2 sm:grid-cols-2">{p.details.map(d=><li key={d} className="flex gap-2 text-[10px] leading-5 text-slate-400"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-300"/>{d}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2">{p.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="mt-6 flex gap-3 border-t border-white/[.07] pt-5"><a href={p.github || "#contact"} onClick={e=>{if(!p.github){e.preventDefault();document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});}}} className="btn btn-ghost !px-3 !py-2 text-[11px]"><Github size={14}/> GitHub {p.github && <ExternalLink size={11}/>}</a>{p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-ghost !px-3 !py-2 text-[11px]">Live demo <ArrowUpRight size={13}/></a> : <span className="self-center text-[10px] text-slate-600">Demo link not provided</span>}</div></div>
          </motion.article>)}
        </div>
        <p className="mt-5 text-[10px] text-slate-600">Project previews are illustrative UI concepts. Replace with actual screenshots and repository/demo URLs when available.</p>
      </div>
    </section>

    <section className="section">
      <div className="container"><SectionHeading label="How I contribute" title="What I bring to the team." copy="A combination of engineering fundamentals, practical delivery, and curiosity about what’s next."/>
        <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{strengths.map((s,i)=><motion.div key={s.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} className="strength-card panel p-5"><div className="mb-5 flex items-center justify-between"><span className="font-mono text-[10px] text-blue-300/70">0{i+1}</span><ArrowUpRight size={15} className="text-slate-600"/></div><h3 className="text-sm font-semibold">{s.title}</h3><p className="mt-2 text-[11px] leading-6 text-slate-400">{s.text}</p></motion.div>)}</div>
      </div>
    </section>

    <section id="contact" className="section border-t border-white/[.05] bg-[#0c0f16]">
      <div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div><SectionHeading label="Get in touch" title="Let’s build something great together." copy="I'm always interested in connecting with developers, recruiters, and organizations working on meaningful technology."/>
          <div className="mt-9 space-y-5"><a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-sm text-slate-300 hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.03] text-blue-200"><Mail size={17}/></span><span><small className="mb-1 block text-[10px] text-slate-500">Email</small>{profile.email}</span></a><div className="flex items-center gap-4 text-sm text-slate-300"><span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.03] text-blue-200"><MapPin size={17}/></span><span><small className="mb-1 block text-[10px] text-slate-500">Location</small>{profile.location}</span></div><div className="flex items-center gap-4 text-sm text-slate-300"><span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.03] text-blue-200"><Linkedin size={17}/></span><span><small className="mb-1 block text-[10px] text-slate-500">LinkedIn</small><a href="#contact" className="text-slate-400 hover:text-white">Add your LinkedIn profile URL</a></span></div><div className="flex items-center gap-4 text-sm text-slate-300"><span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.03] text-blue-200"><Github size={17}/></span><span><small className="mb-1 block text-[10px] text-slate-500">GitHub</small><a href="#contact" className="text-slate-400 hover:text-white">Add your GitHub profile URL</a></span></div></div>
        </div>
        <form onSubmit={submitContact} className="panel p-6 sm:p-8"><div className="mb-6 flex items-center gap-3"><MessageSquare size={18} className="text-blue-200"/><h3 className="text-sm font-semibold">Send a message</h3></div>
          <div className="grid gap-4 sm:grid-cols-2"><label className="text-[11px] text-slate-400">Name<input required minLength={2} maxLength={80} className="input mt-2" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label className="text-[11px] text-slate-400">Email<input required type="email" maxLength={120} className="input mt-2" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label></div>
          <label className="mt-4 block text-[11px] text-slate-400">Subject<input required minLength={3} maxLength={120} className="input mt-2" placeholder="What would you like to discuss?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/></label>
          <label className="mt-4 block text-[11px] text-slate-400">Message<textarea required minLength={10} maxLength={3000} rows={5} className="input mt-2 resize-y" placeholder="Tell me a little about your idea..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label>
          {status.type!=="idle" && <p role="status" className={`mt-4 text-xs ${status.type==="success"?"text-emerald-300":"text-rose-300"}`}>{status.text}</p>}
          <button disabled={sending} className="btn btn-primary mt-5 w-full disabled:cursor-wait disabled:opacity-60">{sending?"Sending...":"Send Message"} <Send size={14}/></button>
          <p className="mt-3 text-center text-[10px] text-slate-600">Your details are used only to respond to your enquiry.</p>
        </form>
      </div>
    </section>

    <footer className="border-t border-white/[.06] py-8"><div className="container flex flex-col items-center justify-between gap-5 sm:flex-row"><a href="#home" className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg border border-blue-300/30 bg-blue-300/[.08] text-xs font-black text-blue-200">VG</span><span><span className="block text-xs font-semibold">Vrushubh Gandhi</span><span className="text-[10px] text-slate-500">.NET Developer</span></span></a><p className="text-[10px] text-slate-600">© {new Date().getFullYear()} Vrushubh Gandhi. Built with purpose.</p><a href="#home" className="flex items-center gap-2 text-[10px] text-slate-400 transition hover:text-white">Back to top <ArrowUpRight size={13}/></a></div></footer>
  </main>;
}
