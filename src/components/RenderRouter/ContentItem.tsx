import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ScaledImage from 'components/ScaledImage/ScaledImage';
import { Link, LinkButton } from 'components/Link/Link';
import { ItemImage } from '../types';
import './ContentItem.scss';
import DataLoader, { LocationData, LocationQuery } from './DataLoader';
import AddToCalendar, { Event } from '../AddToCalendar/AddToCalendar';

type ContentList = Array<
  | {
      type: 'button';
      navigateTo: string;
      title: string;
    }
  | {
      type: 'link';
      navigateTo: string;
      title: string;
      openNewBrowser?: boolean;
    }
  | { type: 'text'; title: string }
  | {
      type: 'event';
      date?: string;
      location: string;
    }
  | {
      type: 'arrow';
      navigateTo: string;
      title: string;
      openNewBrowser?: boolean;
    }
>;

interface BannerImage {
  src: string;
  alt: string;
  linkto?: string;
}

interface ContentType extends LocationQuery {
  style: string;
  image1?: ItemImage[];
  header1?: string;
  header2?: string;
  text1?: string;
  list?: ContentList;
  pieChart?: {
    raised: number;
    goal: number;
    text: string;
  };
  images?: BannerImage[];
  filterField?: string;
  filterValue?: string;
  calendar?: Event;
}

interface Props extends RouteComponentProps {
  content: ContentType;
}

