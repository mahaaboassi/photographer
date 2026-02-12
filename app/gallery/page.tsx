import { Metadata } from "next";
import Gallery from "./gallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery | Rebal Al Barouki Photography",
    description:
      "Explore the stunning photography gallery of Rebal Al Barouki. Browse professional photoshoots, creative captures, and unique moments captured through the lens.",
    keywords: [
      "photography", 
      "gallery", 
      "photoshoot", 
      "Rebal Al Barouki", 
      "professional photography", 
      "creative photography"
    ].join(", "),
    openGraph: {
      title: "Gallery | Rebal Al Barouki Photography",
      description:
        "Explore the stunning photography gallery of Rebal Al Barouki. Browse professional photoshoots, creative captures, and unique moments captured through the lens.",
      url: "https://rebalalbarouki.com/gallery",
      type: "website",
  }
}
}
export default async function ServicesPage() {
  return <Gallery />;
}
