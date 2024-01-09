import {SquareProps} from "../types";

interface BoardItemProps {
    item: SquareProps
    onClick: () => void
}

const BoardItem = ({item, onClick}: BoardItemProps) => {
    return (
        <div onClick={!item.clicked ? onClick : undefined}
             className={item.clicked ? 'card hidden' : 'card shown'}>{item.hasItem && item.clicked ? 'O' : ''}</div>
    );
};

export default BoardItem;