import './IconTitle.css'

const IconTitle = (props) => {
    return (
        <div className="icon-title">
            <img className='icon' src={props.iconpath} alt={props.iconalt} />
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default IconTitle;