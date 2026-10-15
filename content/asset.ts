// Images, videos and certificates are served from CloudFront (S3 bucket avante-assets-405134482890),
// not from /public. Pass the path the file has under /public, e.g. asset("/images/logo-avante.avif").
// When adding or replacing a file, upload it to the bucket too — a file only in /public will 404 on the site.
const ASSET_BASE_URL = "https://d2dwdsbgl91qri.cloudfront.net";

export const asset = (path: string) => `${ASSET_BASE_URL}${path}`;
