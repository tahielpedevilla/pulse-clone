import "../styles/globals.css";
import {Work_Sans} from "@next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
});

function App({Component, pageProps}) {
  return (
    <div className={workSans.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
