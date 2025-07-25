import { Footer, Navigation } from "@/devlink";

export default function HelloWorld() {
  return (
    <>
      <Navigation />
      <div style={{ minHeight: "100vh" }}>Hello World</div>
      <Footer />
    </>
  );
}
