import React from 'react'
import styles from './Footer .module.scss'

export const Footer:React.FC = ()=>{
    return(
        // <div className={styles.Footer}>
        <div className='absolute inset-x-0 bottom-0'>
            <div className="flex justify-center bg-gray-500 ">
                <div>

                    Footer
                </div>
            </div>
        </div>
    )
}