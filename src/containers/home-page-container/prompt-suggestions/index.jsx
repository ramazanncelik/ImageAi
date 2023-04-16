"use client"
import { useHomePage } from '../useHomepage';
import { SUGGESTIONS } from './contants';
import styles from './styles.module.scss'
import Tag from '@/components/tag'

const PromptSuggestions = () => {

    const { changePrompt } = useHomePage();

    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>
                Nothing in mind? Try one of these prompts:
            </h3>
            <div className={styles.suggestions}>
                {SUGGESTIONS.map(({ title, id }) => {
                    return (
                        <Tag onClick={changePrompt} key={id} title={title} />
                    )
                })}
            </div>
        </div>
    );
}

export default PromptSuggestions;