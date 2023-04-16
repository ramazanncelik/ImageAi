import styles from './styles.module.scss'
import PromptForm from './promp-form'
import ResultImage from './result-image'
import PromptSuggestions from './prompt-suggestions'
import Examples from './examples'

const HomePageContainer = () => {
    return (
        <div className={styles.homePageContainer}>
            <h1 className={styles.title}>
                You just imagine,<br /> we handle the rest
            </h1>
            <p className={styles.description}>
                Tell us a prompt and we'll generate a story for you.
            </p>
            <PromptForm />
            <ResultImage />
            <PromptSuggestions />
            <Examples />
        </div>
    );
}

export default HomePageContainer;