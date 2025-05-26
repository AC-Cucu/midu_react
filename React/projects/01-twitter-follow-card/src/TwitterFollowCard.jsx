import {} from './TwitterFollowCard.css';

export function TwitterFollowCard({name, userName}) {
    const avatarSource = `https://unavatar.io/${userName}`;
    const avatarAltText = `Avatar de ${name}`;

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-image" alt={avatarAltText} src={avatarSource} />

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">{name}</strong>
                    <em className="tw-follow-card-userInfo-userName">@{userName}</em>
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton">Seguir</button>
            </aside>
        </article>
    )
}