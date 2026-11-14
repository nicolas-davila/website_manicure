import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import BotaoWhats from "@/components/BotaoWhats";
import Galeria from "@/components/Galeria";

const TELEFONE_EXEMPLO = "5511999999999";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center bg-background">
      <Header nome="AJ Nails"/>
      <Sobre />
      <Servicos />
      <Galeria />
      <BotaoWhats 
        telefone={TELEFONE_EXEMPLO}
        mensagem="Olá! Vim do anúncio e gostaria de agendar um horário."
      />
    </main>  
  );
}