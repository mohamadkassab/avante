"use client";

import { useState, useRef } from "react";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useInView } from "@/hooks/useInView";
import { contact } from "@/content/contact";
import AppButton from "@/components/AppButton";
import SectionHeading from "@/components/SectionHeading";

const { form } = contact;

const sendIcon: ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
);

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "var(--radius-card)",
    fontSize: "var(--font-size-nav)",
  },
};

const labelSx = {
  display: "block",
  fontSize: "var(--contact-label-size)",
  fontWeight: "var(--font-weight-medium)",
  color: "var(--color-text-primary)",
  mb: 0.5,
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const { ref, visible } = useInView();
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [toastOpen, setToastOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      setFormState(EMPTY_FORM);
    } catch {
      setStatus("error");
    } finally {
      setToastOpen(true);
    }
  };

  const isSending = status === "sending";

  return (
    <>
      <Box
        ref={ref}
        sx={{
          bgcolor: "var(--color-section-bg-white)",
          p: "var(--contact-form-p)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-lg)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "opacity var(--duration-scroll) ease-out 0.1s, transform var(--duration-scroll) ease-out 0.1s",
        }}
      >
        <SectionHeading size="contact">{form.heading}</SectionHeading>

        <Box
          ref={formRef}
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: "var(--contact-card-gap)" }}
        >
          <input type="hidden" name="to_email" value="sales@avanteuae.com" />

          <Box>
            <Typography component="label" htmlFor="name" sx={labelSx}>
              Full Name *
            </Typography>
            <TextField
              id="name"
              name="name"
              required
              fullWidth
              size="small"
              placeholder="John Doe"
              value={formState.name}
              onChange={handleChange}
              disabled={isSending}
              sx={fieldSx}
            />
          </Box>

          <Box>
            <Typography component="label" htmlFor="email" sx={labelSx}>
              Email Address *
            </Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              required
              fullWidth
              size="small"
              placeholder="john@example.com"
              value={formState.email}
              onChange={handleChange}
              disabled={isSending}
              sx={fieldSx}
            />
          </Box>

          <Box>
            <Typography component="label" htmlFor="phone" sx={labelSx}>
              Phone Number
            </Typography>
            <TextField
              id="phone"
              name="phone"
              fullWidth
              size="small"
              placeholder="+971 4 239 2882"
              value={formState.phone}
              onChange={handleChange}
              disabled={isSending}
              sx={fieldSx}
            />
          </Box>

          <Box>
            <Typography component="label" htmlFor="company" sx={labelSx}>
              Company Name
            </Typography>
            <TextField
              id="company"
              name="company"
              fullWidth
              size="small"
              placeholder="Your Company"
              value={formState.company}
              onChange={handleChange}
              disabled={isSending}
              sx={fieldSx}
            />
          </Box>

          <Box>
            <Typography component="label" htmlFor="message" sx={labelSx}>
              Message *
            </Typography>
            <TextField
              id="message"
              name="message"
              required
              fullWidth
              multiline
              rows={4}
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={handleChange}
              disabled={isSending}
              sx={fieldSx}
            />
          </Box>

          <AppButton
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            position="left"
            icon={isSending ? <CircularProgress size={18} color="inherit" /> : sendIcon}
          >
            {isSending ? "Sending…" : form.submitLabel}
          </AppButton>
        </Box>
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={5000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={status === "success" ? "success" : "error"}
          variant="filled"
          sx={{ borderRadius: "var(--radius-card)" }}
        >
          {status === "success"
            ? "Message sent!"
            : "Please try again or email us directly."}
        </Alert>
      </Snackbar>
    </>
  );
}
