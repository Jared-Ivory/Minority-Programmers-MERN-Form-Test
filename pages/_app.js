import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
					integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
					crossOrigin="anonymous"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
