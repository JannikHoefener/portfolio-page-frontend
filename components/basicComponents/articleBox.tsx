//Page-Box
// => toDo: als Layout nutzen nicht so schmal wie article aber auch nicht ganz bis an bildschirmrand

import { BasicComponentsProps } from "../../types-queries/basicComponentTypes";

//Article-Box
export function ArticleBox({children}: BasicComponentsProps) {
    return(<div className="mx-auto max-w-3xl p-4 shadow-2xl rounded-md">{children}</div>)
}
/*  mx-auto: Zentriert das Element horizontal.
    max-w-2xl: Setzt die maximale Breite auf 2xl, was in der Standardkonfiguration von Tailwind auf 36rem oder 576px eingestellt ist. Du kannst die Breite nach Bedarf anpassen, z.B. max-w-xl für eine kleinere Breite oder max-w-3xl für eine größere Breite.
    p-4: Fügt einen Innenabstand von 1rem (16px) rund um das Element hinzu. Du kannst dies anpassen, um mehr oder weniger Abstand zu erhalten.
    bg-white: Setzt die Hintergrundfarbe auf Weiß.
    shadow-md: Fügt eine mittlere Schattenklasse hinzu, um dem Element einen dezenten Schatten zu verleihen. */