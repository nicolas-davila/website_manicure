type BotaoWhatsProps = {
    telefone: string;
    mensagem: string;
};

export default function BotaoWhats ({telefone, mensagem}: BotaoWhatsProps){
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" 
        className="my-8 rounded-full bg-rosa px-8 py-3 font-medium text-white transition-colors hover:bg-rosa/90">

            Agendar pelo WhatsApp

        </a>
    );
}