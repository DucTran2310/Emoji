import { useState } from "react";
import { EmojiItem, EmojiSymbol, EmojiTitle, EmojiCopy } from "./styles";

interface EmojiRow {
    emojiData: {
        title: string;
        symbol: string;
    };
}

function EmojiRow({ emojiData }: EmojiRow) {
    const [emojiCopy, setEmojiCopy] = useState("Copy Emoji!!!");

    const handleEmojiClick = () => {
        navigator.clipboard.writeText(emojiData.title);
        setTimeout(() => {
            setEmojiCopy("Copy Emoji!!!");
        }, 3000);
        setEmojiCopy("Copied!!!");
    };

    return (
        <EmojiItem key={emojiData.title} onClick={handleEmojiClick}>
            <EmojiSymbol>{emojiData.symbol}</EmojiSymbol>
            <EmojiTitle>{emojiData.title}</EmojiTitle>
            <EmojiCopy>{emojiCopy}</EmojiCopy>
        </EmojiItem>
    );
}

export default EmojiRow;
