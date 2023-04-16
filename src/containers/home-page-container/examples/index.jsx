"use client"
import styles from './styles.module.scss'
import { EXAMPLES } from './constants'
import Tag from '@/components/tag';
import Image from 'next/image'
import { useHomePage } from '../useHomepage';

const Examples = () => {

    const { changePrompt } = useHomePage();

    return (
        <div className={styles.examples}>
            {EXAMPLES.map(example => {
                return (
                    <div key={example.id} id={example.id} className={styles.example}>
                        <h4>{example.prompt}</h4>
                        <Tag title='Copy' onClick={()=>changePrompt(example.prompt)} />
                        <Image src={example.image} alt={example.prompt} fill />
                    </div>
                )
            })}
        </div>
    );
}

export default Examples;