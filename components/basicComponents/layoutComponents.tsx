import { Card } from "@nextui-org/react";
import { BasicComponentsProps } from "../../types-queries/typesBasicComponents";

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

export function ArticleHeaderSection({ children }: BasicComponentsProps) {
  return (
    <Card className="border-none shadow w-full  bg-gradient-to-t from-background to-0 ">
      {children}
    </Card>
  );
}
