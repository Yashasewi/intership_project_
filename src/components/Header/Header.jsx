export default function Header() {
    return (
        <header class="header">
            <div className="container">
                <div className="logo">
                    {/* <img src="/public/favicon.ico" alt="logo" /> */}
                    <span
                        style={{
                            color: "#6855fa",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "40px",
                            }}
                        >
                            B
                        </span>
                        OT
                    </span>{" "}
                    <span
                        style={{
                            fontSize: "40px",
                        }}
                    >
                        E
                    </span>
                    xploer
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item underline">Bot Search</li>
                        <li className="nav__item">Alerts</li>
                        <li className="nav__item">Network</li>
                    </ul>
                    <div className="separator"></div>
                    <ul className="nav__list">
                        <li className="nav__item">Forta App</li>
                        <li className="nav__item">
                            <button className="subs_button">
                                Subscribe to Alerts
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
