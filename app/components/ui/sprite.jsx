const Sprite = ({ id }) => {
    return (
        <svg className='w-6 h-6 -mt-2 pr-1 inline fill-current'>
            <use href={`/img/sprite.svg#${id}`} />
        </svg>
    );
};

export default Sprite;
