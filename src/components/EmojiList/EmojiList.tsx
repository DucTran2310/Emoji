// import emojiList from "@data/emojiList.json";

import EmojiRow from "@components/EmojiRow/EmojiRow";
import { EmojiListContainer } from "./styles";
import { useRecoilValue } from "recoil";
import { emojiListState } from "@components/emojiState";

interface EmojiListProps {
    keyword: string;
}

function EmojiList({ keyword }: EmojiListProps) {
    // useRecoilValue
    const emojiList = useRecoilValue(emojiListState);

    // filter emoji by title and keywords
    function filterEmoji(searchText: string, maxResults: number) {
        return emojiList
            .filter((emoji) => {
                if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                }
                if (emoji.keywords.includes(searchText)) {
                    return true;
                }
                return false;
            })
            .slice(0, maxResults);
    }

    const emoList = filterEmoji(keyword, 20);
    // console.log(emoList);

    return (
        <EmojiListContainer>
            {emoList.map((item) => (
                <EmojiRow emojiData={item} key={item.title} />
            ))}
        </EmojiListContainer>
    );
}

export default EmojiList;
