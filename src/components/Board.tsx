import BoardItem from "./BoardItem";
import {SquareProps} from "../types";

interface BoardsProps {
    items: SquareProps[]
    onClick: (item: SquareProps) => void
}

const Board = ({items, onClick}: BoardsProps) => {
    return (
        <div className={'border'}>
            {items.map((item) => (
                <BoardItem onClick={() => onClick(item)} key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default Board;