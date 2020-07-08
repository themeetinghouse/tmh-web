﻿import { Auth } from 'aws-amplify';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Button
} from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import HamburgerMenu from 'react-hamburger-menu';
import "./menu.scss"
import moment from 'moment-timezone'
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { ListLivestreamsQuery } from '../../API';

interface SubMenuItem {
  name: string;
  location: string;
}

interface MainMenuItem {
  name: string;
  location: string,
  children?: SubMenuItem[];
}

interface Props extends RouteComponentProps {
  pageConfig: any

}
interface State {
  MainMenuItems: any,
  urlHistoryState: any,
  overlayData: any,
  isOpen: boolean,
  userName: string,
  windowHeight: number,
  position: string,
  logoColor: string,
  showLogoText: boolean,
  showSearch: boolean,
  showMenu: boolean,
  movingMenu: boolean,
  showLive: boolean,
  showLiveEvent: boolean,
  liveTitle?: string | null,
  expand: any
  showNotes: boolean
}

class HomeMenu extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
    fetch('/static/data/MainMenu.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ MainMenuItems: myJson });
      })

    this.toggle = this.toggle.bind(this);
    this.state = {
      MainMenuItems: null,
      urlHistoryState: null,
      overlayData: null,
      isOpen: false,
      userName: "",
      liveTitle: "",
      windowHeight: 0,
      position: "unfix",
      movingMenu: this.props.pageConfig.movingMenu,
      logoColor: this.props.pageConfig.logoColor,
      showLogoText: this.props.pageConfig.showLogoText,
      showSearch: this.props.pageConfig.showSearch,
      showMenu: this.props.pageConfig.showMenu,
      showLive: this.props.pageConfig.showLive,
      showLiveEvent: false,
      expand: null,
      showNotes: moment.tz('America/Toronto').isoWeekday() === 7 || (moment.tz('America/Toronto').isoWeekday() === 1 && moment.tz('America/Toronto').hour() <= 12)
    };
    this.getLive()
    this.handleScroll = this.handleScroll.bind(this)
  }

  async getLive() {
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.startTime && item?.endTime && rightNow >= item.startTime && rightNow <= item.endTime

        if (showTime && this.state.showLive) {
          console.log("ShowLive")
          this.setState({ liveTitle: item?.homepageLink, showLiveEvent: true })
        }
      })
    } catch (err) {
      console.error(err)
    }
  }
  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  getWindowHeight() {
    const deviceWindow = document.getElementById('navbar');
    if (deviceWindow != null) {
      const deviceWindowHeight = window.outerHeight
      //    console.log("from getinitiatlhight" + deviceWindowHeight);
      this.setState({
        windowHeight: deviceWindowHeight
      });
    }
  }
  handleScroll() {
    this.getWindowHeight();
    //  console.log("scrolll" + this.state.windowHeight);
    if (window.scrollY <= this.state.windowHeight - ((this.state.windowHeight / 100) * 20)) {
      this.setState({ position: "unfix" })
      //     console.log("unfix");
    } else if (window.scrollY > this.state.windowHeight - ((this.state.windowHeight / 100) * 20)) {
      this.setState({ position: "fix" })
      //      console.log("fix");
    }
  }
  getState = async () => {
    Auth.currentAuthenticatedUser().then(user => {
      console.log(user.username);
      this.setState({ userName: user.username });
    }
    ).catch(err => {
      console.log("no user" + err);
      this.setState({ userName: "No User" });
    }
    )
  };


  componentDidMount() {
    this.getState();
    window.addEventListener('scroll', this.handleScroll);
    this.getWindowHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  signOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  videoOverlayClose() {
    this.setState({
      overlayData: null
    })
    window.history.pushState({}, "Videos", this.state.urlHistoryState)

  }

  handleSearchClick(data: any) {
    this.setState({
      overlayData: data,
      urlHistoryState: window.location.href
    })
    window.history.pushState({}, "Search", "search")

  }
  render() {
    // console.log(this.state.position)
    return (

      <div className={this.state.logoColor === "white" ? "navbar-custom white" : "navbar-custom"} id="navbar">
        <NavbarBrand className="brand" href="/">
          <img src={"/static/logos/house-" + this.state.logoColor + ".png"} alt="Logo: Stylized House" className="logoHouse" onClick={() => { this.props.history.push("/") }} />
          {this.state.showLogoText ? (<img src={"/static/logos/tmh-text-" + this.state.logoColor + ".png"} alt="Logo: The Meeting House" className="logoText" onClick={() => { this.props.history.push("/") }} />) : null}
        </NavbarBrand>
        {this.state.showLiveEvent ? <div className="liveEvent" onClick={() => { this.navigate('/live') }}>{this.state.liveTitle}</div> : null}
        {this.state.showSearch ? <div><img src="/static/svg/Search.svg" className="search" alt="Search" onClick={() => { this.handleSearchClick("search") }} />
          <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay></div>
          : null}
        {this.state.showMenu ? <Navbar color="white" expand="md" className={"navbar fixed-left"}>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle.bind(this)} width={24} height={16} strokeWidth={2} borderRadius={45} color="black" />
          </NavbarToggler>
          <div className="navbar-expander">&nbsp;</div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className={this.state.movingMenu ? "ml-auto " + this.state.position : "ml-auto fixed"}>
              {
                this.state.MainMenuItems ?
                  this.state.MainMenuItems.map((item: MainMenuItem) => {
                    return (
                      <div key={item.location} className="linkContainer">
                        <NavLink className="bigNav" style={{ fontWeight: (item.location.includes(this.props.location.pathname) && this.props.location.pathname !== "/") || (item.children != null && item.children.map(a => a.location).includes(this.props.location.pathname)) ? "bold" : "normal", display: "inline-block" }} key={item.location} href={item.location}>
                          {item.name}
                        </NavLink>
                        {item.children != null ?
                          <Button className="expanderButton" onClick={() => { this.state.expand === item.location ? this.setState({ expand: null }) : this.setState({ expand: item.location }) }}>
                            <div className={this.state.expand === item.location || this.props.location.pathname === item.location || (item.children != null && item.children.map(a => a.location).includes(this.props.location.pathname)) ? "vertical-line xstate" : "vertical-line"}></div>
                            <div className={this.state.expand === item.location || this.props.location.pathname === item.location || (item.children != null && item.children.map(a => a.location).includes(this.props.location.pathname)) ? "horizontal-line xstate" : "horizontal-line"}></div>
                          </Button>
                          : null}
                        {(this.state.expand === item.location || this.props.location.pathname === item.location || (item.children != null && item.children.map(a => a.location).includes(this.props.location.pathname)) ?
                          (item.children != null ?

                            item.children.filter(i => i.name === 'Notes' ? this.state.showNotes : true).map(item2 => {
                              return (<NavLink className="smallNav" key={item2.location} href={item2.location} style={{ fontWeight: (item2.location === this.props.location.pathname && this.props.location.pathname !== "/") ? "bold" : "normal" }}>{item2.name}</NavLink>)
                            }) : null)
                          : null)}
                      </div>
                    )
                  }) : null
              }
            </Nav>
          </Collapse>
        </Navbar> : null}
      </div>
    );
  }
}
export default withRouter(HomeMenu)
