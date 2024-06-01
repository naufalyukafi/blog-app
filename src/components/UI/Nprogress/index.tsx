import Router from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'nprogress/nprogress.css'
nProgress.configure({ showSpinner: false })


export default function NProgress() {
    const router = useRouter()

    useEffect(() => {
        const handleStart = () => { nProgress.start() }
        const handleComplete = () => { nProgress.done() }

        Router.ready(() => {
            router.events.on('routeChangeStart', (path, options) => !options.shallow && handleStart())
            router.events.on('routeChangeComplete', handleComplete)
            router.events.on('routeChangeError', handleComplete)
        })

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [router.events])


    return (
        <style jsx global>{`
      #nprogress .bar {
        background: #6366f1
      }
      
      #nprogress .peg {
        box-shadow: 0 0 10px #6366f1, 0 0 5px #6366f1
      }
    `}</style>
    )
}