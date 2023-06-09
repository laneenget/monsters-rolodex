import { Component } from 'react'
import './card-container.styles.css'

class CardContainer extends Component {
    render() {
        const {id, name, email} = this.props.monster;
        
        return(
            <div className='card-container'>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set26&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardContainer