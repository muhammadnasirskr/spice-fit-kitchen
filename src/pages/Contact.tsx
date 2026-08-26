import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const BUSINESS_EMAIL = "admin@spicefitkitchen.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    const subject = encodeURIComponent(form.subject || "Message from SpiceFitKitchen visitor");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <Helmet>
        <title>Contact Us | SpiceFitKitchen</title>
      </Helmet>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-6">Send a Message</h2>

          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary" />
              <h3 className="text-2xl font-bold font-heading">Your email app is opening!</h3>
              <p className="text-muted-foreground max-w-xs">
                Your default mail app should have opened with your message pre-filled. Just hit Send there and we'll get back to you soon.
              </p>
              <Button variant="outline" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); setConsent(false); }}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" required value={form.name} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required value={form.subject} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message here..." className="min-h-[150px]" required value={form.message} onChange={handleChange} />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} required />
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                  I agree to the privacy policy and consent to being contacted.
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={!consent}>
                <Send className="w-4 h-4" /> Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Clicking Send will open your email app pre-filled with your message, addressed to{" "}
                <span className="text-primary font-medium">{BUSINESS_EMAIL}</span>.
              </p>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="bg-muted/30 p-8 rounded-2xl border border-border h-fit">
          <h2 className="text-2xl font-bold font-heading mb-6">Contact Information</h2>
          <p className="text-muted-foreground mb-8">
            Whether you have a question about a recipe, want to collaborate, or just want to say hi — we're here for it.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-primary hover:underline font-medium"
                >
                  {BUSINESS_EMAIL}
                </a>
                <p className="text-sm text-muted-foreground mt-1">We reply within 24–48 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Based In</h3>
                <p className="text-muted-foreground">United States</p>
              </div>
            </div>
          </div>

          {/* Direct mailto CTA */}
          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-3">Prefer to write directly?</p>
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
            >
              <Mail className="w-4 h-4" />
              Open {BUSINESS_EMAIL} in your mail app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
