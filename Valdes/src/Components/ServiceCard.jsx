const ServiceCard = ({ titre,description}) => {
    return (
        <div className="sevice-card">
            <p className="service-titre"> {titre}</p>
            <p className="service-description">{description}</p>
        </div>
    )
}

export default ServiceCard