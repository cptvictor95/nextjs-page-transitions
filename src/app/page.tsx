import { TransitionLink } from "@/components/TransitionLink";

const Home = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">HOME PAGE</h1>

      <TransitionLink href="/about" label="Go to about" />
    </main>
  );
};

export default Home;
