import { useState } from "react"

const TextBox = () => {
    const [text, setText] = useState()
    return (
        <div>
            <input type={"text"} value={text} onChange={(value) => setText(value)} />
        </div>
    )
}
export default TextBox