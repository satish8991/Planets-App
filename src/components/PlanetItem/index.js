import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, imageUrl, name} = planetDetails
  return (
    <div className="item-container">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
