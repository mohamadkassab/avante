import { asset } from "@/content/asset";

// Client logo data — files live in /images/clients on the CDN (see content/asset.ts).
// Paths are URL-encoded because the source filenames contain spaces and parentheses.
const LOGO_COUNT = 39;

export type ClientLogo = {
  name: string;
  image: { src: string; alt: string };
};

export const clientLogos: ClientLogo[] = Array.from({ length: LOGO_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    name: `client-${n}`,
    image: {
      src: asset(encodeURI(`/images/clients/our clients (logos)-${n}.webp`)),
      alt: `Client logo ${i + 1}`,
    },
  };
});
