import Image from "next/image";

type Foto = {
    src: string;
    alt:string;
    legenda?: string;
};

const fotos: Foto[] = [
    {src: "/galeria/foto1.jpg", alt:"Ilustração de jovem com óculos", legenda: "teste 1"},
    {src: "/galeria/foto2.jpg", alt:"Ilustração de Jesus é o Caminho", legenda: "teste 2"},
    {src: "/galeria/foto3.jpg", alt:"Ilustração de uma rosa branca"},
];

export default function Galeria() {
    return (
        <section className="w-full max-w-3xl px-4 py-8">
            <h2 className="mb-4 text-2xl font-semibold text-black"> Galeria</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {
                    fotos.map((foto) => (
                        <div key={foto.src}>
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                width={400}
                                height={400}
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                            {foto.legenda && <p className="text-foreground">{foto.legenda}</p>}
                        </div>
                    ))
                }
            </div>
        </section>
    );
}