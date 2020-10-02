import React , {Component} from 'react';

class PlaylistIcon extends Component{

    render(){
        const photo = this.props.photoClass;
        return(
            <div className="playlist-card" onClick={this.props.onClick}>
                <div className={photo}>
                </div>
                {photo !== "playlist-card-image-add" && 
                    <div className="playlist-card-details playlist-card-details-text">
                        <p><b>Playlist Name : </b>{this.props.details.name}</p>
                        <p><b>Created At : </b>{this.props.details.createdAt}</p>
                        {/* <p><b>Modified At : </b>{this.props.details.modifiedAt}</p> */}
                    </div>
                }
                {photo !== "playlist-card-image-music" && 
                    <div className="playlist-card-details playlist-card-details-text">
                        <p><b>Create New Playlist</b></p>
                        <p><b>Click to continue</b></p>
                    </div>
                }
            </div>
        );
    }
}

export default PlaylistIcon;