
import React from 'react';
import "./BlogPreview.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import ReactHtmlParser from 'react-html-parser';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton
} from "react-share";
import {
  FacebookIcon,
  EmailIcon,
  TwitterIcon
} from "react-share";

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
  }

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.data.editorState.getCurrentContent()));
    return markup
  }

  shareButton() {
    return (
    <Dropdown>
      <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share-white.svg" alt=""/>Share</Dropdown.Toggle>
        <Fade timeout={1000}>
          <Dropdown.Menu className="ShareMenu">
            
            <FacebookShareButton 
              className="ShareOption" 
              // if the data is null (unlikely), window.location.href will work for ~98% of situations. the rest of the time the user is sent to https://www.themeetinghouse.com/teaching
              url={window.location.href}>
              <Dropdown.Item as="button" className="dropitem"><FacebookIcon className="social-share-icon" size={32} round />Facebook</Dropdown.Item>
            </FacebookShareButton>

            <TwitterShareButton 
              className="ShareOption" 
              url={window.location.href}
              via={"TheMeetingHouse"}
              related={["TheMeetingHouse"]}>
              <Dropdown.Item as="button" className="dropitem"><TwitterIcon className="social-share-icon" size={32} round />Twitter</Dropdown.Item>
            </TwitterShareButton>

            <EmailShareButton 
              className="ShareOption" 
              url={window.location.href}
              body={"I wanted to share this blog post with you:"}>
              <Dropdown.Item as="button" className="dropitem"><EmailIcon className="social-share-icon" size={32} round />Email</Dropdown.Item>
            </EmailShareButton>

          </Dropdown.Menu>
        </Fade>
    </Dropdown>
    )
  }

  render() {
    return (
      <div className="blog">
        <div>Below is a preview... To refresh, please toggle "Preview Your Work".</div>
        <h1 className="blog-h1" >{this.state.data.title}</h1>
        {this.state.data.author ? <div className="blog-details">by <span className="blog-author">{this.state.data.author}</span> on {new Date().toJSON().slice(0,10).replace(/-/g,'-')}</div> : null}
        <div className="ShareButtonDesktop">{this.shareButton()}</div>
        <div className="body">{ReactHtmlParser(this.getMarkup())}</div>
      </div>
    )

  }
}