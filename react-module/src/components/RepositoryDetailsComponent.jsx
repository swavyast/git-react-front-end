import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import RepositoryComponent from './RepositoryComponent';
import GitHubService from '../services/GitHubService';

function NavigatorHook(){
    const navigate = useNavigate();
    const name = useParams();

    return <RepositoryComponent navigate = {navigate} name = {name} />
}

class RepositoryDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            url : '',
            desc : '',
            gitUrl : '',
            sshUrl : '',
            createdAt : '',
            updatedAt : '',
            pushedAt : '',
            homepage : '',
            visibility : '',
            repo : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.createCard = this.createCard.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    createCard ( id, name, url, desc, gitUrl, sshUrl,
        createdAt, updatedAt, pushedAt, homepage, visibility ) {
        return (
            <div className='container' key={id}>
                <div className="row w-75 p-2 m-2 text-center">
                    <h3 className="text-center">Repository {id}'s details.</h3>
                    <div className="card overflow-auto">
                        <div className="d-inline-flex text-truncate">
                            <div className="p-2 m-1">
                                <p className="text-dark" onChange={this.handleChange}>ID : {id}</p>
                                <p className="text-dark" onChange={this.handleChange}>Name : {name}</p>
                                <p className="text-dark" onChange={this.handleChange}>Created At : {createdAt}</p>
                                <p className="text-dark" onChange={this.handleChange}>Updated At : {updatedAt}</p>
                                <p className="text-dark" onChange={this.handleChange}>Pushed At : {pushedAt}</p>
                            </div>
                            <div className="p-2 m-1">
                                <p className="text-dark" onChange={this.handleChange}><a href='{url}'>HTML URL</a></p>
                                <p className="text-dark" onChange={this.handleChange}><a href="{gitUrl}">Git URL</a></p>
                                <p className="text-dark" onChange={this.handleChange}><a href='{sshUrl}'>SSH URL</a></p>
                                <p className="text-dark" onChange={this.handleChange}><a href='{homepage}'>HOMEPAGE</a></p>
                            </div>
                            <div className="p-2 m-1">
                                <small className="text-dark" onChange={this.handleChange}>Description : <span className='text-muted'>{desc}</span></small>
                                <p className="text-dark" onChange={this.handleChange}>Visibility : {visibility}</p>
                                <p className='text-center' onChange={this.handleChange}> <button type='button' onClick={this.selectRepo}>Edit</button> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        const repos = GitHubService.getRepositoryByName(this.props.name)
        .then(data => this.setState({ repo: data }))
        .catch(error => console.error('Error fetching repository:', error));

        this.setState(
            this.id = repos.id,
            this.name = repos.name,
        )
    }

    render() {
        const { repo } = this.state;
        return (
            <div>
              {
                this.createCard(
                    repo.id,
                    repo.name,
                    repo.html_url,
                    repo.description,
                    repo.git_url,
                    repo.ssh_url,
                    repo.created_at,
                    repo.updated_at,
                    repo.pushed_at,
                    repo.homepage,
                    repo.visibility
                )
              }
            </div>
        );
    }
}

RepositoryDetailsComponent.propTypes = {};

export default RepositoryDetailsComponent;
