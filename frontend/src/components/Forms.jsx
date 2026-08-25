import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, CalendarCheck, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full bg-transparent border-0 border-b border-ink/20 px-0 py-4 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill your name, email and a short message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks — we will write back within one working day.");
      setForm({ name: "", email: "", school: "", role: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        "Could not send message. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Please review the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="grid gap-2"
      data-testid="contact-form"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Your name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Ananya Sharma"
            className={inputCls}
            data-testid="contact-name"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="you@school.in"
            className={inputCls}
            data-testid="contact-email"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            School / Group
          </label>
          <input
            name="school"
            value={form.school}
            onChange={handle}
            placeholder="Delhi Public School, Sector 45"
            className={inputCls}
            data-testid="contact-school"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Your role
          </label>
          <input
            name="role"
            value={form.role}
            onChange={handle}
            placeholder="Promoter / Head of School"
            className={inputCls}
            data-testid="contact-role"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
          Tell us what needs to change
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          rows={4}
          placeholder="Where is the system breaking today?"
          className={`${inputCls} resize-none`}
          data-testid="contact-message"
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-brand">
          We reply within one working day
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-ink text-paper hover:bg-orange-brand transition-colors disabled:opacity-60"
          data-testid="contact-submit"
        >
          <span className="text-[14px] font-medium">
            {loading ? "Sending…" : "Send message"}
          </span>
          <span className="w-9 h-9 rounded-full bg-orange-brand group-hover:bg-paper text-paper group-hover:text-ink flex items-center justify-center transition-colors">
            <Send className="w-4 h-4" />
          </span>
        </button>
      </div>
    </form>
  );
};

export const DemoForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    students: "",
    date: "",
    time: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.school || !form.date) {
      toast.error("Please fill name, email, school and a preferred date.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/demo`, form);
      toast.success("Demo requested. We will confirm the slot within 24 hours.");
      setForm({
        name: "",
        email: "",
        school: "",
        students: "",
        date: "",
        time: "",
        notes: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        "Could not book the demo. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Please review the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="grid gap-2"
      data-testid="demo-form"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Your name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Ananya Sharma"
            className={inputCls}
            data-testid="demo-name"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="you@school.in"
            className={inputCls}
            data-testid="demo-email"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            School / Group
          </label>
          <input
            name="school"
            value={form.school}
            onChange={handle}
            placeholder="Group name"
            className={inputCls}
            data-testid="demo-school"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Approx. student count
          </label>
          <input
            name="students"
            value={form.students}
            onChange={handle}
            placeholder="1200"
            className={inputCls}
            data-testid="demo-students"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Preferred date
          </label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handle}
            className={inputCls}
            data-testid="demo-date"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
            Preferred time
          </label>
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handle}
            className={inputCls}
            data-testid="demo-time"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
          What would you like to see?
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handle}
          rows={3}
          placeholder="KOSMOS ERP, Playbook Agent, Review dashboards…"
          className={`${inputCls} resize-none`}
          data-testid="demo-notes"
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-brand">
          45-minute walkthrough. Zero decks.
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-orange-brand text-paper hover:brightness-110 transition disabled:opacity-60"
          data-testid="demo-submit"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="text-[14px] font-medium">
            {loading ? "Booking…" : "Book a demo"}
          </span>
          <span className="w-9 h-9 rounded-full bg-paper text-ink flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </form>
  );
};

export const ContactBlock = ({ children, title, num, kicker, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
    className="bg-cream border border-line p-6 md:p-10"
  >
    <div className="flex items-baseline gap-4 mb-6">
      <span className="font-editorial italic text-[56px] leading-none text-orange-brand">
        {num}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
          {kicker}
        </div>
        <h3 className="font-editorial text-[32px] md:text-[36px] leading-[1] tracking-tight mt-1">
          {title}
        </h3>
      </div>
    </div>
    {children}
  </motion.div>
);
