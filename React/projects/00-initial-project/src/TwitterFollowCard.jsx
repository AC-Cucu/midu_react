import {} from './TwitterFollowCard.css';

export function TwitterFollowCard() {
    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-image" alt="Avatar de Cucu" src="https://unavatar.io/cucu" />

                <section className="tw-follow-card-userInfo">
                    <strong className="tw-follow-card-userInfo-name">Cucu</strong>
                    <em className="tw-follow-card-userInfo-userName">@cucu</em>
                </section>
            </header>
            <aside>
                <button className="tw-follow-card-followButton">Seguir</button>
            </aside>
        </article>
    )
}