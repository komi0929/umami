"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  storeUrl: string;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
}

interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  placeholder?: string;
  icon: React.ReactNode;
}

// Icon Components
const CompanyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const PersonIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.015-5.099-3.288-6.114-6.116l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

// Reusable Floating Field Component
function FloatingField({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  error,
  placeholder = "",
  icon,
}: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.trim().length > 0;

  return (
    <div className="flex flex-col">
      <div
        className={`relative rounded-xl bg-white border transition-all duration-300 group ${
          error
            ? "border-error bg-error/5 shadow-[0_0_12px_rgba(192,112,112,0.15)]"
            : focused
            ? "border-accent shadow-[0_0_20px_rgba(184,151,126,0.15)]"
            : "border-border hover:border-border-dark hover:bg-surface-warm"
        }`}
      >
        {/* Field Icon */}
        <div
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 pointer-events-none ${
            error ? "text-error" : focused ? "text-accent" : "text-text-muted group-hover:text-text-secondary"
          }`}
        >
          {icon}
        </div>

        {/* Floating Label */}
        <label
          htmlFor={id}
          className={`absolute left-11 transition-all duration-200 pointer-events-none font-medium ${
            isFloating
              ? "top-1.5 text-[10px] tracking-wider uppercase " +
                (error ? "text-error font-semibold" : focused ? "text-accent font-semibold" : "text-text-secondary")
              : "top-3.5 text-xs sm:text-sm text-text-muted"
          }`}
        >
          {label} {required && <span className="text-error font-bold ml-0.5">*</span>}
        </label>

        {/* Input */}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused ? placeholder : ""}
          className={`w-full pl-11 pr-4 text-base text-primary bg-transparent focus:outline-none transition-all duration-200 ${
            isFloating ? "pt-5 pb-1.5" : "py-3.5"
          }`}
        />

        {/* Accent Underline Animation Bar */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] w-full rounded-b-xl transition-transform duration-300 origin-left ${
            error
              ? "bg-error scale-x-100"
              : focused
              ? "gradient-accent scale-x-100"
              : "scale-x-0"
          }`}
        />
      </div>

      {/* Japanese Error Message */}
      {error && (
        <p className="mt-1.5 text-xs text-error flex items-center gap-1 font-medium animate-fade-in">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export default function ConversionCTA() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.05,
  });
  const [formRef, formVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const [whitepaperRef, whitepaperVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  // Sample Request Form State
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    storeUrl: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Waitlist State
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistError, setWaitlistError] = useState("");
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.companyName.trim())
      errors.companyName = "会社名・店舗名をご入力ください";
    if (!formData.contactPerson.trim())
      errors.contactPerson = "ご担当者名をご入力ください";
    if (!formData.email.trim()) {
      errors.email = "メールアドレスをご入力ください";
    } else if (!validateEmail(formData.email)) {
      errors.email = "正しいメールアドレスをご入力ください";
    }
    if (!formData.phone.trim()) {
      errors.phone = "お電話番号をご入力ください";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormSubmitting(false);
    setFormSuccess(true);
  };

  const handleWaitlistSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) {
      setWaitlistError("メールアドレスをご入力ください");
      return;
    }
    if (!validateEmail(waitlistEmail)) {
      setWaitlistError("正しいメールアドレスをご入力ください");
      return;
    }
    setWaitlistError("");
    setWaitlistSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setWaitlistSubmitting(false);
    setWaitlistSuccess(true);
  };

  return (
    <section
      id="conversion-cta"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-surface-muted overflow-hidden"
      aria-label="お問い合わせ・サンプル請求"
    >
      {/* Inline styles for celebration particles animation */}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg) scale(0.8);
            opacity: 1;
          }
          70% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(320px) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out forwards" } : {}}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs tracking-[0.3em] text-accent uppercase font-medium bg-white border border-border-light shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            UMAMI VANILLA | Contact &amp; Sample Request
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary tracking-tight">
            まずは、味で判断してください。
          </h2>
          <p className="mt-4 text-sm lg:text-base text-secondary max-w-2xl mx-auto">
            店舗・事業主様限定で『UMAMI VANILLA』の味わい・口溶けを直接ご体感いただける無料サンプルをお届けします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ===== Part 1: Sample Request Form ===== */}
          <div
            ref={formRef}
            className={`lg:col-span-3 ${formVisible ? "" : "opacity-0"}`}
            style={formVisible ? { animation: "slide-in-left 0.8s ease-out forwards" } : {}}
          >
            <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-border-light shadow-xl relative">
              
              {/* Scarcity Message Box */}
              <div className="mb-8 relative rounded-xl p-[1px] overflow-hidden group">
                {/* Subtle Animated Border Background */}
                <div className="absolute inset-0 gradient-accent bg-[length:200%_auto] animate-shimmer rounded-xl opacity-20" />
                
                {/* Inner Scarcity Content */}
                <div className="relative rounded-[11px] bg-accent-lighter p-5 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white text-accent-dark border border-accent/30 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark animate-ping" />
                      1日60L限定生産枠
                    </span>
                    <span className="text-[11px] text-accent-dark/80 font-medium">※クラフト生産につき数に限りあり</span>
                  </div>
                  <p className="text-xs sm:text-sm text-accent-dark leading-relaxed">
                    品質を維持したクラフト生産（
                    <span className="text-accent-dark font-bold bg-white px-1.5 py-0.5 rounded border border-accent/30">1日最大60リットル</span>
                    ）のため、新規のお取引枠には限りがございます。まずは無料サンプル（WELLNESS
                    / UMAMI
                    各1カップ）で、その圧倒的な質感をお確かめください。
                  </p>
                </div>
              </div>

              {formSuccess ? (
                /* Celebratory Success State with Confetti Animation */
                <div className="relative text-center py-12 px-4 overflow-hidden" style={{ animation: "scale-in 0.5s ease-out forwards" }}>
                  {/* Confetti Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const colors = ['#b8977e', '#e8e3db', '#8b9e8b', '#f8f6f2', '#6e876e'];
                      const bg = colors[i % colors.length];
                      const left = `${(i * 17) % 100}%`;
                      const size = `${(i % 3) * 3 + 6}px`;
                      const delay = `${(i % 5) * 0.18}s`;
                      const duration = `${2.5 + (i % 4) * 0.5}s`;
                      const isCircle = i % 2 === 0;
                      return (
                        <span
                          key={i}
                          className="absolute top-0 animate-[confetti-fall_3s_ease-in-out_infinite]"
                          style={{
                            left,
                            width: size,
                            height: isCircle ? size : `${parseInt(size) * 1.6}px`,
                            backgroundColor: bg,
                            borderRadius: isCircle ? '50%' : '2px',
                            opacity: 0.85,
                            animationDelay: delay,
                            animationDuration: duration,
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Celebratory Badge & Icon */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-muted border border-success/30 mb-6 shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center animate-pulse">
                      <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <span className="block text-xs font-bold tracking-[0.2em] text-accent uppercase mb-2">
                    UMAMI VANILLA Sample Request
                  </span>

                  <h3 className="text-2xl font-bold text-primary mb-3 tracking-tight">
                    サンプル請求を受け付けました
                  </h3>

                  <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed mb-8">
                    2営業日以内にご連絡いたします。楽しみにお待ちください。
                  </p>

                  {/* Order Summary Confirmation Card */}
                  <div className="max-w-sm mx-auto p-4 rounded-xl bg-surface-muted border border-border-light text-left text-xs text-secondary space-y-2.5 shadow-sm">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-text-muted">請求品目:</span>
                      <span className="font-semibold text-primary">UMAMI VANILLA 無料サンプル</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-text-muted">セット内容:</span>
                      <span className="text-primary">WELLNESS / UMAMI 各1カップ</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">お届け目安:</span>
                      <span className="text-accent font-bold">2営業日以内に発送</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Sample Request Form */
                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div className="sm:col-span-2">
                      <FloatingField
                        id="companyName"
                        label="会社名・店舗名"
                        required
                        value={formData.companyName}
                        onChange={(val) => setFormData({ ...formData, companyName: val })}
                        error={formErrors.companyName}
                        placeholder="例：株式会社〇〇 / Cafe UMAMI"
                        icon={<CompanyIcon />}
                      />
                    </div>

                    {/* Contact Person */}
                    <div>
                      <FloatingField
                        id="contactPerson"
                        label="ご担当者名"
                        required
                        value={formData.contactPerson}
                        onChange={(val) => setFormData({ ...formData, contactPerson: val })}
                        error={formErrors.contactPerson}
                        placeholder="例：山田 太郎"
                        icon={<PersonIcon />}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <FloatingField
                        id="email"
                        label="メールアドレス"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(val) => setFormData({ ...formData, email: val })}
                        error={formErrors.email}
                        placeholder="例：info@example.com"
                        icon={<EmailIcon />}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <FloatingField
                        id="phone"
                        label="お電話番号"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(val) => setFormData({ ...formData, phone: val })}
                        error={formErrors.phone}
                        placeholder="例：03-1234-5678"
                        icon={<PhoneIcon />}
                      />
                    </div>

                    {/* Store URL */}
                    <div>
                      <FloatingField
                        id="storeUrl"
                        label="店舗URL（任意）"
                        type="url"
                        value={formData.storeUrl}
                        onChange={(val) => setFormData({ ...formData, storeUrl: val })}
                        placeholder="例：https://your-store.com"
                        icon={<LinkIcon />}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                     id="sample-request-submit"
                     type="submit"
                     disabled={formSubmitting}
                     className="mt-8 w-full relative inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider text-on-dark gradient-accent rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 group overflow-hidden"
                  >
                    {/* Hover Sheen Light Beam Effect */}
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                    {formSubmitting ? (
                      <div className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5 text-on-dark" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>サンプル請求を送信中...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>無料サンプルを請求する</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    )}
                  </button>
                </form>
              )}

              {/* Trust Signals Section */}
              <div className="mt-8 pt-6 border-t border-border-light">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center">
                  {/* Signal 1: Completely Free */}
                  <div className="flex flex-col items-center p-3 rounded-xl bg-surface-muted border border-border hover:border-accent hover:bg-white transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-white text-text-muted flex items-center justify-center mb-1.5 group-hover:scale-110 group-hover:text-accent transition-all shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13C10.832 21 4 17.67 4 11V6.368c0-.527.355-.986.866-1.111l6.5-1.585a1.5 1.5 0 01.768 0l6.5 1.585c.511.125.866.584.866 1.111V11c0 6.67-6.832 10-8 10z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary">完全無料</span>
                    <span className="text-[10px] text-text-muted mt-0.5">サンプル・送料0円</span>
                  </div>

                  {/* Signal 2: No Sales Calls */}
                  <div className="flex flex-col items-center p-3 rounded-xl bg-surface-muted border border-border hover:border-accent hover:bg-white transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-white text-text-muted flex items-center justify-center mb-1.5 group-hover:scale-110 group-hover:text-accent transition-all shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary">営業電話なし</span>
                    <span className="text-[10px] text-text-muted mt-0.5">強引な勧誘一切なし</span>
                  </div>

                  {/* Signal 3: Ships in 2 Biz Days */}
                  <div className="flex flex-col items-center p-3 rounded-xl bg-surface-muted border border-border hover:border-accent hover:bg-white transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-white text-text-muted flex items-center justify-center mb-1.5 group-hover:scale-110 group-hover:text-accent transition-all shadow-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary">2営業日以内に発送</span>
                    <span className="text-[10px] text-text-muted mt-0.5">全国迅速配送</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ===== Part 2: Whitepaper Waitlist ===== */}
          <div
            ref={whitepaperRef}
            className={`lg:col-span-2 ${whitepaperVisible ? "" : "opacity-0"}`}
            style={whitepaperVisible ? { animation: "slide-in-right 0.8s ease-out 0.2s both" } : {}}
          >
            <div className="bg-white rounded-3xl overflow-hidden border border-border-light hover:border-sage transition-all duration-500 h-full flex flex-col shadow-xl relative group">
              {/* Whitepaper Image Area */}
              <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                <Image
                  src="/images/whitepaper-blur.png"
                  alt="インバウンド対応ヴィーガンデザート高収益化ガイド"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                
                {/* Urgent Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-white text-sage-dark border border-sage-light shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-dark animate-ping" />
                    公開前限定
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-sage-light text-sage-dark border border-sage-light">
                    優先案内枠
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 leading-snug tracking-tight">
                    【近日公開】インバウンド単価を上げる！
                    <br />
                    ヴィーガンデザート高収益化ガイド
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                    導入事例・原価設計・メニュー構成のベストプラクティスをまとめたホワイトペーパーを準備中です。
                  </p>

                  {/* Micro Urgency Banner */}
                  <div className="p-3 rounded-xl bg-sage/5 border border-sage/20 text-xs text-sage-dark mb-6 flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <span>リスト登録者限定で、一般公開前に先行ダウンロードURLをメールで優先配信いたします。</span>
                  </div>
                </div>

                {waitlistSuccess ? (
                  <div className="text-center py-6 bg-sage/5 border border-sage/20 rounded-2xl p-4" style={{ animation: "scale-in 0.5s ease-out forwards" }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-light text-sage-dark mb-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-primary mb-1">優先登録完了</h4>
                    <p className="text-xs text-secondary">
                      公開日にメールにて優先ダウンロードURLをお届けします。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} noValidate>
                    <div className="flex flex-col gap-3">
                      <FloatingField
                        id="waitlist-email"
                        label="メールアドレス"
                        type="email"
                        required
                        value={waitlistEmail}
                        onChange={(val) => {
                          setWaitlistEmail(val);
                          if (waitlistError) setWaitlistError("");
                        }}
                        error={waitlistError}
                        placeholder="例：info@example.com"
                        icon={<EmailIcon />}
                      />

                      <button
                        id="waitlist-submit"
                        type="submit"
                        disabled={waitlistSubmitting}
                        className="w-full relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider text-on-dark bg-sage hover:bg-sage-dark rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group overflow-hidden"
                      >
                        {waitlistSubmitting ? (
                          <div className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-on-dark" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>登録処理中...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>公開待ちリストに登録する</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
