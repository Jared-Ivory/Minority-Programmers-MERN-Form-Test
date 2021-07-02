import Head from "next/head";
import { EntryForm } from "../components";
export default function Index() {
	return (
		<div>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
					integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
					crossOrigin="anonymous"
				/>
			</Head>
			<div className="home">
				<EntryForm />
			</div>
		</div>
	);
}
