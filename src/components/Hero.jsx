import Cards from "./Cards";

export default function Hero() {
    return (
        <>
            <div>
                <section className="hero__section">
                    <div className="hero">
                        <div className="hero__text">
                            <h1 className="hero__title">
                                Detection <span>Bots</span>
                            </h1>
                            <button>
                                Build Your own bot
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" x2="21" y1="14" y2="3" />
                                </svg>
                            </button>
                        </div>
                        <div className="hero__description">
                            <p>
                                Forta comprises a decentralized network of
                                independent bots that scan all transactions and
                                block-by-block state changes for threats and
                                anomalies. When an issue is detected, scan bots
                                send alerts to subscribers, which enables them
                                to take action.
                            </p>
                        </div>
                        <div className="Search__bar">
                            <input type="text" />
                            <button type="submit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-search"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                        </div>
                        <div className="chipButtons">
                            <button className="chipButton">
                                <svg
                                    style={{
                                        fill: "#f1f1f1",
                                        marginRight: "6px",
                                        width: "18px",
                                        height: "18px",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-star"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Popular Bots
                            </button>
                            <button className="chipButton">
                                <svg
                                    style={{
                                        rotate: "90deg",
                                        marginRight: "6px",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-bar-chart"
                                >
                                    <line x1="12" x2="12" y1="20" y2="10" />
                                    <line x1="18" x2="18" y1="20" y2="4" />
                                    <line x1="6" x2="6" y1="20" y2="16" />
                                </svg>
                                Recent Bots
                            </button>
                            <button className="chipButton discover">
                                Discover Protocols
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-external-link"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" x2="21" y1="14" y2="3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="cards__section">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </section>
                <footer class="Footer">
                    <div class="Footer__company">
                        <a
                            href="https://forta.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span></span>©️ 2023 Forta Foundation
                        </a>
                    </div>
                    <div class="Footer__links">
                        <div class="Footer__links-item">
                            <a
                                href="https://discord.gg/KACdTEutQq"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Discord
                            </a>
                        </div>
                        <div class="Footer__links-item">
                            <a
                                href="https://forta.org/legal/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Terms of Service
                            </a>
                        </div>
                        <div class="Footer__links-item">
                            <a
                                href="https://forta.org/privacy/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
