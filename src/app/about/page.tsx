import { TransitionLink } from "@/components/TransitionLink";

const About = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">ABOUT PAGE</h1>

      <TransitionLink href="/" label="Go to home" />
    </main>
  );
};

export default About;
