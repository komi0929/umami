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

  const inputClasses =
    "w-full px-4 py-3 bg-charcoal/50 border border-border rounded-lg text-cream placeholder:text-text-muted focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-sm";
  const labelClasses = "block text-sm font-medium text-text-secondary mb-1.5";

  return (
    <section
      id="conversion-cta"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-matte-black overflow-hidden"
      aria-label="お問い合わせ・サンプル請求"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-20 ${sectionVisible ? "" : "opacity-0"}`}
          style={sectionVisible ? { animation: "fade-in-up 0.8s ease-out forwards" } : {}}
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            Contact &amp; Sample Request
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-cream tracking-tight">
            まずは、味で判断してください。
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ===== Part 1: Sample Request Form ===== */}
          <div
            ref={formRef}
            className={`lg:col-span-3 ${formVisible ? "" : "opacity-0"}`}
            style={formVisible ? { animation: "slide-in-left 0.8s ease-out forwards" } : {}}
          >
            <div className="glass rounded-2xl p-8 lg:p-10 border border-border hover:border-gold/10 transition-all duration-500">
              {/* Scarcity Copy */}
              <div className="mb-8 p-4 rounded-xl bg-gold/5 border border-gold/10">
                <p className="text-sm text-text-secondary leading-relaxed">
                  品質を維持したクラフト生産（
                  <span className="text-gold font-bold">1日最大60リットル</span>
                  ）のため、新規のお取引枠には限りがございます。まずは無料サンプル（WELLNESS
                  / UMAMI
                  各1カップ）で、その圧倒的な質感をお確かめください。
                </p>
              </div>

              {formSuccess ? (
                /* Success State */
                <div className="text-center py-12" style={{ animation: "scale-in 0.5s ease-out forwards" }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-2">
                    サンプル請求を受け付けました
                  </h3>
                  <p className="text-text-secondary text-sm">
                    2営業日以内にご連絡いたします。楽しみにお待ちください。
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="companyName" className={labelClasses}>
                        会社名・店舗名 <span className="text-error">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        className={`${inputClasses} ${formErrors.companyName ? "border-error focus:border-error focus:ring-error/20" : ""}`}
                        placeholder="株式会社〇〇 / 〇〇レストラン"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                      />
                      {formErrors.companyName && (
                        <p className="mt-1 text-xs text-error">{formErrors.companyName}</p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label htmlFor="contactPerson" className={labelClasses}>
                        ご担当者名 <span className="text-error">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        className={`${inputClasses} ${formErrors.contactPerson ? "border-error focus:border-error focus:ring-error/20" : ""}`}
                        placeholder="山田 太郎"
                        value={formData.contactPerson}
                        onChange={(e) =>
                          setFormData({ ...formData, contactPerson: e.target.value })
                        }
                      />
                      {formErrors.contactPerson && (
                        <p className="mt-1 text-xs text-error">{formErrors.contactPerson}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        メールアドレス <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`${inputClasses} ${formErrors.email ? "border-error focus:border-error focus:ring-error/20" : ""}`}
                        placeholder="info@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-error">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        お電話番号 <span className="text-error">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`${inputClasses} ${formErrors.phone ? "border-error focus:border-error focus:ring-error/20" : ""}`}
                        placeholder="03-1234-5678"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-error">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Store URL */}
                    <div>
                      <label htmlFor="storeUrl" className={labelClasses}>
                        店舗URL（任意）
                      </label>
                      <input
                        id="storeUrl"
                        type="url"
                        className={inputClasses}
                        placeholder="https://your-store.com"
                        value={formData.storeUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, storeUrl: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="sample-request-submit"
                    type="submit"
                    disabled={formSubmitting}
                    className="mt-8 w-full relative inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider text-matte-black gradient-gold rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {formSubmitting ? (
                      <div className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>送信中...</span>
                      </div>
                    ) : (
                      "無料サンプルを請求する"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ===== Part 2: Whitepaper Waitlist ===== */}
          <div
            ref={whitepaperRef}
            className={`lg:col-span-2 ${whitepaperVisible ? "" : "opacity-0"}`}
            style={whitepaperVisible ? { animation: "slide-in-right 0.8s ease-out 0.2s both" } : {}}
          >
            <div className="glass rounded-2xl overflow-hidden border border-border hover:border-teal/20 transition-all duration-500 h-full flex flex-col">
              {/* Whitepaper Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/images/whitepaper-blur.png"
                  alt="インバウンド対応ヴィーガンデザート高収益化ガイド"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent" />
                {/* Coming Soon Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-teal/20 text-teal-light border border-teal/30 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
                    近日公開
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-cream mb-2 leading-snug">
                    【近日公開】インバウンド単価を上げる！
                    <br />
                    ヴィーガンデザート高収益化ガイド
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    導入事例・原価設計・メニュー構成のベストプラクティスをまとめたホワイトペーパーを準備中です。
                  </p>
                </div>

                {waitlistSuccess ? (
                  <div className="text-center py-4" style={{ animation: "scale-in 0.5s ease-out forwards" }}>
                    <div className="inline-flex items-center gap-2 text-success">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">登録完了しました</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} noValidate>
                    <div className="flex flex-col gap-3">
                      <input
                        id="waitlist-email"
                        type="email"
                        className={`${inputClasses} ${waitlistError ? "border-error" : ""}`}
                        placeholder="メールアドレスを入力"
                        value={waitlistEmail}
                        onChange={(e) => {
                          setWaitlistEmail(e.target.value);
                          setWaitlistError("");
                        }}
                      />
                      {waitlistError && (
                        <p className="text-xs text-error">{waitlistError}</p>
                      )}
                      <button
                        id="waitlist-submit"
                        type="submit"
                        disabled={waitlistSubmitting}
                        className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wider text-cream bg-teal hover:bg-teal-light rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal/20 active:scale-[0.98] disabled:opacity-60"
                      >
                        {waitlistSubmitting ? (
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : (
                          "公開待ちリストに登録する"
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
