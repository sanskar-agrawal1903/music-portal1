import React , {Component} from 'react';
// import {v4 as uuidv4} from "uuid";
import axios from "axios";

import "../../sass/main.scss";
import PlaylistIcon from "./PlaylistIcon";
import PlaylistModal from './PlaylistModal';

class ViewAllPlaylist extends Component {

    state = {
        playList : [],
        addNewSelected : undefined
    }

    clearAddNewSelected = () => {
        this.setState(() => ({
            addNewSelected : undefined
        }))
    }

    addClicked = () => {
        this.setState(() => ({
            addNewSelected : true
        }))
    }

    viewPlaylist = (index) => {
        // window.location = "/viewPlaylist";
        const id = this.state.playList[index].id;
        const email = window.location.href.split("allPlaylist/")[1];
        window.open(`/viewPlaylist/${email}/${id}`);
        // console.log(icon);

        console.log();

    }

    addNewPlaylist = (playListName)=>{
        // console.log("now " , playListName);
        const email = window.location.href.split("allPlaylist/")[1];
        if(playListName.name === undefined || playListName.name === ""){
            alert("Please enter a name");
        }
        else if(this.state.playList.some(icon => icon.name === playListName.name)){
            alert("Playlist with same name already exists");
        } else{
            axios.post(`/allPlaylist/${email}/${playListName.name}/${playListName.createdAt}` , {})
                .then(result => {
                    if(result.data.message === "success"){
                        this.setState((prevState) => ({
                            playList : prevState.playList.concat([playListName])
                        }))
                    }
                    else{
                        alert("Unable to add playlist")
                    }
                })
                .catch(error => {
                    alert("Unable to add playlist")
                })

            
            console.log(playListName);
        }

    }

    componentDidMount(){
        const email = window.location.href.split("allPlaylist/")[1];
        //convert _id to id
        axios.get(`/allPlaylist/${email}`)
            .then(result => {
                const res = result.data;
                console.log("result " + res);
                const ans = [];
                res.forEach(element => {
                    ans.push({
                        id : element.id,
                        name: element.name, 
                        createdAt: element.createdAt, 
                        // modifiedAt: "Tue Sep 22 2020"
                    })
                });
                console.log(res);
                this.setState(() => ({
                    playList : ans
                }))
            })
            .catch(error => {
                alert("some error has occured")
            })
    }

    render(){

        return (
            <div className="all-playlist">
                <div className="all-playlist-background"></div>
                <div className="display-section">
                    {
                        console.log(this.state.playList)
                    }
                    <PlaylistIcon photoClass="playlist-card-image-add" onClick={this.addClicked}  />
                    {
                        this.state.playList.map((icon , index) => <PlaylistIcon photoClass="playlist-card-image-music" details={icon} onClick={() => this.viewPlaylist(index)}/>)
                    }
                </div>
                <PlaylistModal 
                    addNewSelected={this.state.addNewSelected}
                    clearAddNewSelected={this.clearAddNewSelected}
                    addNewPlaylist={this.addNewPlaylist}/>
            </div>
        )
    }
}

export default ViewAllPlaylist
