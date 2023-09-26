"use client";
import Image from "next/image";

import CoverTicket from "@/assets/images/cover-ticket.svg";
import LinesSvg from "@/assets/images/lines.svg";
import { useTicketStore } from "@/stores/useTicketStore";

const footerItems = [
  ["EVENTO", "IA PARA DEVS"],
  ["DATA", "14 — 16 ago. 2023"],
  ["HORA", "ao vivo — 19h"],
];

function TicketCard() {
  const { user } = useTicketStore();

  return (
    <div className="bg-ticket-card w-full p-11 flex col-span-6">
      <Image src={CoverTicket} alt="Cover Ticket" />
      <div className="bg-white p-4 w-full">
        {user.image ? (
          <Image
            src={user.image}
            alt="User"
            width={128}
            height={128}
            className="rounded-full mx-auto w-[128px] h-[128px]"
          />
        ) : (
          <div className="mx-auto w-[128px] h-[128px] bg-slate-400 font-white rounded-full flex items-center justify-center">
            AM
          </div>
        )}

        <p className="tracking-[1.26px] text-center my-2 uppercase text-purple-normal font-spaceGrotesk text-xs leading-[15px] font-medium">
          Tripulante
        </p>
        <p className="text-gray-dark text-center font-bold leading-5">
          {user.name ?? "Seu nome aqui"}
        </p>
        <div className="space-y-1 mt-9">
          {footerItems.map((item) => (
            <div key={item[1]} className="flex items-center justify-between">
              <p className="text-gray-dark text-[10px] leading-4 font-medium tracking-[1.05px] uppercase font-spaceGrotesk">
                {item[0]}
              </p>
              <p className="text-gray-dark text-[10px] leading-4 font-medium tracking-[1.05px] uppercase font-spaceGrotesk">
                {item[1]}
              </p>
            </div>
          ))}
          <Image src={LinesSvg} alt="Lines" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export { TicketCard };
