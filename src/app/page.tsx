import { GenerateTicketForm } from "@/components/generate-ticket-form";
import { TicketCard } from "@/components/ticket-card";

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
          <GenerateTicketForm />
        </div>
        <div className="col-span-2"></div>
        <TicketCard />
      </section>
    </main>
  );
}
