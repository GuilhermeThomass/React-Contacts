import { Link } from "react-router-dom"

export default function ErrorPage() {
    return(
        <div className="flex flex-col h-screen items-center justify-center gap-12">
            <h1>404 not found</h1>
            <Link className="flex px-8 py-4 cursor-pointer bg-sky-500 rounded-full text-white " to='/'>Back to home</Link>
        </div>
    )
}