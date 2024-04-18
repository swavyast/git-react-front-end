import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RepositoryComponent from './RepositoryComponent';
import GitHubService from '../../services/GitHubService';
import ErrorBoundary from './ErrorBoundary';

class RepositoryDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo :{
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
            visibility : '' 
        } 
        };

        this.handleChange = this.handleChange.bind(this);
        this.createCard = this.createCard.bind(this);
        this.editRepo = this.editRepo.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    editRepo(){
        const {repo} = this.state;
        this.setState({repo:{...repo, name : 'angular1'}})
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
                                <p className="text-dark"><a href={url}>HTML URL</a></p>
                                <p className="text-dark"><a href={gitUrl}>Git URL</a></p>
                                <p className="text-dark"><a href={sshUrl}>SSH URL</a></p>
                                <p className="text-dark"><a href={homepage}>HOMEPAGE</a></p>
                            </div>
                            <div className="p-2 m-1">
                                <small className="text-dark">Description : <span className='text-muted'>{desc}</span></small>
                                <p className="text-dark">Visibility : {visibility}</p>
                                <p className='text-center' onChange={this.handleChange}> <button type='button' onClick={this.editRepo}>Edit</button> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        const {username, name} = this.props;
        GitHubService.getRepositoryByName(username, name)
        .then(data => this.setState({ repo: data }))
        .catch(error => console.error('Error fetching repository:', error));
    }

    render() {
        const { repo } = this.state;
        console.log("repo in RepositoryDetailsComponent render method : "+repo.id);
        return <ErrorBoundary>
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
        </ErrorBoundary>
    }
}

RepositoryDetailsComponent.propTypes = {};

export default RepositoryDetailsComponent;