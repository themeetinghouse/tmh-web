import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as adminQueries from './queries';
import * as customQueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import "./import-video.scss"
import awsmobile from '../../aws-exports';
import { v4 as uuidv4 } from 'uuid';
import ImportYoutube from '../../components/ImportYoutube/ImportYoutube'
import { EmptyProps } from '../../utils'
import { Modal } from 'reactstrap';
import { DeleteCustomPlaylistMutation } from 'API';

Amplify.configure(awsmobile);
const federated = {
    facebookAppId: '579712102531269'
};
interface State {
    getVideoQueryId: any
    videoTypes: any
    selectedVideoType: any
    selectedVideo: any
    videoList: any
    seriesList: any
    playlistsList: any
    toSaveVideo: any
    toSaveSeries: any
    toSavePlaylist: any
    videoEditorValues: any
    showError: any
    showAddSeries: boolean
    showAddCustomPlaylist: boolean
    getVideosState: any
    toDeleteVideo: string
    showDeleteVideo: boolean
    toDeletePlaylist: string
    showDeletePlaylist: boolean
    addToPlaylists: any
    removeFromPlaylists: any
    selectedPlaylist: any
}

const customPlaylistTypes = ['teaching-recommendations']

class Index extends React.Component<EmptyProps, State> {
    constructor(props: EmptyProps) {
        super(props)
        this.state = {
            showAddSeries: false,
            showAddCustomPlaylist: false,
            getVideoQueryId: null,
            videoTypes: [],
            selectedVideoType: "",
            selectedVideo: null,
            videoList: [],
            seriesList: [],
            playlistsList: [],
            toSaveVideo: {},
            toSaveSeries: { id: "", title: "", startDate: "", endDate: "", seriesType: "" },
            toSavePlaylist: { id: "", title: "" },
            videoEditorValues: {},
            showError: "",
            getVideosState: "Starting Up",
            toDeleteVideo: "",
            showDeleteVideo: false,
            toDeletePlaylist: "",
            showDeletePlaylist: false,
            addToPlaylists: [],
            removeFromPlaylists: [],
            selectedPlaylist: ''
        }
        fetch('/static/data/import-video.json').then(function (response) {
            return response.json();
        })
            .then((myJson) => {
                console.log(myJson)
                this.setState({ videoTypes: myJson })
            }).catch((e) => { console.log({ "Exception: ": e }) })
        this.listSeries(null)
        this.listCustomPlaylists(null)
    }
    componentDidMount() {
        this.getVideos(null)
    }
    importYoutube() {
        const z = new ImportYoutube()
        z.reloadPlaylists()

    }

    async listCustomPlaylists(nextToken: any): Promise<void> {
        try {
            const listCustomPlaylists: any = await API.graphql({
                query: adminQueries.listCustomPlaylistsAdmin,
                variables: { nextToken: nextToken, limit: 200 },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            });
            console.log({ "Success queries.listCustomPlaylist": listCustomPlaylists })
            this.setState({
                playlistsList: this.state.playlistsList.concat(listCustomPlaylists.data.listCustomPlaylists.items).sort((a: any, b: any) => this.sortById(a, b))
            })
            if (listCustomPlaylists.data.listCustomPlaylists.nextToken != null)
                this.listCustomPlaylists(listCustomPlaylists.data.listCustomPlaylists.nextToken)
        } catch (e) {
            console.error(e)
        }
    }

