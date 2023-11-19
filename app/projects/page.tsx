import Linktree from "@/components/linktree";
import { title } from "@/components/primitives";
import { GET_LINKTREE, linktreeResponse } from "@/types-queries/componentLinktree";
import { useQuery } from "@apollo/client";

export default function ProjectsPage() {
	
	return (
		<div>
			<h1 className={title()}>My Projects</h1>
			<Linktree id={3}/>
		</div>
	);
}
