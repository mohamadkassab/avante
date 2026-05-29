import Box from "@mui/material/Box";
import SectionShell from "@/components/SectionShell";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <SectionShell variant="offWhite">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
          gap: "var(--contact-grid-gap)",
        }}
      >
        <ContactInfoCards />
        <ContactForm />
      </Box>
    </SectionShell>
  );
}
