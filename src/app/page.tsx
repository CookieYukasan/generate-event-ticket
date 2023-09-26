import Image from "next/image";

import CoverTicket from "@/assets/images/cover-ticket.svg";
import LinesSvg from "@/assets/images/lines.svg";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen justify-center flex flex-col">
      <section className="font-sans grid grid-cols-12">
        <div className="col-span-4">
          <p className="text-[40px] font-spaceGrotesk leading-[52px] bg-degrade text-clip bg-clip-text text-transparent uppercase">
            gere seu ticket <br /> e compartilhe <br />
            com o mundo
          </p>
          <p className="mt-8 uppercase font-spaceGrotesk leading-8 text-xl text-gray-light">
            Digite seu usuário do GitHub
          </p>
          <div className="my-4 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0.25C4.16797 0.25 0.25 4.26953 0.25 9.22266C0.25 13.1875 2.75781 16.5469 6.23438 17.7344C6.28314 17.745 6.33291 17.7502 6.38281 17.75C6.70703 17.75 6.83203 17.5117 6.83203 17.3047C6.83203 17.0898 6.82422 16.5273 6.82031 15.7773C6.53088 15.8452 6.23478 15.8806 5.9375 15.8828C4.25391 15.8828 3.87109 14.5742 3.87109 14.5742C3.47266 13.5391 2.89844 13.2617 2.89844 13.2617C2.13672 12.7266 2.89453 12.7109 2.95312 12.7109H2.95703C3.83594 12.7891 4.29688 13.6406 4.29688 13.6406C4.73438 14.4062 5.32031 14.6211 5.84375 14.6211C6.18986 14.6142 6.53061 14.5343 6.84375 14.3867C6.92188 13.8086 7.14844 13.4141 7.39844 13.1875C5.45703 12.9609 3.41406 12.1914 3.41406 8.75391C3.41406 7.77344 3.75391 6.97266 4.3125 6.34766C4.22266 6.12109 3.92188 5.20703 4.39844 3.97266C4.46236 3.95736 4.52806 3.95079 4.59375 3.95312C4.91016 3.95312 5.625 4.07422 6.80469 4.89453C8.2381 4.49348 9.75409 4.49348 11.1875 4.89453C12.3672 4.07422 13.082 3.95312 13.3984 3.95312C13.4641 3.95079 13.5298 3.95736 13.5938 3.97266C14.0703 5.20703 13.7695 6.12109 13.6797 6.34766C14.2383 6.97656 14.5781 7.77734 14.5781 8.75391C14.5781 12.1992 12.5312 12.957 10.582 13.1797C10.8945 13.457 11.1758 14.0039 11.1758 14.8398C11.1758 16.0391 11.1641 17.0078 11.1641 17.3008C11.1641 17.5117 11.2852 17.75 11.6094 17.75C11.6619 17.7502 11.7142 17.745 11.7656 17.7344C15.2461 16.5469 17.75 13.1836 17.75 9.22266C17.75 4.26953 13.832 0.25 9 0.25Z"
                fill="#202024"
              />
            </svg>

            <input
              type="text"
              className="pl-11 text-sm bg-white w-full border-none py-4 px-3 font-sans outline-none"
            />
          </div>

          <button className="font-bold text-sm uppercase w-full bg-purple-normal py-[22px] font-sans text-white">
            Gerar meu ticket
          </button>
        </div>
        <div className="col-span-2"></div>
        <div className="bg-ticket-card w-full p-11 flex col-span-6">
          <Image src={CoverTicket} alt="Cover Ticket" />
          <div className="bg-white p-4 w-full">
            <div className="mx-auto w-[128px] h-[128px] bg-slate-400 font-white rounded-full flex items-center justify-center">
              AM
            </div>
            <p className="tracking-[1.26px] text-center my-2 uppercase text-purple-normal font-spaceGrotesk text-xs leading-[15px] font-medium">
              Tripulante
            </p>
            <p className="text-gray-dark text-center font-bold leading-5">
              Adson Martins
            </p>
            <div className="space-y-1 mt-9">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-gray-dark text-[10px] leading-4 font-medium tracking-[1.05px] uppercase font-spaceGrotesk">
                    EVENTO
                  </p>
                  <p className="text-gray-dark text-[10px] leading-4 font-medium tracking-[1.05px] uppercase font-spaceGrotesk">
                    IA PARA DEVS
                  </p>
                </div>
              ))}
              <Image src={LinesSvg} alt="Lines" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
