import React, { Suspense } from 'react'

const TrendingSearches = React.lazy(() =>
    import('../TrendingSearches')
)

export default function LazyTrending(){
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect(() => {
        const onchange =(entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                console.log(element.isIntersecting )
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onchange, {
            rootMargin:'10 px'
        })

        observer.observe(elementRef.current)
    },[])

    return (
    <div ref={elementRef}>
            {
            show? 
            <Suspense fallback={'Loading...'}>
                <TrendingSearches/>
            </Suspense>
            : null}
    </div>
        )
}