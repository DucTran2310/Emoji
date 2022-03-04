import { useState } from "react";

import EmojiList from "../EmojiList/EmojiList";
import { SearchBar, SearchBarForm, InputSearch } from "./styles";

function InputBar() {
    const [input, setInput] = useState("");

    return (
        <SearchBar>
            <SearchBarForm action=''>
                <InputSearch
                    type='search'
                    name='search'
                    placeholder='Search for any emoji...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </SearchBarForm>

            <EmojiList keyword={input} />
        </SearchBar>
    );
}

export default InputBar;
