

export default function ProductItem({id, title, cast , image,category}) {


    return (
        <div style={{border:"1px solid black",margin:10}}>
            <img src={image} alt=""/>
            <p>{id}</p>
            <p>{title}</p>
            <p>{cast}</p>
            <p>{category}</p>
        </div>
    )
}