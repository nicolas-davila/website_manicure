type HeaderProps = {
    nome: string;
    frase?: string;
};

export default function Header({ nome, frase }: HeaderProps) {
    return (
        <header className="w-full py-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                {nome}
            </h1>

            {frase && ( // Se chamar o prop dessa forma, ele não cria a tag se não chamar o prop no header
                <p className="mt-2 text-lg text-zinc-600">
                    {frase}
                </p>
            )}
        </header>
    );
}