import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeSetting = () => {
        this.setState({
            settings:{
            ...this.state.settings,
            bitrate: 12,
        }})
    }

    changeResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
        }})
    }

    render() {
        return (
            <div>
                <button className = 'bitrate'
                        onClick = {this.changeSetting}
                >
                </button>
                <button className = 'resolution'
                        onClick = {this.changeResolution}
                >
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger
