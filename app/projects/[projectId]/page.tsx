import Linktree from "@/components/linktree";
import prevCard from "@/components/prevCard";
import { title } from "@/components/primitives";
import {
  GET_LINKTREE,
  linktreeResponse,
} from "@/types-queries/componentLinktree";
import { useQuery } from "@apollo/client";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>My Projects</h1>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {/* {list.map((item, index) => (
          <prevCard/> // todo: hier weiter mit props / prevcard
        ))} */} 
      </div>
      <Linktree id={3} />
    </div>
  );
}
