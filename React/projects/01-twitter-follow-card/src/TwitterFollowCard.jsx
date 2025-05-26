import { useState } from 'react';

import {} from './TwitterFollowCard.css';

// export function TwitterFollowCard({name = 'John Doe', userName = 'johndoe', isFollowing = false, formatUserName = '@johndoe'}) {
export function TwitterFollowCard({name = 'John Doe', userName = 'johndoe', initialIsFollowing = false}) {
    const avatarSource = `https://unavatar.io/${userName}`
    const avatarAltText = `Avatar de ${name}`

    //1era posición el valor y en 2da posición la función que se encargará de actualizar ese valor
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log(`Valor initialIsFollowing de ${name}: ${initialIsFollowing}`)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log(`Valor isFollowing de ${name}: ${isFollowing}`)

    // Sigue la nomenclatura de una condición terniaria: condición ? resultado si la condición es true : resutlado si la condición es false
    const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir'

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-image" alt={avatarAltText} src={avatarSource} />

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">{name}</strong>
                    {/* <em className="tw-follow-card-userInfo-userName">{formatUserName}</em> */}
                    <em className="tw-follow-card-userInfo-userName">@{userName}</em>
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton" onClick={handleClick}>{isFollowingText}</button>
            </aside>
        </article>
    )
}