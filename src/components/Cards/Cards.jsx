export default function Cards() {
    return (
        <div className="BotCard">
            <div className="BotCard__id">
                {"   0xe852...f9f6"}
                <div className="copy-container" role="button" tabIndex="0">
                    <div className="copy-icon">
                        <svg
                            style={{
                                width: "16px",
                                height: "16px",
                                marginTop: "4px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                        </svg>
                    </div>
                </div>
                <span className=" BotCard__plan">General Data</span>
            </div>
            <div className="BotCard__heading">
                <h3 className="BotCard__title">
                    <a href="https://app.forta.network/bot/0xe8527df509859e531e58ba4154e9157eb6d9b2da202516a66ab120deabd3f9f6">
                        attack-simulation-bot
                    </a>
                </h3>
                <div className="BotCard__chains">
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_ethereum.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_optimism.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_binance.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_polygon.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_fantom.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                    <div className="BotCard__chain">
                        <img
                            className="ChainIcon"
                            src="https://explorer.forta.network/chain-icons/rsz_arbitrum.jpg"
                            alt="Ethereum"
                            style={{
                                borderRadius: "50%",
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="BotCard__description">
                The bot detects the deployment of smart contracts that contain
                exploit functions by simulating their execution within a sandbox
                environment.
            </div>
            <div className="BotCard__meta">
                <div className="MetaField">
                    <div className="MetaField__label">Developer:</div>
                    <div className="MetaField__value">
                        0x183d...139D
                        <div
                            className="copy-container"
                            role="button"
                            tabIndex="0"
                        >
                            <div className="copy-icon">
                                <svg
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MetaField">
                    <div className="MetaField__label">Alerts:</div>
                    <div className="MetaField__value">13</div>
                </div>
                <div className="MetaField">
                    <div className="MetaField__label">Status:</div>
                    <div className="MetaField__value">
                        <div className="BotStatus BotStatus--enabled">
                            Enabled
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
