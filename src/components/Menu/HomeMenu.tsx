import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
} from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import './menu.scss';
import moment from 'moment-timezone';
import * as queries from '../../graphql/queries';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import API from '@aws-amplify/api';
import { ListLivestreamsQuery } from '../../API';
import { Link, NavLink } from 'components/Link/Link';
import { LiveEvents } from '../types';
const VideoOverlay = React.lazy(() => import('../VideoOverlay/VideoOverlay'));
const Dropdown = React.lazy(
  () => import('../../components/LiveEvents/Dropdown')
);
const AnnouncementBar = React.lazy(
  () => import('../../components/AnnouncementBar/AnnouncementBar')
);

interface SubMenuItem {
  name: string;
  location: string;
}

interface MainMenuItem {
  name: string;
  location: string;
  children?: SubMenuItem[];
}

interface Props extends RouteComponentProps {
  pageConfig: any;
}
interface State {
  MainMenuItems: any;
  overlayType: string | null;
  isOpen: boolean;
  windowHeight: number;
  position: string;
  logoColor: string;
  showLogoText: boolean;
  isSearch: boolean;
  showSearch: boolean;
  showMenu: boolean;
  movingMenu: boolean;
  showLive: boolean;
  isModal: boolean;
  showLiveBanner: boolean;
  liveTitle?: string | null;
  expand: any;
  showNotes: boolean;
  showEventsDropdown: boolean;
  liveEvents: LiveEvents;
}

