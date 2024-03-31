import React from 'react';
import PropTypes from 'prop-types';
import GitHubService from '../services/GitHubService';

class RepositoryComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            repos: []
        };
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
                                <p className="text-dark">ID : {id}</p>
                                <p className="text-dark">Name : {name}</p>
                                <p className="text-dark">Created At : {createdAt}</p>
                                <p className="text-dark">Updated At : {updatedAt}</p>
                                <p className="text-dark">Pushed At : {pushedAt}</p>
                            </div>
                            <div className="p-2 m-1">
                                <p className="text-dark"><a href='{url}'>HTML URL</a></p>
                                <p className="text-dark"><a href="{gitUrl}">Git URL</a></p>
                                <p className="text-dark"><a href='{sshUrl}'>SSH URL</a></p>
                                <p className="text-dark"><a href='{homepage}'>HOMEPAGE</a></p>
                            </div>
                            <div className="p-2 m-1">
                                <small className="text-dark">Description : <span className='text-muted'>{desc}</span></small>
                                <p className="text-dark">Visibility : {visibility}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount () {
        GitHubService.getRepositories()
            .then( repos => {
                this.setState( { repos } );
            } )
            .catch( error => {
                console.error( 'Error fetching repositories:', error );
            } );
    }

    render () {
        const { repos } = this.state;
        return (
            <div>
                {repos.map( repo => (
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
                ) )}
            </div>
        );
    }
}

RepositoryComponent.propTypes = {};

export default RepositoryComponent;