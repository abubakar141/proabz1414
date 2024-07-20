import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "E-commerce",
    description:
      "I Used Next.js To Make A E-Commerce Website",
    link: "https://abz-commerce.vercel.app",
  },
  {
    title: "Portfolio",
    description:
      ",I Used Next.js To Make A Portfolio-Website",
    link: "https://abubakar9.vercel.app",
  },
  {
    title: "Blog",
    description:
      "Blog Website using Blog.",
    link: "https://google.com",
  },
  {
    title: "Calculater",
    description:
   "I Have Used TypeScript or Javascript to make a Calculater.",
    link: "https://meta.com",
  },
 
  {
    title: "Olx Clone",
    description:
      "Olx Clone using Next.js.",
    link: "https://microsoft.com",
  },
  {
        title: "ATM",
        description:
        "I Have Use TypeScript or Javascript to make a ATM.",
        link: "https://microsoft.com",
      },
      {
        title: "Login Or Sign Up Form",
        description:
        "Login or Sign Up Form Where You Can Login And Sign up..",
        link: "https://microsoft.com",
      },
      {
        title: "Todo App Using",
        description:
        "Todo App Using Type Script or Javascript",
        link: "https://microsoft.com",
      },
    
      {
        title: " Code Studio",
        description:
        "I have used HTML CSS to make a Code Studio.",
        link: "https://microsoft.com",
      },
      {
        title: "Food Website",
        description:
        "I have Used HTML,CSS to create a Food-Website.",
        link: "https://microsoft.com",
      },  {
        title: "Currency Converter",
        description:
        " Create Currency Converter using Typescript , JavaScript.",
        link: "https://microsoft.com",
      },
];
