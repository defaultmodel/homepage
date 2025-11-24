import { getRepositoryDetails } from "../../utils";

export interface Project {
	name: string;
	repoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		name: "AES-Grinder",
		description:
			"Program based on an academic paper that attacks a reduced AES",
		repoLink: "https://github.com/defaultmodel/aes-grinder",
		tags: ["Rust", "Crypto", "AES"],
	},
	{
		name: "Sexion d'assaut",
		description:
			"A tool that can statically inject mallicious code in an ELF program",
		repoLink: "https://github.com/defaultmodel/sexion-dassaut",
		tags: ["C", "ELF", "Static injection"],
	},
	{
		name: "Canvas Defender bypass",
		description:
			"A bypass of the protection offered by the Canvas Defender extension",
		repoLink: "https://github.com/defaultmodel/canvas-defender-bypass",
		tags: ["Web extension", "Python"],
	},
	{
		name: "Bignum",
		description:
			"A C++ library to handle infinitely (the size of you're RAM) big numbers",
		repoLink: "https://github.com/defaultmodel/bignum",
		tags: ["C++", "Library"],
	},
	{
		name: "Muscles",
		description: "A server & TUI client for simple terminal remote control",
		repoLink: "https://gitlab.istic.univ-rennes1.fr/hmeyran/muscles",
		tags: ["Rust", "Client", "Server"],
	},
	{
		name: "Takuzu solver",
		description: "A C-written Takuzu Solver",
		repoLink: "https://github.com/defaultmodel/takuzu",
		tags: ["C", "Heuristics"],
	},
];
