import { useState } from "react";

function useInputForm() {
    const [value, setValue] = useState("");
    
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {value, onChange};
}

export default useInputForm;