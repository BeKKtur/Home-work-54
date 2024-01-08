function Base() {
    const limit = 36;
    const object = {hasItem:false, clicked:false};
    const array = []
    for(let i = 0;i < limit;i++){
        array.push(object);
    }
    return array;
}

export default Base