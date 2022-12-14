import { useRouter } from "next/router"

export default function Detail() {
    const router = useRouter()
    const title = router.query.params

    return (
        <div>
            <h4>{ title || "loaddddding"}</h4>
        </div>
    )
}