function ContentItem({ content }: Props) {
  const [data, setData] = useState<LocationData[]>();
  useEffect(() => {
    const loadLocations = async () => {
      if (content.style === 'youth') {
        const query = content as LocationQuery;
        const data = await DataLoader.getLocations(query);
        setData(data);
      }
    };
    loadLocations();
  });

  const renderList = (boxColor = 'grey') => {
    if (!content.list) {
      return null;
    }

    return content.list.map((item, id) => {
      switch (item.type) {
        case 'button':
          return (
            <div key={id}>
              <LinkButton
                className="contentButton"
                to={item.navigateTo}
                newWindow={item.navigateTo.includes('http')}
              >
                {item.title}
              </LinkButton>
            </div>
          );

        case 'link':
          return (
            <div className="oneImageAContainer" key={id}>
              <Link
                className={`oneImageA ${
                  boxColor === 'black' ? 'inverted' : ''
                }`}
                newWindow={item.openNewBrowser}
                to={item.navigateTo}
              >
                {item.title}
              </Link>
            </div>
          );

        case 'text':
          return <div key={id}>{item.title}</div>;

        case 'event':
          return (
            <div className="oneImageEventDetails" key={id}>
              <div>{item.date}</div>
              <div>{item.location}</div>
            </div>
          );

        case 'arrow':
          return (
            <LinkButton className="madAContainer" key={id} to={item.navigateTo}>
              {item.title}
              <img
                className="madarrow"
                alt=""
                src="/static/svg/ArrowRight black.svg"
              />
            </LinkButton>
          );

        default:
          return null;
      }
    });
  };

  const image1 = content.image1
    ? content.image1[Math.floor(Math.random() * content.image1.length)]
    : undefined;

  const heroBreakpoints = {
    320: 320,
    480: 480,
    640: 640,
    1280: 640,
    1920: 960,
    2560: 1280,
  };

  switch (content.style) {
    case 'oneImage':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreyBox">
              <h1 className="oneImageH1">{content.header1}</h1>
              <h2 className="oneImageH2">{content.header2}</h2>
              <div className="oneImageText">{content.text1}</div>
              <div className="oneImageList">{renderList()}</div>
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="black"
                  textDecoration="always"
                />
              )}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'greenImage':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreenBox">
              <h1 className="oneImageH1">{content.header1}</h1>
              <h2 className="oneImageH2">{content.header2}</h2>
              <div className="oneImageText">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageBlack':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageBlackBox">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList('black')}
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="white"
                  textDecoration="always"
                />
              )}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageBlackRight':
      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList('black')}
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="white"
                  textDecoration="always"
                />
              )}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right secondImg extramrg"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'goRegionalEventsOneImageBlackRight':
      return (
        <div className="ContentItem oneImage goRegionalEventsMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right secondImg"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageGreenRight':
      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageGreenBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right secondImg bottom"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'greyTwoText':
      return (
        <div className="ContentItem greyTwoText">
          <div className="greyTwoTextH1">{content.header1}</div>
          <div className="greyTwoTextText">
            <div className="greyTwoTextJustText">{content.text1}</div>
            {renderList()}
          </div>
          <div className="greyTwoClear" />
        </div>
      );
    case 'youth':
      return data ? (
        <div className="ContentItem greyTwoText">
          <div className="greyTwoTextH1">{data[0].youth.age}</div>
          <div className="greyTwoTextText">
            <div className="greyTwoTextJustText">{data[0].youth.time}</div>
            <div className="greyTwoTextJustText">
              <a href={data[0].youth.location.googleMapLink}>
                {data[0].youth.location.name}
              </a>
              <div style={{ color: 'red' }}>
                Currently online due to Covid - email for details
              </div>
            </div>
            <div className="greyTwoTextJustText">
              <a href={'mailto:' + data[0].youth.mainContact.email}>
                {data[0].youth.mainContact.name}
              </a>{' '}
              | {data[0].youth.mainContact.phone}
            </div>

            <div className="greyTwoTextJustText">
              <div style={{ flexDirection: 'row' }}>
                <a href={data[0].youth.facebook}>
                  <img
                    className="FooterSocialImg"
                    src="/static/svg/Facebook.svg"
                    alt={'Facebook Logo'}
                    width={24}
                    height={24}
                  />
                </a>

                <a href={data[0].youth.instagram}>
                  <img
                    className="FooterSocialImg"
                    src="/static/svg/Instagram.svg"
                    alt={'Instagram Logo'}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="greyTwoClear" />
        </div>
      ) : (
        <div></div>
      );

    case 'pieChart':
      const raised = content.pieChart?.raised as number;
      const goal = content.pieChart?.goal as number;

      return (
        <div className="ContentItem pie-chart-flex">
          <div className="pie">
            <PieChart
              startAngle={270}
              lineWidth={25}
              data={[
                {
                  value: raised,
                  color: '#ffc60b',
                },
                {
                  value: Math.max(goal - raised, 0),
                  color: '#646469',
                },
              ]}
            />
            <div className="pieText">
              <div className="amount">
                ${content.pieChart?.raised.toLocaleString()}
              </div>
              <div className="text">{content.pieChart?.text}</div>
            </div>
          </div>
          <div className="greyTwoTextTextPieChart">
            <div className="greyTwoTextJustText">{content.text1}</div>
            {renderList()}
          </div>
        </div>
      );

    case 'banner-cards':
      return content.images?.length === 2 ? (
        <div className="ContentItem bannerCards">
          {content.images.map((img: BannerImage, index) => {
            return img.linkto ? (
              <Link to={img.linkto} newWindow={img.linkto.includes('http')}>
                <img
                  className="bannerCardImage"
                  key={index}
                  src={img.src}
                  alt={img.alt}
                />
              </Link>
            ) : (
              <img
                className="bannerCardImage"
                key={index}
                src={img.src}
                alt={img.alt}
              />
            );
          })}
        </div>
      ) : null;

    case 'greenTwoText':
      return (
        <div className="ContentItem greenTwoText">
          <div className="greenTwoTextH1">{content.header1}</div>
          <div className="greenTwoTextText">
            {content.text1}
            {renderList()}
          </div>
          <div className="greenTwoClear" />
        </div>
      );
    case 'mad':
      return (
        <div className="ContentItem mad">
          <div className="madPosition">
            <div className="madcontainer">
              <h1 className="madH1">{content.header1}</h1>
              <div className="madText">{content.text1}</div>
              <div className="madList">{renderList()}</div>
            </div>
            <div className="madVisuals">
              <div className="madrec"></div>
              <ScaledImage
                image={image1}
                className="madImage"
                breakpointSizes={heroBreakpoints}
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
export default withRouter(ContentItem);
