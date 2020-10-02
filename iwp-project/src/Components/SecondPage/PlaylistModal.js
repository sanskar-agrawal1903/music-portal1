import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Modal from "react-modal";

class PlaylistModal extends Component{

    //addNewPlaylist
    
    clicked = () => {
        const playListName = {
            id : uuidv4(),
            name : document.getElementById("new-playlist-name").value.trim(),
            createdAt : (new Date()).toDateString(),
            // modifiedAt : (new Date()).toDateString()
        }
        // console.log(playListName)
        this.props.addNewPlaylist(playListName);

        this.props.clearAddNewSelected();

    }

    cancel = () => {
        this.props.clearAddNewSelected();
    }

    render(){
        return(
            <Modal
                isOpen={!!this.props.addNewSelected}
                contentLabel="Add New Playlist"
                onRequestClose={this.props.clearAddNewSelected}
                closeTimeoutMS={200}
                className="modal"
            >
                <h2 className="modal__title">Add New Playlist</h2>
                <input type="text" placeholder="Playlist Name" id="new-playlist-name"/>
                <br></br>
                <br></br>
                <button className="button" onClick={this.clicked}>Save</button>
            </Modal>
        )
    }
}

export default PlaylistModal;