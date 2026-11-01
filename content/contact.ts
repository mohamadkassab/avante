import { asset } from "@/content/asset";
import { footer } from "@/content/shared";

export const contact = {
  info: {
    subtitle: "Our team is ready to assist you with your commercial kitchen and HVAC needs. Reach out to us through any of the following channels.",
    items: [
      { icon: "phone",  title: "Phone",          value: "+971 4 239 2882" },
      { icon: "mail",   title: "Email",           value: "sales@avanteuae.com" },
    ],
  },
  // PLACEHOLDER video (the home hero video) until the real one is shared.
  // Clicking it opens Avante's LinkedIn page, the same link as the footer.
  video: {
    webm: asset("/Videos/hero-video.webm"),
    mp4: asset("/Videos/hero-video.mp4"),
    href: footer.social.find((s) => s.icon === "linkedin")!.href,
    label: "Avante on LinkedIn",
  },
  form: {
    heading: "Send us a Message",
    submitLabel: "SEND MESSAGE",
    inquiryTypes: ["General Enquiry", "Products", "Services"],
  },
};
