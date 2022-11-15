import './Border.css';

function Border(props){
    return (
        <div className="Border">
            {props.children}
        </div>
    )
}

export default Border