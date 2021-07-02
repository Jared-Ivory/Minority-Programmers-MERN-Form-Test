import { EntryForm } from ".";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<div>
			<div className={styles.home}>
				<EntryForm />
			</div>
		</div>
	);
};

export default Home;
