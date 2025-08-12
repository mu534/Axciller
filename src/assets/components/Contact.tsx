import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init("6nvZAca-RQ4oehDev");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_nf2ztpi",
        "template_zt5ih6h",
        formRef.current,
        "6nvZAca-RQ4oehDev"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <section className="py-20 bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto text-center px-4 sm:px-8">
        {/* Contact Header */}
        <div
          id="contact"
          className="inline-block border-2 border-black px-6 py-2 mb-4"
        >
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase">
            CONTACT
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-900 leading-relaxed mb-4 max-w-md mx-auto">
          Time moves to its own quiet rhythm. Every moment finds its own perfect
          ending. Yet beauty lives and thrives, bringing freedom and grace to
          everything it touches.
        </p>
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 h-px bg-black max-w-20"></div>
          <div className="mx-2 text-xs">▼▼▼</div>
          <div className="flex-1 h-px bg-black max-w-20"></div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 w-full text-left text-gray-700"
        >
          {/* Name Field */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="name"
              className="text-xs font-medium uppercase mb-2 sm:mb-0 sm:w-40"
            >
              ENTER YOUR NAME<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              className="w-full sm:flex-1 border border-black px-3 py-2 text-sm"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase mb-2 sm:mb-0 sm:w-40"
            >
              ENTER YOUR EMAIL<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="w-full sm:flex-1 border border-black px-3 py-2 text-sm"
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="phone"
              className="text-xs font-medium uppercase mb-2 sm:mb-0 sm:w-40"
            >
              PHONE NUMBER
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full sm:flex-1 border border-black px-3 py-2 text-sm"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase mb-2 sm:mb-0 sm:w-40 pt-1"
            >
              YOUR MESSAGE<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full sm:flex-1 border border-black px-3 py-2 text-sm resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center justify-center pt-6">
            <div className="flex items-center gap-4">
              <div className="w-px h-6 bg-black"></div>
              <button
                type="submit"
                className="text-xs font-medium uppercase px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-200"
                disabled={status === "loading"}
              >
                {status === "loading" ? "SENDING..." : "SUBMIT"}
              </button>
              <div className="w-px h-7 bg-black"></div>
            </div>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-500 text-xs mt-2 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-xs mt-2 text-center">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
