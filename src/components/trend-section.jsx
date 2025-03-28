
export default function Trend(props){
    return(
        <div>
           
            <div className="each-service">
                <img className="each-service-image" src={props.item.image} width="300px"/>
                <span className="title-section">{props.item.service}</span>
            </div>
        </div>
           
    )
}