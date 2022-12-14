'use client'

import { useRouter } from "next/navigation";

type Props = {
    article: Data;
}

function ReadMoreButton({article}: Props) {
    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")

        const url = `/article?&${queryString}`
        console.log(url)
        router.push(url)
    }


    return (
    <button onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 font-medium text-white">   
    Read More
    </button>
  )
}

export default ReadMoreButton