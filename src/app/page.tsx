import Image from 'next/image'

import { Base } from '../app/component/Base/Base'
import { Footer } from '../app/component/Footer/Footer'
import { Header } from '../app/component/Header/Header'
import styles from '../styles/Home.module.scss'

import Link from 'next/link'

export default function Home() {
 
  return (
    <div>
      <Base>
          <div className='container m-1 w-1/4 h-20 border border-black'>
            <div className="flex flex-row h-full" >
              <img src="../IMG_5998.jpg" alt='youtube' className='h-full'/>
              
              <div className='mx-1'>
                <Link href = "https://www.youtube.com/">
                  <p>youtubeのカード</p>
                </Link>
                ロゴ
              </div>
            </div>
          </div>
      
      
        <div className='container m-1 w-1/4 h-20 border border-black'>
          <div className="flex flex-row h-full" >
            <img src="../IMG_5999.jpg" alt='Google' className='h-full'/>
            <div className='mx-1'>
              <Link href = "https://www.google.com/?hl=ja&pli=1&authuser=1">
                <p>Googleのカード</p>
              </Link>
              <p>ロゴ</p>
            </div>
          </div>
        </div>
      </Base>
    </div>
  ) 
}
