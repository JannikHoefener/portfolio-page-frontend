import { Card } from "@nextui-org/react";
import { BasicComponentsProps } from "../../types-queries/basicComponentTypes";

//Page-Box
// => toDo: als Layout nutzen nicht so schmal wie article aber auch nicht ganz bis an bildschirmrand
// TODO! Styling! just padding not centering!!!
// className="mx-auto max-w-5xl p-4
export function PageLayout({ children }: BasicComponentsProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {children}
    </section>
  );
}

//Article-Box
export function ArticleBox({ children }: BasicComponentsProps) {
  return (
    <section className="mx-auto max-w-5xl p-4 shadow-2xl rounded-md">
      {children}
    </section>
  );
}
/*  mx-auto: Zentriert das Element horizontal.
    max-w-2xl: Setzt die maximale Breite auf 2xl, was in der Standardkonfiguration von Tailwind auf 36rem oder 576px eingestellt ist. Du kannst die Breite nach Bedarf anpassen, z.B. max-w-xl für eine kleinere Breite oder max-w-3xl für eine größere Breite.
    p-4: Fügt einen Innenabstand von 1rem (16px) rund um das Element hinzu. Du kannst dies anpassen, um mehr oder weniger Abstand zu erhalten.
    bg-white: Setzt die Hintergrundfarbe auf Weiß.
    shadow-md: Fügt eine mittlere Schattenklasse hinzu, um dem Element einen dezenten Schatten zu verleihen. */

export function ArticleHeaderSection({ children }: BasicComponentsProps) {
  return (
    <Card className="border-none shadow w-full  bg-gradient-to-t from-background to-0 ">
      
          {children}
      
      
      

      </Card>
  );
}
