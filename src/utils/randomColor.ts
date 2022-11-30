const colorScheme = [
  "blackAlpha",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "linkedin",
  "facebook",
  "messenger",
  "whatsapp",
  "twitter",
  "telegram",
];

export function randomColorSchema(): string {
  return colorScheme[Math.floor(Math.random() * colorScheme.length)];
}
