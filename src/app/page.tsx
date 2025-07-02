
import {Navbar} from "./sections/navbar";
import Sec1 from "./sections/sec1";
import Sec2 from "./sections/sec2";
import Sec3 from "./sections/sec3";
import Sec4 from "./sections/sec4";
import Sec5 from "./sections/sec5";
import Sec6 from "./sections/sec6";
import Sec7 from "./sections/sec7";
import Footer from "./sections/footer";



import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  

  return (
    <HydrateClient>
      <div className="relative top-15 z-50">
        <Navbar />
      </div>
      <main>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Footer />
      </main>
      
       
      

      


    </HydrateClient>
  );
}