    listSeries(nextToken: any) {
        const listSeries: any = API.graphql({
            query: customQueries.listSeriess,
            variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });

        listSeries.then((json: any) => {
            console.log({ "Success customQueries.listSeries: ": json });
            this.setState({
                seriesList: this.state.seriesList.concat(json.data.listSeriess.items).sort((a: any, b: any) => this.sortById(a, b))

            })
            if (json.data.listSeriess.nextToken != null)
                this.listSeries(json.data.listSeriess.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    sortById(a: any, b: any) {
        const nameA = a.id.toUpperCase();
        const nameB = b.id.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    getVideos(nextToken: any) {
        if (nextToken == null) {
            const queryId = uuidv4()
            this.setState({ getVideoQueryId: queryId, getVideosState: "Loading Videos" },
                () => { this.getVideosQID(nextToken, queryId) }
            )
        }
    }
    sortByPublished = (a: any, b: any) => {
        const z = new Date(a.Youtube.snippet.publishedAt)
        const y = new Date(b.Youtube.snippet.publishedAt)
        return z > y ? -1 : z < y ? 1 : 0;
    }
    getVideosQID(nextToken: any, queryId: any) {
        //console.log(this.state.getVideoQueryId)
        if (queryId === this.state.getVideoQueryId) {

            //console.log(this.state.selectedVideoType)
            if (this.state.selectedVideoType === "") {
                const listVideos: any = API.graphql({
                    query: customQueries.listVideos,
                    variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                });
                listVideos.then((json: any) => {
                    console.log({ "Success queries.listVideos: ": json });
                    if (queryId === this.state.getVideoQueryId) {
                        this.setState({
                            videoList: this.state.videoList.concat(json.data.listVideos.items.filter((a: any) => { return a.videoTypes == null })).sort(this.sortByPublished)
                        })
                        if (json.data.listVideos.nextToken != null)
                            this.getVideosQID(json.data.listVideos.nextToken, queryId)
                        else
                            this.setState({ getVideosState: "Done" })
                    }

                }).catch((e: any) => { console.log(e) })
            }
            else {
                const getVideoByVideoType: any = API.graphql({
                    query: adminQueries.getVideoByVideoTypeAdmin,
                    variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200, videoTypes: this.state.selectedVideoType, publishedDate: { lt: "a" } },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                });

                getVideoByVideoType.then((json: any) => {
                    console.log({ "Success queries.getVideoByVideoType: ": json });
                    if (queryId === this.state.getVideoQueryId) {
                        this.setState({
                            videoList: this.state.videoList.concat(json.data.getVideoByVideoType.items).sort(this.sortByPublished)
                        })
                        if (json.data.getVideoByVideoType.nextToken != null)
                            this.getVideosQID(json.data.getVideoByVideoType.nextToken, queryId)
                        else
                            this.setState({ getVideosState: "Done" })
                    }

                }).catch((e: any) => { console.log(e) })
            }
        }
    }
    componentDidUpdate(prevProps: EmptyProps, prevState: State) {
        if (this.state.selectedVideoType !== prevState.selectedVideoType)
            this.getVideos(null)
    }
    renderYoutube() {
        return (
            <div className="youtubeBox">
                {this.state.selectedVideo ?

                    <iframe className="youtubeFrame" title="Youtube" src={"https://www.youtube.com/embed/" + this.state.selectedVideo.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    : null}
            </div>
        );

    }
    renderHeader() {
        return (
            <div className="header">
                <button className="adminButton" onClick={() => this.importYoutube()}>Add All New</button>
                <button className="adminButton">Add Unlisted</button>
                <select className="dropdown" onChange={(e: any) => { this.setState({ selectedVideo: null, videoList: [], addToPlaylists: [], removeFromPlaylists: [], selectedPlaylist: '', selectedVideoType: e.target.value }) }}>
                    {
                        this.state.videoTypes.map((item: any) => {
                            return (<option className="dropdown-option" key={item.id} value={item.id}>{item.name}</option>)
                        })

                    }
                </select>
                <button className="adminButton" onClick={() => { this.setState({ showAddSeries: true }) }}>Add Series</button>
                <button className="adminButton" onClick={() => { this.setState({ showDeleteVideo: true }) }}>Delete a Video</button>
                <button className="adminButton" onClick={() => { this.setState({ showDeletePlaylist: true }) }}>Delete a Playlist</button>
                <button className="adminButton" onClick={() => { this.setState({ showAddCustomPlaylist: true }) }}>Add Custom Playlist</button>
                <div>{this.state.getVideosState}</div>
            </div>
        )
    }
    renderVideos() {
        const z = this.state.videoTypes.filter((i: any) => i.id === this.state.selectedVideoType)[0]
        return (
            <table className="divTable">
                <thead>
                    <tr className="headRow">

                        {z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInTable).map((item: any) => {
                            return (<td className="divCell" key={item.id}>{item.name}</td>)
                        }) : null : null
                        }

                    </tr>
                </thead>
                <tbody>
                    {this.state.videoList.map((video: any) => {

                        return (
                            <tr key={video.id} className="divRow" onClick={() => { this.handleVideoSelection(video) }}>
                                {z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInTable).map((item: any) => {
                                    const list: any = item.id.split(".")
                                    let value: any = video
                                    for (const listItem of list) {
                                        value = value[listItem]
                                    }
                                    return (<td className="divCell" key={item.id}>{value}</td>)
                                }) : null : null
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    async handleVideoSelection(video: any): Promise<void> {
        this.setState({
            selectedVideo: null,
            toSaveVideo: null,
            addToPlaylists: [],
            removeFromPlaylists: [],
            selectedPlaylist: ''
        }, () => { this.setState({ selectedVideo: video, toSaveVideo: { id: video.id } }) })

        try {
            const json: any = await API.graphql({
                query: adminQueries.getVideoAdmin,
                variables: { id: video.id },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            });
            console.log({ "Success customQueries.getVideoCustomPlaylists: ": json })
            if (json.data.getVideo.customPlaylistIDs)
                this.setState({ addToPlaylists: json.data.getVideo.customPlaylistIDs })
        } catch (e) {
            console.error(e)
            if (e.data.getVideo.customPlaylistIDs)
                this.setState({ addToPlaylists: e.data.getVideo.customPlaylistIDs })
        }
    }
    async save(): Promise<void> {
        if ((this.state.toSaveVideo.videoTypes === undefined && this.state.toSaveVideo.publishedDate !== undefined) || (this.state.toSaveVideo.videoTypes !== undefined && this.state.toSaveVideo.publishedDate === undefined)) {
            this.setState({ showError: "Must set both videoType and publishedDate" })
        }
        else {
            this.setState({ showError: "Saving" })
            console.log(this.state.toSaveVideo)
            this.handleCustomPlaylists()
            try {
                const updateVideo: any = await API.graphql({
                    query: mutations.updateVideo,
                    variables: { input: this.state.toSaveVideo },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log({ "Success queries.updateVideo: ": updateVideo });
                this.setState({ showError: "Saved" })
            } catch (e) {
                if (!e.errors[0].message.includes('access'))
                    this.setState({ showError: e.errors[0].message });
                else if (e.data)
                    this.setState({ showError: "Saved" })
                console.error(e)
            }
        }
    }

    async handleCustomPlaylists(): Promise<void> {

        const toAdd = this.state.addToPlaylists
        const toRemove = this.state.removeFromPlaylists

        for (const add of toAdd) {
            for (let i = toRemove.length; i--;) {
                if (toRemove[i] === add)
                    toRemove.splice(i, 1)
            }
        }

        this.writeField('customPlaylistIDs', toAdd)

        for (const playlist of toAdd) {
            const connectionID = this.state.selectedVideo.id + '-' + playlist
            try {
                const createCustomPlaylistVideo: any = await API.graphql({
                    query: mutations.createCustomPlaylistVideo,
                    variables: { input: { id: connectionID, videoID: this.state.selectedVideo.id, customPlaylistID: playlist } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log({ "Success mutations.createCustomPlaylistVideo": createCustomPlaylistVideo })
            } catch (e) {
                console.error(e)
            }
        }

        for (const playlist of toRemove) {
            const connectionID = this.state.selectedVideo.id + '-' + playlist
            try {
                const deleteCustomPlaylistVideo: any = await API.graphql({
                    query: mutations.deleteCustomPlaylistVideo,
                    variables: { input: { id: connectionID } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log({ "Success mutations.deleteCustomPlaylistVideo": deleteCustomPlaylistVideo })
            } catch (e) {
                console.error(e)
            }
        }

    }

    async deletePlaylist() {
        if (this.state.toDeletePlaylist) {
            try {
                const deletePlaylist = await API.graphql({
                    query: mutations.deleteCustomPlaylist,
                    variables: { input: { id: this.state.toDeletePlaylist } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                }) as GraphQLResult<DeleteCustomPlaylistMutation>
                console.log({ "Success mutations.deleteVideo: ": deletePlaylist });
                this.setState({
                    toDeletePlaylist: '',
                    showError: `Deleted: ${deletePlaylist?.data?.deleteCustomPlaylist?.id}`,
                    showDeletePlaylist: false
                })
            } catch (e) {
                if (e.data && e.data.deleteCustomPlaylist) {
                    this.setState({
                        toDeletePlaylist: '',
                        showError: `Deleted: ${e.data.deleteCustomPlaylist.id}`,
                        showDeletePlaylist: false
                    })
                }
                console.error(e)
            }
        } else {
            this.setState({ showError: 'videoID required for delete operation' })
        }
    }

    async delete() {
        if (this.state.toDeleteVideo) {
            try {
                const deleteVideo: any = await API.graphql({
                    query: mutations.deleteVideo,
                    variables: { input: { id: this.state.toDeleteVideo } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });

                console.log({ "Success mutations.deleteVideo: ": deleteVideo });
                this.setState({
                    toDeleteVideo: '',
                    showError: `Deleted: ${deleteVideo.data.deleteVideo.id}`,
                    showDeleteVideo: false
                })
            } catch (e) {
                if (e.data && e.data.deleteVideo) {
                    this.setState({
                        toDeleteVideo: '',
                        showError: `Deleted: ${e.data.deleteVideo.id}`,
                        showDeleteVideo: false
                    })
                }
                console.error(e)
            }
        } else {
            this.setState({ showError: 'videoID required for delete operation' })
        }
    }
    removePlaylist(item: string): void {
        const removedIndex = this.state.addToPlaylists.indexOf(item)
        const temp = this.state.addToPlaylists
        const temp2 = temp.splice(removedIndex, 1)
        this.setState({
            addToPlaylists: temp,
            removeFromPlaylists: this.state.removeFromPlaylists.concat(temp2)
        })
    }

    writeSeriesField(field: any, value: any) {
        const tempSelectedVideo = this.state.selectedVideo
        tempSelectedVideo[field] = value

        const toSaveVideo = this.state.toSaveVideo
        toSaveVideo[field] = value

        toSaveVideo["seriesTitle"] = this.state.seriesList.filter((item: any) => item.id === value)[0].title
        this.setState({
            selectedVideo: tempSelectedVideo,
            toSaveVideo: toSaveVideo
        })
        console.log(toSaveVideo)
    }
    writeField(field: any, value: any) {
        const tempSelectedVideo = this.state.selectedVideo
        tempSelectedVideo[field] = value

        const toSaveVideo = this.state.toSaveVideo
        toSaveVideo[field] = value
        this.setState({
            selectedVideo: tempSelectedVideo,
            toSaveVideo: toSaveVideo
        })
    }
    filterSeries = (series: any, videoType: any) => {
        return series.seriesType === videoType
    }
    renderVideoEditor() {
        const z = this.state.videoTypes.filter((i: any) => i.id === this.state.selectedVideoType)[0]

        return (
            <div>
                <table className="divTable2">
                    <tbody>
                        {this.state.selectedVideo ? z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInEditor).map((item: any) => {

                            const list: any = item.id.split(".")
                            let finalValue: any = this.state.selectedVideo
                            for (const listItem of list) {
                                finalValue = finalValue[listItem]
                            }

                            return (<tr key={item.id} className="headRow">
                                <td className="divCell">{item.name}</td>
                                <td className="divCellEditor">
                                    {item.readOnly ?
                                        item.type === "Date" ?
                                            finalValue.split("T")[0]
                                            : finalValue
                                        : item.type === "Int" ?
                                            <input className="textEditor" type="number" onChange={(e: any) => this.writeField(item.id, e.target.value)} value={finalValue}></input> :
                                            item.type === "Date" ?
                                                <input className="textEditor" type="text" onChange={(e: any) => this.writeField(item.id, e.target.value)} value={finalValue}></input> :
                                                item.type === "String" ?
                                                    <input className="textEditor" onChange={(e: any) => this.writeField(item.id, e.target.value)} type="text" value={finalValue}></input> :
                                                    item.type === "VideoType" ?
                                                        <select className="dropdown2" onChange={(e: any) => this.writeField(item.id, e.target.value)} >
                                                            {
                                                                this.state.videoTypes.map((item2: any) => {
                                                                    return (<option key={item2.id} value={item2.id}>{item2.name}</option>)
                                                                })
                                                            }
                                                        </select> :
                                                        item.type === "Series" ?

                                                            <select className="dropdown2" onChange={(e: any) => this.writeSeriesField(item.id, e.target.value)} >
                                                                <option key="null" value="null">None Selected</option>

                                                                {
                                                                    this.state.seriesList.filter((a: any) => { return this.filterSeries(a, this.state.selectedVideo.videoTypes) }).map((item2: any) => {
                                                                        return (<option key={item2.id} value={item2.id}>{item2.id}</option>)
                                                                    })
                                                                }
                                                            </select> :
                                                            item.type === "CustomPlaylist" ?

                                                                <div>
                                                                    <select className="dropdown2" onChange={(e: any) => this.setState({ selectedPlaylist: e.target.value })}>
                                                                        <option key="null" value="null">None Selected</option>
                                                                        {
                                                                            this.state.playlistsList.map((item2: any) => {
                                                                                return (<option key={item2.id} value={item2.id}>{item2.id}</option>)
                                                                            })
                                                                        }
                                                                    </select><button className="adminButton" style={{ float: 'right' }} onClick={() => { if (this.state.selectedPlaylist && !this.state.addToPlaylists.includes(this.state.selectedPlaylist)) { this.setState({ addToPlaylists: this.state.addToPlaylists.concat(this.state.selectedPlaylist) }) } }}>Add</button>
                                                                    <div>
                                                                        Selected: {this.state.addToPlaylists.map((playlist: string) => { return <span className="PlaylistSelections" onClick={() => this.removePlaylist(playlist)} key={playlist}>{playlist} &nbsp;</span> })}
                                                                    </div>
                                                                </div> :
                                                                finalValue
                                    }
                                </td>
                            </tr>)
                        }) : null : null : null
                        }
                    </tbody>
                </table >
                <button onClick={() => this.save()}>Save</button>
            </div>
        )
    }
    updateCustomPlaylistField(field: string, value: string) {
        const toSave = this.state.toSavePlaylist
        toSave[field] = value
        if (field === "title")
            toSave['id'] = value
        this.setState({ toSavePlaylist: toSave })
    }

    updateSeriesField(field: any, value: any) {
        const toSaveSeries = this.state.toSaveSeries
        toSaveSeries[field] = value
        if (toSaveSeries.seriesType === "adult-sunday")
            toSaveSeries.id = toSaveSeries.title
        else
            toSaveSeries.id = toSaveSeries.seriesType + "-" + toSaveSeries.title
        this.setState({ toSaveSeries: toSaveSeries })
        console.log(toSaveSeries)
    }
    saveSeries() {
        if (this.state.toSaveSeries.title !== "" && this.state.toSaveSeries.seriesType !== "") {
            const saveSeries: any = API.graphql({
                query: mutations.createSeries,
                variables: { input: this.state.toSaveSeries },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            });

            saveSeries.then((json: any) => {
                console.log({ "Success mutations.saveSeries: ": json });

            }).catch((e: any) => { console.log(e) })
            return true;
        }
        return false;
    }
    async savePlaylist(): Promise<void> {
        if (this.state.toSavePlaylist.title) {
            try {
                const savePlaylist: any = await API.graphql({
                    query: mutations.createCustomPlaylist,
                    variables: { input: this.state.toSavePlaylist },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log({ "Success mutations.createCustomPlaylist: ": savePlaylist });
                this.setState({ showAddCustomPlaylist: false, toSavePlaylist: {} })
            } catch (e) {
                console.error(e)
                this.setState({ showAddCustomPlaylist: false })
            }
        } else {
            this.setState({ showError: 'Playlist needs title' })
        }
    }
    renderAddSeries() {
        return <Modal isOpen={this.state.showAddSeries}>
            <div>
                <div>id: {this.state.toSaveSeries.id}</div>
                <div>Name: <input value={this.state.toSaveSeries.title} onChange={(item: any) => { this.updateSeriesField("title", item.target.value) }} /></div>
                <div>Start Date: <input value={this.state.toSaveSeries.startDate} onChange={(item: any) => { this.updateSeriesField("startDate", item.target.value) }} /></div>
                <div>End Date: <input value={this.state.toSaveSeries.endDate} onChange={(item: any) => { this.updateSeriesField("endDate", item.target.value) }} /></div>
                <div>Series Type: <select className="dropdown2" value={this.state.toSaveSeries.seriesType} onChange={(item: any) => { this.updateSeriesField("seriesType", item.target.value) }} >
                    {
                        this.state.videoTypes.map((item: any) => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                        })
                    }
                </select></div>
                <button onClick={() => { if (this.saveSeries()) this.setState({ showAddSeries: false }) }}>Save</button>
                <button style={{ background: 'red' }} onClick={() => { this.setState({ showAddSeries: false }) }}>Cancel</button>
            </div>
        </Modal>
    }

    renderAddCustomPlaylist() {
        return <Modal isOpen={this.state.showAddCustomPlaylist}>
            <div>
                <div>id: {this.state.toSavePlaylist.id}</div>
                <div>Name: <input value={this.state.toSavePlaylist.title} onChange={(item: any) => { this.updateCustomPlaylistField("title", item.target.value) }} /></div>
                <div>Playlist Type: <select className="dropdown2" value={this.state.toSavePlaylist.seriesType} onChange={(item: any) => { this.updateCustomPlaylistField("seriesType", item.target.value) }} >
                    <option key='null' value='null'>None Selected</option>
                    {
                        customPlaylistTypes.map((item: string, index: number) => {
                            return (<option key={index} value={item}>{item}</option>)
                        })
                    }
                </select></div>
                <button onClick={() => { this.savePlaylist() }}>Save</button>
                <button style={{ background: 'red' }} onClick={() => { this.setState({ showAddCustomPlaylist: false, toSavePlaylist: {} }) }}>Cancel</button>
            </div>
        </Modal>
    }
    renderDeleteVideo() {
        return <Modal isOpen={this.state.showDeleteVideo}>
            <div>
                <div>Enter ID: <input value={this.state.toDeleteVideo} onChange={(item: any) => this.setState({ toDeleteVideo: item.target.value })} /></div>
                <button style={{ background: 'orange' }} onClick={() => this.delete()}>DELETE</button>
                <button style={{ background: 'grey' }} onClick={() => { this.setState({ showDeleteVideo: false, toDeleteVideo: '' }) }}>CANCEL</button>
            </div>
        </Modal>
    }
    renderDeletePlaylist() {
        return <Modal isOpen={this.state.showDeletePlaylist}>
            <div>
                <div>Enter ID: <input value={this.state.toDeletePlaylist} onChange={item => this.setState({ toDeletePlaylist: item.target.value })} /></div>
                <button style={{ background: 'orange' }} onClick={() => this.deletePlaylist()}>DELETE</button>
                <button style={{ background: 'grey' }} onClick={() => { this.setState({ showDeletePlaylist: false, toDeletePlaylist: '' }) }}>CANCEL</button>
            </div>
        </Modal>
    }
    render() {
        return (
            <AmplifyAuthenticator federated={federated}>
                <div>
                    <AdminMenu></AdminMenu>
                    {this.renderHeader()}
                    <div className="videoSelectBox">
                        {this.renderVideos()}
                        {this.renderYoutube()}
                    </div>
                    {this.renderVideoEditor()}
                    {this.renderAddSeries()}
                    {this.renderDeleteVideo()}
                    {this.renderDeletePlaylist()}
                    {this.renderAddCustomPlaylist()}
                    <div style={{ color: "#ff0000" }}>{this.state.showError}</div>
                </div >
            </AmplifyAuthenticator>
        );
    }
}
export default Index;  