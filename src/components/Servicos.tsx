type Servico = {
    nome: string;
    preco: number;
};

const servicos: Servico[] = [
    { nome: "Pé e Mão", preco: 50},
    { nome: "esmaltação em Gel", preco: 80},
    { nome: "Alongamento", preco: 120},
];

export default function Servicos() {
    return (
        <section className="w-full max-w-md px-4 py-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Serviços
            </h2>
            <ul>
                {servicos.map((servico) => (
                    <li key={servico.nome} className="flex justify-between border-b py-3 text-black">
                        <span>{servico.nome}</span>
                        <span>R$ {servico.preco}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}