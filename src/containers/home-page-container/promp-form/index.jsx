"use client"
import styles from './styles.module.scss'
import { useHomePage } from '../useHomepage'
import Loading from '@/components/loading';

const PromptForm = () => {

    const { prompt, setPrompt, generateImage, isSubmitting } = useHomePage();

    const handlePromptChange = async (e) => {
        setPrompt(e.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        generateImage();
    }

    return (
        <div className={styles.promptForm}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <textarea
                    value={prompt}
                    onChange={handlePromptChange}
                    className={styles.promptTextarea}
                    rows={2}
                    type="text"
                    placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
                    required />

                {isSubmitting ?
                    <div className={styles.generateButton}>
                        <Loading />
                    </div>
                    :
                    <button
                        className={styles.generateButton}
                        type='submit'>
                        Generate
                    </button>}
            </form>
        </div>
    );
}

export default PromptForm;