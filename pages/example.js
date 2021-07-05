import React, { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/client";

const Example = () => {
	const [providers, setProviders] = useState([]);

	useEffect(async () => {
		const providers = await getProviders();
		setProviders(providers);
		console.log(providers);
	}, []);

	return (
		<div>
			<div className="border-bottom text-center mb-4">
				<>
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button onClick={() => signIn(provider.id)}>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</>
			</div>
		</div>
	);
};

export default Example;
