
import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from 'react-router-dom';

//import { Button } from 'reactstrap';
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  data: any
}
interface State {
  data: any,
  listData: any
}
class ListItem extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props: Props) {
    super(props);

    this.state = {
      data: props.data,
      listData: ((props.data.list == null) ? [] : props.data.list)
    }
    this.navigate = this.navigate.bind(this);


    if (this.state.data.class === "videos") {
      const listVideos = API.graphql(graphqlOperation(queries.getVideoByVideoType, { limit: 50, videoTypes: this.state.data.subclass, publishedDate: { lt: "a" } }));
      listVideos.then((json: any) => {
        console.log("Success queries.listVideos: " + json);
        console.log(json)
        this.setState({
          listData: json.data.getVideoByVideoType.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    else if (this.state.data.class === "speakers") {
      const listSpeakers = API.graphql(graphqlOperation(queries.listSpeakers, { limit: 50 }));
      listSpeakers.then((json: any) => {
        console.log("Success queries.listSpeakers: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSpeakers.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    else if (this.state.data.class === "series") {
      const listSeriess = API.graphql(graphqlOperation(queries.listSeriess, { limit: 50 }));
      listSeriess.then((json: any) => {
        console.log("Success queries.listSeriess: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSeriess.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    else if (this.state.data.class === "staff") {
      fetch('./static/data/staff.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
    else if (this.state.data.class === "events") {
      fetch('./static/data/events.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
    else if (this.state.data.class === "compassion") {
      fetch('./static/data/compassion.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
  }
  mouseOver(){
    console.log("mouseover")
  }
  navigate() {
    this.props.history.push("spirituality", "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  render() {
    var data
    (this.props.data.filterField == null) ? data = this.state.listData :
      data = this.state.listData.filter((item: any) => {
        return item[this.props.data.filterField].includes(this.props.data.filterValue)
      })

    if (this.state.data.style === "horizontal") return (
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw", width: "80vw", overflowX: "scroll", height: "15vw", whiteSpace: "nowrap" }}>
            {data.map((item: any) => {
              if (this.state.data.class === "speakers") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.data.class === "videos") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src={item.Youtube.snippet.thumbnails.default.url} />
                    <div style={{ fontWeight: "bold" }}>{item.episodeTitle}</div>
                    <div style={{ fontWeight: "bold" }}>{item.series != null ? item.series : null}</div>
                    <div>{item.publishedDate}</div>
                  </div>
                )
              }
              else return null
            }

            )}

            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "vertical") return (
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          {this.state.data.text1 != null ? (<div style={{ position: "relative", left: "20vw", width: "80vw", fontSize: "1.5vw" }}>{this.state.data.text1}</div>) : null}
          <div style={{ position: "relative", left: "20vw", width: "80vw", overflowX: "scroll", height: "15vw", whiteSpace: "nowrap" }}>
            {data.map((item: any) => {
              if (this.state.data.class === "speakers") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.data.class === "videos") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src={item.Youtube.snippet.thumbnails.default.url} />
                    <div style={{ fontWeight: "bold" }}>{item.episodeTitle}</div>
                    <div style={{ fontWeight: "bold" }}>{item.series != null ? item.series : null}</div>
                    <div>{item.publishedDate}</div>
                  </div>
                )
              }
              else if (this.state.data.class === "staff") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt={item.photoAlt} style={{ height: "10vw", marginRight: "1vw" }} src={item.photo} />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ fontWeight: "bold" }}>{item.position}</div>
                    <div>{item.email}</div>
                    <div>{item.phone}</div>
                    <a href={"https://www.facebook.com/" + item.facebook} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", }} src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>
                    <a href={"https://twitter.com/" + item.instagram} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>
                    <a href={"https://www.instagram.com//" + item.twitter} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>

                  </div>
                )
              }
              else if (this.state.data.class === "events") {
                return (
                  <div key={item.id} style={{ display: "inline-block", width: "23vw", verticalAlign: "top" }}>
                    <div style={{ whiteSpace: "normal", fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ whiteSpace: "normal" }}>{item.description}</div>
                    <div>{item.location}</div>
                    <div>{item.time}</div>
                    <Button onClick={this.navigate}><img src="./static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
                    <Button onClick={this.navigate}><img src="./static/Share.png" alt="Share Icon" />Share</Button>



                  </div>
                )
              }
              else if (this.state.data.class === "compassion") {
                return (
                  <div key={item.id} style={{ display: "inline-block", width: "23vw", verticalAlign: "top" }}>
                    <img alt={item.imageAlt} style={{ height: "10vw", marginRight: "1vw" }} src={item.image} />
                    <div style={{ whiteSpace: "normal", fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ whiteSpace: "normal" }}>{item.description}</div>
                    <div>{item.location}</div>
                    {item.website != null ? (<div><a href={item.website}>Website</a></div>) : null}
                    {item.facebook != null ? (<a href={"https://www.facebook.com/" + item.facebook} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", }} src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>) : null}
                    {item.twitter != null ? (<a href={"https://twitter.com/" + item.twitter} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>) : null}
                    {item.instagram != null ? (<a href={"https://www.instagram.com//" + item.instagram} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>) : null}



                  </div>
                )
              }
              else return null
            })}

            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "horizontalBig") return (
      <div className="ListItem horizontalBig" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw", width: "80vw", overflowX: "scroll", height: "30vw", whiteSpace: "nowrap" }}>
            {data.map((item: any) => {
              return (
                <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                  <img alt="TBD" style={{ height: "25vw", marginRight: "1vw" }} src="./static/images/teaching-4.png" />
                  <div style={{ fontWeight: "bold" }}>{item.title}</div>
                  <div>2019 • 4 Episodes</div>
                </div>
              )
            })}

            <div style={{ clear: "left" }} ></div>

          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "imageList") return (
      <div className="ListItem imageList" style={{ position: "static", width: "100vw", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw", zIndex: 100 }}>
          <h1 style={{fontSize:"3vw", fontWeight:"bold", fontFamily:"Graphik Web"}}>{this.state.data.header1}</h1>
          <h2>{this.state.data.header2}</h2>
          <div style={{ width: "50vw",fontStyle:"1.5vw", fontFamily:"Graphik Web" }}>{this.state.data.text1}</div>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute", left:"12.5vw", width:"5vw",bottom:"0vw",top:"0vw",borderColor:"#0000ff",border:"solid 10px"}}></div>
            {
              data.map((item: any, index: any) => {
                return (
                    <div style={{ position: "relative", zIndex: 100 }} key={index}>
                      <div className="imageList hoverText">
                        <h3 style={{ width: "40vw", fontSize:"2vw", fontFamily:"Graphik Web" }}>{item.title}</h3>
                        <div style={{ width: "40vw", fontSize:"1.25vw", fontFamily:"Graphik Web" }}>{item.text}</div>
                      </div>
                      <img style={{ position: "absolute", height: "20vw", width:"30vw", left: "0vw", objectFit:"cover", top: "2.5vw", boxShadow: "0px 20px 40px rgba(26, 26, 26, 0.16)" }} src={item.imageSrc} alt={item.imageAlt} />
                    </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
    return (null)
  }
}
export default withRouter(ListItem)
