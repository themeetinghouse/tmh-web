
import React from 'react';
import "./SimpleItem.scss"
import ReactGA from 'react-ga';
if (window.location.hostname === "localhost")
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes("beta"))
  ReactGA.initialize('UA-4554612-19');
else
  ReactGA.initialize('UA-4554612-3');

interface Props {
  content: any
}
interface State {
  content: any
  currentPage: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      currentPage: "PushPay"
    }
  }
  imgUrl(size: any) {
    if (window.location.hostname === "localhost")
      return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/"+size
    else
      return "https://www.themeetinghouse.com/cache/"+size
  }
  navigateUrl(to: string) {
    console.log(to)
    window.location.href = to;
  }
  navigateUrlNewWindow(to: string) {
    window.open(
      to,
      '_blank' // <- This is what makes it open in a new window.
    );
  }
  
  render() {
    return (
      <div className="simpleItemDiv1" >
        <form >
          <h1 className="SimpleItemH1">{this.state.content.header1}</h1>
          <h2 className="SimpleItemH2">{this.state.content.header2}</h2>
          <hr className="SimpleItemHR" />
          <div className="SimpleItemText">{this.state.content.text1}</div>
          <div className="SimpleItemText">{this.state.content.text2}</div>
          <div className="SimpleItemText">{this.state.content.text3}</div>
          <div className="SimpleItemText">{this.state.content.text4}</div>
          <div className="SimpleItemText">{this.state.content.text5}</div>
          
          <div className="SimpleItemBottom"></div>
        </form>

      </div >)
  }
}