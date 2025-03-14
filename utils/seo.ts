import { mydetails } from "@/constants/my-basic-details";
import { Metadata, Viewport } from "next";
import { baseurl } from "./staticurls";

const description = `hi, i'm ${mydetails.name}, i started software engineering in 2019, with hackclub. i'm currently Software engineer at gobi. before that, i was Junior Backend engineer at eden care medical. i ❤️ lowercase, side projects and monkeytype.`;

const metadata: Metadata = {
  title: {
    template: "%s >> frérot ntwali's personal website",
    default: "frérot ntwali's personal website",
  },
  description,
  keywords: [
    mydetails.name,
    "software engineer",
    "frontend engineer",
    "backend engineer",
    "fullstack engineer",
    "devops engineer",
    "portfolio",
    "blog",
  ],
  authors: [{ name: mydetails.name, url: baseurl }],
  publisher: mydetails.name,
  creator: mydetails.name,
  icons: {
    apple: [
      {
        url: mydetails.logo_light.url,
        media: "(prefers-color-scheme: light)",
        type: mydetails.logo_light.type,
      },
      {
        url: mydetails.logo_dark.url,
        media: "(prefers-color-scheme: dark)",
        type: mydetails.logo_dark.type,
      },
    ],
    icon: [
      {
        url: mydetails.logo_light.url,
        media: "(prefers-color-scheme: light)",
        type: mydetails.logo_light.type,
      },
      {
        url: mydetails.logo_dark.url,
        media: "(prefers-color-scheme: dark)",
        type: mydetails.logo_dark.type,
      },
    ],
    shortcut: [
      {
        url: mydetails.logo_light.url,
        media: "(prefers-color-scheme: light)",
        type: mydetails.logo_light.type,
      },
      {
        url: mydetails.logo_dark.url,
        media: "(prefers-color-scheme: dark)",
        type: mydetails.logo_dark.type,
      },
    ],
  },
  openGraph: {
    type: "website",
    title: {
      template: "%s >> frérot ntwali's personal website",
      default: "frérot ntwali's personal website",
    },
    description,
    images: [
      {
        url: mydetails.logo_dark.url,
        type: mydetails.logo_dark.type,
        alt: "frérot ntwali's logo",
      },
      {
        url: mydetails.logo_light.url,
        type: mydetails.logo_light.type,
        alt: "frérot ntwali's logo",
      },
      {
        url: mydetails.my_image_dark.url,
        type: mydetails.my_image_dark.type,
        alt: mydetails.name,
      },
      {
        url: mydetails.my_image_light.url,
        type: mydetails.my_image_light.type,
        alt: mydetails.name,
      },
    ],
    countryName: "Rwanda",
  },
  twitter: {
    card: "summary",
    creator: mydetails.name,
    description,
    images: [
      {
        url: mydetails.logo_dark.url,
        type: mydetails.logo_dark.type,
        alt: "frérot ntwali's logo",
      },
      {
        url: mydetails.logo_light.url,
        type: mydetails.logo_light.type,
        alt: "frérot ntwali's logo",
      },
      {
        url: mydetails.my_image_light.url,
        type: mydetails.my_image_light.type,
        alt: mydetails.name,
      },
      {
        url: mydetails.my_image_dark.url,
        type: mydetails.my_image_dark.type,
        alt: mydetails.name,
      },
    ],
  },
  metadataBase: new URL(baseurl),
};
const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    {
      color: "rgb(122, 84, 121)",
      media: "(prefers-color-scheme: dark)",
    },
    {
      color: "rgb(60, 161, 137)",
      media: "(prefers-color-scheme: light)",
    },
  ],
};
export { metadata, viewport };
