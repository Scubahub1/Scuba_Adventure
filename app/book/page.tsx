"use client";

import React, { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    date: "",
    timeSlot: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const experiences = [
    { slug: "Scuba Diving", title: "Scuba Diving" },
    { slug: "Rooms Avilable", title: "Rooms Avilabllebility" },
    { slug: "Cabs Avilable", title: "Cabs Avilabllebility" },
  ];

  const timeSlots = [
    { slug: "7AM", title: "7AM batch" },
    { slug: "12PM", title: "12 PM batch" },
  ];

  const WHATSAPP_NUMBER = "917022295102";

  const capitalizeName = (name) =>
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  const formatMessageForWhatsApp = (data) => {
    const expTitle =
      experiences.find((exp) => exp.slug === data.experience)?.title ||
      data.experience;

    const timeSlotTitle =
      timeSlots.find((slot) => slot.slug === data.timeSlot)?.title || "None";

    return `
New Booking Request from ${data.name}:

📝 Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Experience: ${expTitle}
- Date: ${data.date}
- Time Slot: ${timeSlotTitle}
- Message: ${data.message || "None"}

Please confirm availability! 😊`;
  };

  const sendToWhatsApp = (data) => {
    const message = formatMessageForWhatsApp(data);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSending(true);

    const formattedData = {
      ...formData,
      name: capitalizeName(formData.name),
      phone: `+91${formData.phone}`,
    };

    sendToWhatsApp(formattedData);

    setSubmitted(true);
    setIsSending(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-4xl mb-6">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Request Sent!</h1>
        <p className="text-slate-300 max-w-md mb-8">
          Thank you, {formData.name}. We have received your booking request for
          Netrani Island. Our team will contact you within 24 hours to confirm
          availability and payment.
          <br />
          <br />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, following up on my booking for ${formData.date}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-400 hover:underline"
          >
            Message us on WhatsApp for quick updates
          </a>
        </p>
        <Button href="/" variant="primary">
          Back Home
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SectionTitle
        title="Book Your Dive"
        subtitle="Start your underwater adventure at Netrani Island."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  maxLength={10}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Email Address
              </label>
              <input
                required
                type="email"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                placeholder="scuba@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Experience
                </label>
                <select
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors appearance-none"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experience: e.target.value,
                      timeSlot: "",
                    })
                  }
                >
                  <option value="">Select experience</option>
                  {experiences.map((exp) => (
                    <option key={exp.slug} value={exp.slug}>
                      {exp.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            {formData.experience === "Scuba Diving" && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Time Slot (based on monsoon)
                </label>
                <select
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors appearance-none"
                  value={formData.timeSlot}
                  onChange={(e) =>
                    setFormData({ ...formData, timeSlot: e.target.value })
                  }
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.slug} value={slot.slug}>
                      {slot.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ocean-500 transition-colors"
                placeholder="Any dietary restrictions, special requests, or medical concerns?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-lg"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Confirm Request"}
            </Button>

            <p className="text-xs text-center text-slate-500 mt-4">
              * No payment is taken now. We will confirm availability first.
              Your details will open in WhatsApp and email for quick sharing.
            </p>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-ocean-900/20 border border-ocean-500/20 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-4">
              Why Book With Us?
            </h3>
            <ul className="space-y-4">
              {[
                "100% Safety Record at Netrani",
                "Smallest Instructor-to-Student Ratio",
                "Complimentary Underwater Photos",
                "Full Refund on Cancellation (48hrs prior)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <span className="text-teal-400">★</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Directly
            </h3>
            <p className="text-2xl font-bold text-white mb-6">+91 7022295102</p>
            <p className="text-sm text-slate-500">
              Office Timing 9:00 AM - 8:00 PM IST
              <br />
              WhatsApp available on the same number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
