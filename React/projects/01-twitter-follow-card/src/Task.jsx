function Task({name, status, owner}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Estado: {status}</p>
            <p>Responsable: {owner}</p>
        </div>
    )
}

export default Task