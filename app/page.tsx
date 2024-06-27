import {
  Nav,
  Content,
  Chosen,
  Footer,
  Map,
} from "./Components/index.components";

function Home() {
  return (
    <main>
      <Nav />
      <div className="mx-auto max-w-[1600px]">
        <div className="flex">
          <div className=" w-[20vw] small:hidden">
            <Map />
          </div>
          <Content />
        </div>
        <Chosen />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
