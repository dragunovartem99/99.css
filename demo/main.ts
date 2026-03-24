import "../src/index.css";
import "./docs.css";

function dedent(str: string): string {
	const lines = str.split("\n");
	const nonEmpty = lines.filter((l) => l.trim().length > 0);
	if (nonEmpty.length === 0) return "";
	const minIndent = nonEmpty.reduce((min, line) => {
		const m = line.match(/^(\s*)/);
		return Math.min(min, m ? m[1].length : 0);
	}, Infinity);
	return lines
		.map((l) => l.slice(minIndent))
		.join("\n")
		.trim();
}

function processExamples(): void {
	document.querySelectorAll<HTMLElement>("[data-example]").forEach((el) => {
		const raw = dedent(el.innerHTML);

		const preview = document.createElement("div");
		preview.className = "example-preview";
		preview.innerHTML = el.innerHTML;

		const code = document.createElement("code");
		code.textContent = raw;

		const pre = document.createElement("pre");
		pre.appendChild(code);

		const summary = document.createElement("summary");
		summary.textContent = "Show code";

		const details = document.createElement("details");
		details.appendChild(summary);
		details.appendChild(pre);

		el.removeAttribute("data-example");
		el.className = "example";
		el.innerHTML = "";
		el.appendChild(preview);
		el.appendChild(details);
	});
}

// Interactive table row selection
function initInteractiveTables(): void {
	document.querySelectorAll<HTMLTableElement>("table.interactive").forEach((table) => {
		table.addEventListener("click", (event) => {
			const isBodyRow = (el: Element) =>
				el.tagName === "TR" && el.parentElement?.tagName === "TBODY";
			const path = event.composedPath() as Element[];
			const clicked = path.find(isBodyRow);
			if (!clicked) return;
			const prev = Array.from(clicked.parentElement!.children).find(
				(r) => isBodyRow(r) && r.classList.contains("highlighted")
			);
			if (prev) prev.classList.remove("highlighted");
			if (clicked !== prev) clicked.classList.add("highlighted");
		});
	});
}

processExamples();
initInteractiveTables();