class HomeMenu extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    fetch('/static/data/MainMenu.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ MainMenuItems: myJson });
      });

    this.toggle = this.toggle.bind(this);
    this.state = {
      MainMenuItems: null,
      overlayType: null,
      isOpen: false,
      liveTitle: '',
      windowHeight: 0,
      position: 'unfix',
      movingMenu: this.props.pageConfig.movingMenu,
      logoColor: this.props.pageConfig.logoColor,
      showLogoText: this.props.pageConfig.showLogoText,
      isSearch: this.props.pageConfig.isSearch ?? false,
      isModal: this.props.pageConfig.isModal ?? false,
      showSearch: this.props.pageConfig.showSearch,
      showMenu: this.props.pageConfig.showMenu,
      showLive: this.props.pageConfig.showLive,
      showLiveBanner: false,
      showEventsDropdown: false,
      liveEvents: [],
      expand: null,
      showNotes:
        moment.tz('America/Toronto').isoWeekday() === 7 ||
        (moment.tz('America/Toronto').isoWeekday() === 1 &&
          moment.tz('America/Toronto').hour() <= 12),
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  async getLive() {
    const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
    try {
      const json = (await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      const { data } = json;
      this.setState({
        liveEvents:
          data?.listLivestreams?.items
            ?.sort((a, b) =>
              (a?.startTime ?? '').localeCompare(b?.startTime ?? '')
            )
            .sort((a, b) =>
              (a?.eventTitle ?? '').localeCompare(b?.eventTitle ?? '')
            )
            .sort((a, b) =>
              (a?.videoStartTime ?? '').localeCompare(b?.videoStartTime ?? '')
            ) ?? [],
      });
      if (data?.listLivestreams?.items?.length) {
        this.interval = setInterval(() => this.tick(), 2000);
      }
      data?.listLivestreams?.items?.forEach((item) => {
        const rightNow = moment().tz('America/Toronto').format('HH:mm');
        const showTime =
          item?.startTime &&
          item?.endTime &&
          rightNow >= item.startTime &&
          rightNow < item.endTime;
        if (showTime && this.state.showLive) {
          console.log('ShowLive');
          this.setState({
            liveTitle: item?.homepageLink,
            showLiveBanner: true,
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  getWindowHeight() {
    const deviceWindow = document.getElementById('navbar');
    if (deviceWindow != null) {
      const deviceWindowHeight = window.outerHeight;
      //    console.log("from getinitiatlhight" + deviceWindowHeight);
      this.setState({
        windowHeight: deviceWindowHeight,
      });
    }
  }
  handleScroll() {
    this.getWindowHeight();
    //  console.log("scrolll" + this.state.windowHeight);
    if (
      window.scrollY <=
      this.state.windowHeight - (this.state.windowHeight / 100) * 20
    ) {
      this.setState({ position: 'unfix' });
      //     console.log("unfix");
    } else if (
      window.scrollY >
      this.state.windowHeight - (this.state.windowHeight / 100) * 20
    ) {
      this.setState({ position: 'fix' });
      //      console.log("fix");
    }
  }

  tick() {
    const rightNow = moment().tz('America/Toronto').format('HH:mm');
    const temp = [...this.state.liveEvents];
    const lastEvent = temp[temp?.length - 1];
    if (lastEvent) {
      const { endTime } = lastEvent;
      if (endTime && rightNow >= endTime) {
        clearInterval(this.interval);
        this.setState({ showLiveBanner: false });
        return;
      }
    }
    const currentEvent = this.state.liveEvents.find((event) => {
      return (
        event?.startTime &&
        event?.endTime &&
        rightNow >= event.startTime &&
        rightNow <= event.endTime
      );
    });
    if (currentEvent) {
      this.setState({ liveTitle: currentEvent.homepageLink });
      if (!this.state.showLiveBanner && this.state.showLive)
        this.setState({ showLiveBanner: true });
    }
  }
  interval: any;
  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getWindowHeight();
    await this.getLive();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.interval);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleToggleDropdown = () => {
    this.setState({ showEventsDropdown: !this.state.showEventsDropdown });
  };

  render() {
    return !this.state.isSearch ? (
      <div>
        {this.state.showLiveBanner ? (
          <button
            aria-label="Events List"
            style={{
              padding: 0,
              margin: 0,
              border: 'none',
              outline: 'none !important',
              outlineOffset: 'none !important',
            }}
            className="ignore-onClickOutside"
            onClick={this.handleToggleDropdown}
          >
            <AnnouncementBar bannerMessage={this.state.liveTitle ?? 'Live'} />
          </button>
        ) : null}
        <div>
          {this.state.showEventsDropdown ? (
            <Dropdown
              liveEvents={this.state.liveEvents}
              close={() => this.setState({ showEventsDropdown: false })}
              end={() => {
                clearInterval(this.interval);
                this.setState({
                  showLiveBanner: false,
                  showEventsDropdown: false,
                });
              }}
            />
          ) : null}

          <div
            className={
              this.state.logoColor === 'white'
                ? 'navbar-custom white'
                : 'navbar-custom'
            }
            style={{ zIndex: this.state.isModal ? 'unset' : 1000 }}
            id="navbar"
          >
            <NavbarBrand tag={Link} className="brand" to="/">
              <img
                src={'/static/logos/house-' + this.state.logoColor + '-sm.png'}
                alt="The Meeting House"
                className={
                  !this.state.showLiveBanner
                    ? 'logoHouse '
                    : 'logoHouse logoOffset'
                }
              />
              {this.state.showLogoText ? (
                <img
                  src={
                    '/static/logos/tmh-text-' + this.state.logoColor + '-sm.png'
                  }
                  alt=""
                  className={
                    !this.state.showLiveBanner
                      ? 'logoText '
                      : 'logoText logoOffset'
                  }
                />
              ) : null}
            </NavbarBrand>

            {this.state.showSearch ? (
              <div>
                <Button
                  className="search"
                  onClick={() => this.setState({ overlayType: 'search' })}
                >
                  <img src="/static/svg/Search.svg" alt="Search" />
                </Button>
                <VideoOverlay
                  onClose={() => this.setState({ overlayType: null })}
                  data={this.state.overlayType}
                ></VideoOverlay>
              </div>
            ) : null}
            {this.state.showMenu ? (
              <Navbar color="white" expand="md" className={'navbar fixed-left'}>
                <NavbarToggler onClick={this.toggle}>
                  <HamburgerMenu
                    isOpen={this.state.isOpen}
                    menuClicked={this.toggle.bind(this)}
                    width={24}
                    height={16}
                    strokeWidth={2}
                    borderRadius={45}
                    color="black"
                  />
                </NavbarToggler>
                <div className="navbar-expander">&nbsp;</div>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav
                    navbar
                    className={
                      this.state.movingMenu
                        ? 'ml-auto ' + this.state.position
                        : 'ml-auto fixed'
                    }
                  >
                    {this.state.MainMenuItems
                      ? this.state.MainMenuItems.map((item: MainMenuItem) => {
                          const shouldExpand =
                            this.state.expand === item.location ||
                            this.props.location.pathname === item.location ||
                            item.children?.some(
                              (a) => a.location === this.props.location.pathname
                            );
                          return (
                            <NavItem key={item.location}>
                              <NavLink
                                className="bigNav"
                                activeStyle={{ fontWeight: 'bold' }}
                                style={{ display: 'inline-block' }}
                                key={item.location}
                                to={item.location}
                              >
                                {item.name}
                              </NavLink>
                              {item.children != null ? (
                                <Button
                                  aria-label="Expand Menu"
                                  className="expanderButton"
                                  onClick={() => {
                                    this.setState({
                                      expand:
                                        this.state.expand === item.location
                                          ? null
                                          : item.location,
                                    });
                                  }}
                                >
                                  <div
                                    className={
                                      shouldExpand
                                        ? 'vertical-line xstate'
                                        : 'vertical-line'
                                    }
                                  ></div>
                                  <div
                                    className={
                                      shouldExpand
                                        ? 'horizontal-line xstate'
                                        : 'horizontal-line'
                                    }
                                  ></div>
                                </Button>
                              ) : null}
                              {shouldExpand
                                ? item.children
                                    ?.filter((i) =>
                                      i.name === 'Notes'
                                        ? this.state.showNotes
                                        : true
                                    )
                                    .map((item2) => (
                                      <NavLink
                                        className="smallNav"
                                        key={item2.location}
                                        to={item2.location}
                                        activeStyle={{ fontWeight: 'bold' }}
                                      >
                                        {item2.name}
                                      </NavLink>
                                    ))
                                : null}
                            </NavItem>
                          );
                        })
                      : null}
                  </Nav>
                </Collapse>
              </Navbar>
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  }
}
export default withRouter(HomeMenu);
