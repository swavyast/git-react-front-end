import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavigatorHook() {
    const navigate = useNavigate();

    return <HomePageComponent navigate={navigate} />;
}

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.submitHandler = this.submitHandler.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    submitHandler() { }

    navigateToHome() {
        this.props.navigate("/");
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container p-5">
                        <h3 className="text-center">
                            <a onClick={this.navigateToHome} className="nav-link pe-auto">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </h3>
                        <div className="card shadow-lg p-5">
                            <form onSubmit={this.submitHandler}>
                                <div className="card shadow-dark-md m-3 p-3">
                                    <div className="container p-4">
                                        <div className="row">
                                            <div className="col">
                                                <div className="row form-group p-2">
                                                    <label className="col" htmlFor="name">
                                                        Name :{" "}
                                                    </label>
                                                    <input
                                                        className="col form-input"
                                                        type="text"
                                                        placeholder="Your Full Name"
                                                        name="name"
                                                        id="name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row form-group p-2">
                                                    <label className="col" htmlFor="username">
                                                        Username :{" "}
                                                    </label>
                                                    <input
                                                        className="col form-input"
                                                        type="text"
                                                        placeholder="Github Username"
                                                        name="username"
                                                        id="username"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row form-group p-2">
                                                    <label className="col" htmlFor="email">
                                                        Email :{" "}
                                                    </label>
                                                    <input
                                                        className="col form-input"
                                                        type="text"
                                                        placeholder="Github Email"
                                                        name="email"
                                                        id="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="row form-group p-2">
                                                    <label className="col" htmlFor="password">
                                                        Password :{" "}
                                                    </label>
                                                    <input
                                                        className="col form-input"
                                                        type="text"
                                                        placeholder="Github Access Token"
                                                        name="password"
                                                        id="password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <input
                                                className="col-md-6 form-input mx-auto mt-5"
                                                type="submit"
                                                value="Submit"
                                                name="submit"
                                                id="submit"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomePageComponent.propTypes = {};

export default NavigatorHook;
