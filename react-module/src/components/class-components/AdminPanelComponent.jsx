import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class AdminPanelComponent extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            userList: [],
            loading: true
        };

        this.revealPassword = this.revealPassword.bind( this );
    }
    revealPassword () {
        const item = document.getElementById( 'password' );
        if ( item.type = 'hidden' )
            item.type = 'text';
        if ( item.type = 'text' )
            item.type = 'hidden';
    }
    componentDidMount () {
        fetch( 'https://dummyjson.com/users' )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                this.setState( { userList: data.users, loading: false } );
            } )
            .catch( error => {
                console.error( 'Error fetching user list:', error );
                this.setState( { loading: false } );
            } );
    }

    render () {
        const { userList, loading } = this.state;
        return (
            <ErrorBoundary>
                <div className='container'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className='row d-inline-flex m-1 p-2'>
                            {userList.map( user => (
                                <div className='col-md-4 d-block p-4' key={user.id}>
                                    <div className="card shadow-lg p-2">
                                        <img className='img-fluid p-2' src={user.image} alt="avatar" />
                                        <hr />
                                        <p>Name : {user.firstName} {user.lastName}</p>
                                        <p>Date of Birth : {user.birthDate}</p>
                                        <p>Age : {user.age}</p>
                                        <p>Gender : {user.gender}</p>
                                        <p>Email : <a href='mailto:{user.email}'>{user.email}</a></p>
                                        <p>Phone : {user.phone}</p>
                                        <p>Username : {user.username}</p>
                                        <label htmlFor='password'>Password :</label>
                                        <input type='hidden' value={user.password} id='password' />
                                        <button type='button' className='btn btn-secondary' onClick={this.revealPassword}>Show/Hide Password</button>
                                        <p>Height : {user.height}</p>
                                        <p>Weight : {user.weight}</p>
                                    </div>
                                </div>
                            ) )}
                        </div>
                    )}
                </div>
            </ErrorBoundary>
        );
    }
}

export default AdminPanelComponent;