const Sprite = ({ id, width, height }) => {
    return (
        <svg className={`${width ? width : 'w-6'} ${height ? height : 'h-6'} pr-1 inline fill-current`}>
            <use href={`/img/sprite.svg#${id}`} />
        </svg>
    );
};

export default Sprite;
