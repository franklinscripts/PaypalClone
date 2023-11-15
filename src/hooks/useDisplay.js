import { useState } from "react"

export const useDisplay = (initialValue = false) => {
    const [state, setState] = useState(initialValue);

    function display() {
        return setState(prev => !prev)
    }
    return [state, display]
}