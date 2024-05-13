import { Inter } from "next/font/google";
import { useRef } from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const txtRef = useRef(null)

  const updateTxt = () => {
    if (txtRef.current) {
      txtRef.current.textContent = '5';
    }
  }

  return (
    <main>
      <div className='min-h-screen min-w-screen grid grid-cols-2 text-center p-0'>
        <div className="border border-black h-full content-center"><p>1</p></div>
        <div className="border border-black h-full content-center"><p>2</p></div>
        <div className="border border-black h-full content-center"><p ref={txtRef}>3</p></div>
        <div className="border border-black h-full content-center"><p>4</p></div>
      </div>
      <button type="button" onClick={() => updateTxt()} className="fixed top-[45%] left-[45%] w-[10%] h-[10%] bg-slate-200 border border-[#0000FF]">button</button>
    </main>
  );
}
