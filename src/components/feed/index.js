import React, {Component} from 'react';

class Feed extends Component(){
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <p>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : ' curtida'} | {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios' : ''}
                </p>
                <hr/>
            </div>
        );
    }
}

export default Feed;