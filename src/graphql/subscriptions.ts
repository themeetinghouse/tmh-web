/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTnSeries = /* GraphQL */ `
  subscription OnCreateTnSeries {
    onCreateTNSeries {
      id
      TNident
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
      sermons {
        items {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              items {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTnSeries = /* GraphQL */ `
  subscription OnUpdateTnSeries {
    onUpdateTNSeries {
      id
      TNident
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
      sermons {
        items {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              items {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTnSeries = /* GraphQL */ `
  subscription OnDeleteTnSeries {
    onDeleteTNSeries {
      id
      TNident
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
      sermons {
        items {
          id
          TNident
          title
          speaker
          deliveryDate
          description
          audioUrl
          mediaEntries {
            type
            contentType
            kind
            label
            url
          }
          public
          series_FK
          series {
            id
            TNident
            title
            description
            imageUrl
            public
            thumbnail
            startDate
            endDate
            sermonCommentCount
            homeChurchCommentCount
            sermons {
              items {
                id
                TNident
                title
                speaker
                deliveryDate
                description
                audioUrl
                mediaEntries {
                  type
                  contentType
                  kind
                  label
                  url
                }
                public
                series_FK
                series {
                  id
                  TNident
                  title
                  description
                  imageUrl
                  public
                  thumbnail
                  startDate
                  endDate
                  sermonCommentCount
                  homeChurchCommentCount
                  createdAt
                  updatedAt
                }
                sermonNoteCount
                quoteNoteCount
                homeChurchNoteCount
                sermonCommentCount
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          sermonNoteCount
          quoteNoteCount
          homeChurchNoteCount
          sermonCommentCount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTnSermon = /* GraphQL */ `
  subscription OnCreateTnSermon {
    onCreateTNSermon {
      id
      TNident
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        type
        contentType
        kind
        label
        url
      }
      public
      series_FK
      series {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          items {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                items {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTnSermon = /* GraphQL */ `
  subscription OnUpdateTnSermon {
    onUpdateTNSermon {
      id
      TNident
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        type
        contentType
        kind
        label
        url
      }
      public
      series_FK
      series {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          items {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                items {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTnSermon = /* GraphQL */ `
  subscription OnDeleteTnSermon {
    onDeleteTNSermon {
      id
      TNident
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        type
        contentType
        kind
        label
        url
      }
      public
      series_FK
      series {
        id
        TNident
        title
        description
        imageUrl
        public
        thumbnail
        startDate
        endDate
        sermonCommentCount
        homeChurchCommentCount
        sermons {
          items {
            id
            TNident
            title
            speaker
            deliveryDate
            description
            audioUrl
            mediaEntries {
              type
              contentType
              kind
              label
              url
            }
            public
            series_FK
            series {
              id
              TNident
              title
              description
              imageUrl
              public
              thumbnail
              startDate
              endDate
              sermonCommentCount
              homeChurchCommentCount
              sermons {
                items {
                  id
                  TNident
                  title
                  speaker
                  deliveryDate
                  description
                  audioUrl
                  public
                  series_FK
                  sermonNoteCount
                  quoteNoteCount
                  homeChurchNoteCount
                  sermonCommentCount
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            sermonNoteCount
            quoteNoteCount
            homeChurchNoteCount
            sermonCommentCount
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWebPage = /* GraphQL */ `
  subscription OnCreateWebPage {
    onCreateWebPage {
      id
      page {
        name
        title
        keywords
        description
        pageConfig {
          movingMenu
          showLogoText
          logoColor
          showSearch
          showFooter
          showMenu
        }
        content {
          type
          style
          image1 {
            src
            alt
          }
          header1
          header2
          text1
          text2
          link1Text
          link1Action
          link2Text
          link2Action
          link3Text
          link3Action
          button1Text
          button1Action
          list {
            title
            text
            imageSrc
            imageAlt
            navigateTo
          }
          showLocationSearch
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWebPage = /* GraphQL */ `
  subscription OnUpdateWebPage {
    onUpdateWebPage {
      id
      page {
        name
        title
        keywords
        description
        pageConfig {
          movingMenu
          showLogoText
          logoColor
          showSearch
          showFooter
          showMenu
        }
        content {
          type
          style
          image1 {
            src
            alt
          }
          header1
          header2
          text1
          text2
          link1Text
          link1Action
          link2Text
          link2Action
          link3Text
          link3Action
          button1Text
          button1Action
          list {
            title
            text
            imageSrc
            imageAlt
            navigateTo
          }
          showLocationSearch
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWebPage = /* GraphQL */ `
  subscription OnDeleteWebPage {
    onDeleteWebPage {
      id
      page {
        name
        title
        keywords
        description
        pageConfig {
          movingMenu
          showLogoText
          logoColor
          showSearch
          showFooter
          showMenu
        }
        content {
          type
          style
          image1 {
            src
            alt
          }
          header1
          header2
          text1
          text2
          link1Text
          link1Action
          link2Text
          link2Action
          link3Text
          link3Action
          button1Text
          button1Action
          list {
            title
            text
            imageSrc
            imageAlt
            navigateTo
          }
          showLocationSearch
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateF1ListGroup2 = /* GraphQL */ `
  subscription OnCreateF1ListGroup2 {
    onCreateF1ListGroup2 {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      schedule {
        id
        name
        description
        startTime
        endTime
        numberRecurrences
        startDate
        endDate
        recurrenceType {
          name
        }
        recurrences {
          recurrence {
            recurrenceWeekly {
              recurrenceFrequency
              occurOnSunday
              occurOnMonday
              occurOnTuesday
              occurOnWednesday
              occurOnThursday
              occurOnFriday
              occurOnSaturday
            }
            recurrenceMonthly {
              recurrenceFrequency
              recurrenceOffset
              monthDay
              monthWeekDay
            }
          }
        }
        createdDate
        createByPerson
        lastUpdatedDate
        lastUpdatedByPerson
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateF1ListGroup2 = /* GraphQL */ `
  subscription OnUpdateF1ListGroup2 {
    onUpdateF1ListGroup2 {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      schedule {
        id
        name
        description
        startTime
        endTime
        numberRecurrences
        startDate
        endDate
        recurrenceType {
          name
        }
        recurrences {
          recurrence {
            recurrenceWeekly {
              recurrenceFrequency
              occurOnSunday
              occurOnMonday
              occurOnTuesday
              occurOnWednesday
              occurOnThursday
              occurOnFriday
              occurOnSaturday
            }
            recurrenceMonthly {
              recurrenceFrequency
              recurrenceOffset
              monthDay
              monthWeekDay
            }
          }
        }
        createdDate
        createByPerson
        lastUpdatedDate
        lastUpdatedByPerson
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteF1ListGroup2 = /* GraphQL */ `
  subscription OnDeleteF1ListGroup2 {
    onDeleteF1ListGroup2 {
      id
      name
      description
      startDate
      expirationDate
      isOpen
      isPublic
      hasChildcare
      isSearchable
      churchCampus {
        id
        name
      }
      groupType {
        id
        name
      }
      groupURL
      gender {
        name
      }
      maritalStatus {
        name
      }
      startAgeRange
      endAgeRange
      dateRangeType {
        id
        name
      }
      leadersCount
      membersCount
      openProspectsCount
      event {
        id
        name
      }
      createdDate
      lastUpdatedDate
      isLocationPrivate
      timeZone {
        id
        name
      }
      location {
        id
        name
        description
        isOnline
        url
        address {
          address1
          address2
          address3
          city
          stProvince
          postalCode
          county
          country
          carrierRoute
          deliveryPoint
          latitude
          longitude
          createdDate
          lastUpdatedDate
        }
        createdDate
        lastUpdatedDate
      }
      schedule {
        id
        name
        description
        startTime
        endTime
        numberRecurrences
        startDate
        endDate
        recurrenceType {
          name
        }
        recurrences {
          recurrence {
            recurrenceWeekly {
              recurrenceFrequency
              occurOnSunday
              occurOnMonday
              occurOnTuesday
              occurOnWednesday
              occurOnThursday
              occurOnFriday
              occurOnSaturday
            }
            recurrenceMonthly {
              recurrenceFrequency
              recurrenceOffset
              monthDay
              monthWeekDay
            }
          }
        }
        createdDate
        createByPerson
        lastUpdatedDate
        lastUpdatedByPerson
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLivestream = /* GraphQL */ `
  subscription OnCreateLivestream {
    onCreateLivestream {
      id
      date
      startTime
      videoStartTime
      endTime
      prerollYoutubeId
      liveYoutubeId
      liveVimeoId
      showChat
      showKids
      eventTitle
      externalEventUrl
      menu {
        title
        link
        linkType
      }
      zoom {
        title
        link
      }
      titles
      homepageLink
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLivestream = /* GraphQL */ `
  subscription OnUpdateLivestream {
    onUpdateLivestream {
      id
      date
      startTime
      videoStartTime
      endTime
      prerollYoutubeId
      liveYoutubeId
      liveVimeoId
      showChat
      showKids
      eventTitle
      externalEventUrl
      menu {
        title
        link
        linkType
      }
      zoom {
        title
        link
      }
      titles
      homepageLink
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLivestream = /* GraphQL */ `
  subscription OnDeleteLivestream {
    onDeleteLivestream {
      id
      date
      startTime
      videoStartTime
      endTime
      prerollYoutubeId
      liveYoutubeId
      liveVimeoId
      showChat
      showKids
      eventTitle
      externalEventUrl
      menu {
        title
        link
        linkType
      }
      zoom {
        title
        link
      }
      titles
      homepageLink
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement {
    onCreateAnnouncement {
      id
      publishedDate
      expirationDate
      image
      parish
      crossRegional
      title
      description
      callToAction
      callToActionTitle
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement {
    onUpdateAnnouncement {
      id
      publishedDate
      expirationDate
      image
      parish
      crossRegional
      title
      description
      callToAction
      callToActionTitle
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement {
    onDeleteAnnouncement {
      id
      publishedDate
      expirationDate
      image
      parish
      crossRegional
      title
      description
      callToAction
      callToActionTitle
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSpeaker = /* GraphQL */ `
  subscription OnCreateSpeaker {
    onCreateSpeaker {
      id
      name
      image
      hidden
      createdAt
      updatedAt
      videos {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateSpeaker = /* GraphQL */ `
  subscription OnUpdateSpeaker {
    onUpdateSpeaker {
      id
      name
      image
      hidden
      createdAt
      updatedAt
      videos {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteSpeaker = /* GraphQL */ `
  subscription OnDeleteSpeaker {
    onDeleteSpeaker {
      id
      name
      image
      hidden
      createdAt
      updatedAt
      videos {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateSpeakerVideos = /* GraphQL */ `
  subscription OnCreateSpeakerVideos {
    onCreateSpeakerVideos {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
      createdAt
      updatedAt
      speaker {
        id
        name
        image
        hidden
        createdAt
        updatedAt
        videos {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateSpeakerVideos = /* GraphQL */ `
  subscription OnUpdateSpeakerVideos {
    onUpdateSpeakerVideos {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
      createdAt
      updatedAt
      speaker {
        id
        name
        image
        hidden
        createdAt
        updatedAt
        videos {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteSpeakerVideos = /* GraphQL */ `
  subscription OnDeleteSpeakerVideos {
    onDeleteSpeakerVideos {
      id
      speakerVideosSpeakerId
      speakerVideosVideoId
      videoPublishedDate
      createdAt
      updatedAt
      speaker {
        id
        name
        image
        hidden
        createdAt
        updatedAt
        videos {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateSeries = /* GraphQL */ `
  subscription OnCreateSeries {
    onCreateSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      videos {
        items {
          id
          createdBy
          createdDate
          episodeTitle
          originalEpisodeTitle
          episodeNumber
          seriesTitle
          customPlaylistIDs
          publishedDate
          recordedDate
          description
          viewCount
          closedCaptioning
          referencedMedia
          campaigns
          bibleVerses
          topics
          qandeh
          length
          YoutubeIdent
          Youtube {
            id
            kind
            etag
            snippet {
              publishedAt
              channelId
              title
              description
              thumbnails {
                default {
                  url
                  width
                  height
                }
                medium {
                  url
                  width
                  height
                }
                high {
                  url
                  width
                  height
                }
                standard {
                  url
                  width
                  height
                }
                maxres {
                  url
                  width
                  height
                }
              }
              channelTitle
              localized {
                title
                description
              }
            }
            contentDetails {
              videoId
              videoPublishedAt
              duration
              dimension
              definition
              caption
              licensedContent
              projection
              contentRating {
                acbRating
                agcomRating
                anatelRating
                bbfcRating
                bfvcRating
                bmukkRating
                catvRating
                catvfrRating
                cbfcRating
                cccRating
                cceRating
                chfilmRating
                chvrsRating
                cicfRating
                cnaRating
                cncRating
                csaRating
                cscfRating
                czfilmRating
                djctqRating
                djctqRatingReasons
                ecbmctRating
                eefilmRating
                egfilmRating
                eirinRating
                fcbmRating
                fcoRating
                fmocRating
                fpbRating
                fpbRatingReasons
                fskRating
                grfilmRating
                icaaRating
                ifcoRating
                ilfilmRating
                incaaRating
                kfcbRating
                kijkwijzerRating
                kmrbRating
                lsfRating
                mccaaRating
                mccypRating
                mcstRating
                mdaRating
                medietilsynetRating
                mekuRating
                mibacRating
                mocRating
                moctwRating
                mpaaRating
                mpaatRating
                mtrcbRating
                nbcRating
                nbcplRating
                nfrcRating
                nfvcbRating
                nkclvRating
                oflcRating
                pefilmRating
                rcnofRating
                resorteviolenciaRating
                rtcRating
                rteRating
                russiaRating
                skfilmRating
                smaisRating
                smsaRating
                tvpgRating
                ytRating
              }
              regionRestriction {
                allowed
                blocked
              }
              hasCustomThumbnail
            }
            status {
              uploadStatus
              privacyStatus
              license
              embeddable
              publicStatsViewable
            }
          }
          videoTypes
          notesURL
          videoURL
          audioURL
          thumbnailDescription
          createdAt
          updatedAt
          speakers {
            items {
              id
              speakerVideosSpeakerId
              speakerVideosVideoId
              videoPublishedDate
              createdAt
              updatedAt
              speaker {
                id
                name
                image
                hidden
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          customPlaylists {
            items {
              id
              videoID
              customPlaylistID
              createdAt
              updatedAt
              customPlaylist {
                id
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      blogs {
        items {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              createdAt
              updatedAt
              blogSeries {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                blogs {
                  nextToken
                }
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      notes {
        items {
          id
          title
          content
          questions
          jsonContent
          jsonQuestions
          episodeDescription
          episodeNumber
          seriesId
          pdf
          topics
          tags
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          verses {
            items {
              id
              key
              offset
              length
              dataType
              content
              youVersionUri
              noteId
              createdAt
              updatedAt
              note {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateSeries = /* GraphQL */ `
  subscription OnUpdateSeries {
    onUpdateSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      videos {
        items {
          id
          createdBy
          createdDate
          episodeTitle
          originalEpisodeTitle
          episodeNumber
          seriesTitle
          customPlaylistIDs
          publishedDate
          recordedDate
          description
          viewCount
          closedCaptioning
          referencedMedia
          campaigns
          bibleVerses
          topics
          qandeh
          length
          YoutubeIdent
          Youtube {
            id
            kind
            etag
            snippet {
              publishedAt
              channelId
              title
              description
              thumbnails {
                default {
                  url
                  width
                  height
                }
                medium {
                  url
                  width
                  height
                }
                high {
                  url
                  width
                  height
                }
                standard {
                  url
                  width
                  height
                }
                maxres {
                  url
                  width
                  height
                }
              }
              channelTitle
              localized {
                title
                description
              }
            }
            contentDetails {
              videoId
              videoPublishedAt
              duration
              dimension
              definition
              caption
              licensedContent
              projection
              contentRating {
                acbRating
                agcomRating
                anatelRating
                bbfcRating
                bfvcRating
                bmukkRating
                catvRating
                catvfrRating
                cbfcRating
                cccRating
                cceRating
                chfilmRating
                chvrsRating
                cicfRating
                cnaRating
                cncRating
                csaRating
                cscfRating
                czfilmRating
                djctqRating
                djctqRatingReasons
                ecbmctRating
                eefilmRating
                egfilmRating
                eirinRating
                fcbmRating
                fcoRating
                fmocRating
                fpbRating
                fpbRatingReasons
                fskRating
                grfilmRating
                icaaRating
                ifcoRating
                ilfilmRating
                incaaRating
                kfcbRating
                kijkwijzerRating
                kmrbRating
                lsfRating
                mccaaRating
                mccypRating
                mcstRating
                mdaRating
                medietilsynetRating
                mekuRating
                mibacRating
                mocRating
                moctwRating
                mpaaRating
                mpaatRating
                mtrcbRating
                nbcRating
                nbcplRating
                nfrcRating
                nfvcbRating
                nkclvRating
                oflcRating
                pefilmRating
                rcnofRating
                resorteviolenciaRating
                rtcRating
                rteRating
                russiaRating
                skfilmRating
                smaisRating
                smsaRating
                tvpgRating
                ytRating
              }
              regionRestriction {
                allowed
                blocked
              }
              hasCustomThumbnail
            }
            status {
              uploadStatus
              privacyStatus
              license
              embeddable
              publicStatsViewable
            }
          }
          videoTypes
          notesURL
          videoURL
          audioURL
          thumbnailDescription
          createdAt
          updatedAt
          speakers {
            items {
              id
              speakerVideosSpeakerId
              speakerVideosVideoId
              videoPublishedDate
              createdAt
              updatedAt
              speaker {
                id
                name
                image
                hidden
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          customPlaylists {
            items {
              id
              videoID
              customPlaylistID
              createdAt
              updatedAt
              customPlaylist {
                id
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      blogs {
        items {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              createdAt
              updatedAt
              blogSeries {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                blogs {
                  nextToken
                }
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      notes {
        items {
          id
          title
          content
          questions
          jsonContent
          jsonQuestions
          episodeDescription
          episodeNumber
          seriesId
          pdf
          topics
          tags
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          verses {
            items {
              id
              key
              offset
              length
              dataType
              content
              youVersionUri
              noteId
              createdAt
              updatedAt
              note {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteSeries = /* GraphQL */ `
  subscription OnDeleteSeries {
    onDeleteSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      videos {
        items {
          id
          createdBy
          createdDate
          episodeTitle
          originalEpisodeTitle
          episodeNumber
          seriesTitle
          customPlaylistIDs
          publishedDate
          recordedDate
          description
          viewCount
          closedCaptioning
          referencedMedia
          campaigns
          bibleVerses
          topics
          qandeh
          length
          YoutubeIdent
          Youtube {
            id
            kind
            etag
            snippet {
              publishedAt
              channelId
              title
              description
              thumbnails {
                default {
                  url
                  width
                  height
                }
                medium {
                  url
                  width
                  height
                }
                high {
                  url
                  width
                  height
                }
                standard {
                  url
                  width
                  height
                }
                maxres {
                  url
                  width
                  height
                }
              }
              channelTitle
              localized {
                title
                description
              }
            }
            contentDetails {
              videoId
              videoPublishedAt
              duration
              dimension
              definition
              caption
              licensedContent
              projection
              contentRating {
                acbRating
                agcomRating
                anatelRating
                bbfcRating
                bfvcRating
                bmukkRating
                catvRating
                catvfrRating
                cbfcRating
                cccRating
                cceRating
                chfilmRating
                chvrsRating
                cicfRating
                cnaRating
                cncRating
                csaRating
                cscfRating
                czfilmRating
                djctqRating
                djctqRatingReasons
                ecbmctRating
                eefilmRating
                egfilmRating
                eirinRating
                fcbmRating
                fcoRating
                fmocRating
                fpbRating
                fpbRatingReasons
                fskRating
                grfilmRating
                icaaRating
                ifcoRating
                ilfilmRating
                incaaRating
                kfcbRating
                kijkwijzerRating
                kmrbRating
                lsfRating
                mccaaRating
                mccypRating
                mcstRating
                mdaRating
                medietilsynetRating
                mekuRating
                mibacRating
                mocRating
                moctwRating
                mpaaRating
                mpaatRating
                mtrcbRating
                nbcRating
                nbcplRating
                nfrcRating
                nfvcbRating
                nkclvRating
                oflcRating
                pefilmRating
                rcnofRating
                resorteviolenciaRating
                rtcRating
                rteRating
                russiaRating
                skfilmRating
                smaisRating
                smsaRating
                tvpgRating
                ytRating
              }
              regionRestriction {
                allowed
                blocked
              }
              hasCustomThumbnail
            }
            status {
              uploadStatus
              privacyStatus
              license
              embeddable
              publicStatsViewable
            }
          }
          videoTypes
          notesURL
          videoURL
          audioURL
          thumbnailDescription
          createdAt
          updatedAt
          speakers {
            items {
              id
              speakerVideosSpeakerId
              speakerVideosVideoId
              videoPublishedDate
              createdAt
              updatedAt
              speaker {
                id
                name
                image
                hidden
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          customPlaylists {
            items {
              id
              videoID
              customPlaylistID
              createdAt
              updatedAt
              customPlaylist {
                id
                seriesType
                title
                description
                thumbnailDescription
                createdAt
                updatedAt
                videos {
                  nextToken
                }
              }
              video {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      blogs {
        items {
          id
          author
          createdBy
          createdDate
          publishedDate
          expirationDate
          blogStatus
          description
          thumbnailDescription
          content
          blogTitle
          topics
          tags
          hiddenMainIndex
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          blogSeries {
            items {
              id
              blogSeriesID
              blogPostID
              createdAt
              updatedAt
              blogSeries {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                blogs {
                  nextToken
                }
              }
              blogPost {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
      notes {
        items {
          id
          title
          content
          questions
          jsonContent
          jsonQuestions
          episodeDescription
          episodeNumber
          seriesId
          pdf
          topics
          tags
          createdAt
          updatedAt
          series {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            videos {
              items {
                id
                createdBy
                createdDate
                episodeTitle
                originalEpisodeTitle
                episodeNumber
                seriesTitle
                customPlaylistIDs
                publishedDate
                recordedDate
                description
                viewCount
                closedCaptioning
                referencedMedia
                campaigns
                bibleVerses
                topics
                qandeh
                length
                YoutubeIdent
                Youtube {
                  id
                  kind
                  etag
                }
                videoTypes
                notesURL
                videoURL
                audioURL
                thumbnailDescription
                createdAt
                updatedAt
                speakers {
                  nextToken
                }
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                customPlaylists {
                  nextToken
                }
              }
              nextToken
            }
            blogs {
              items {
                id
                author
                createdBy
                createdDate
                publishedDate
                expirationDate
                blogStatus
                description
                thumbnailDescription
                content
                blogTitle
                topics
                tags
                hiddenMainIndex
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogSeries {
                  nextToken
                }
              }
              nextToken
            }
            notes {
              items {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
              nextToken
            }
          }
          verses {
            items {
              id
              key
              offset
              length
              dataType
              content
              youVersionUri
              noteId
              createdAt
              updatedAt
              note {
                id
                title
                content
                questions
                jsonContent
                jsonQuestions
                episodeDescription
                episodeNumber
                seriesId
                pdf
                topics
                tags
                createdAt
                updatedAt
                series {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                verses {
                  nextToken
                }
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateCustomPlaylist = /* GraphQL */ `
  subscription OnCreateCustomPlaylist {
    onCreateCustomPlaylist {
      id
      seriesType
      title
      description
      thumbnailDescription
      createdAt
      updatedAt
      videos {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCustomPlaylist = /* GraphQL */ `
  subscription OnUpdateCustomPlaylist {
    onUpdateCustomPlaylist {
      id
      seriesType
      title
      description
      thumbnailDescription
      createdAt
      updatedAt
      videos {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCustomPlaylist = /* GraphQL */ `
  subscription OnDeleteCustomPlaylist {
    onDeleteCustomPlaylist {
      id
      seriesType
      title
      description
      thumbnailDescription
      createdAt
      updatedAt
      videos {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateCustomPlaylistVideo = /* GraphQL */ `
  subscription OnCreateCustomPlaylistVideo {
    onCreateCustomPlaylistVideo {
      id
      videoID
      customPlaylistID
      createdAt
      updatedAt
      customPlaylist {
        id
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
        videos {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateCustomPlaylistVideo = /* GraphQL */ `
  subscription OnUpdateCustomPlaylistVideo {
    onUpdateCustomPlaylistVideo {
      id
      videoID
      customPlaylistID
      createdAt
      updatedAt
      customPlaylist {
        id
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
        videos {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteCustomPlaylistVideo = /* GraphQL */ `
  subscription OnDeleteCustomPlaylistVideo {
    onDeleteCustomPlaylistVideo {
      id
      videoID
      customPlaylistID
      createdAt
      updatedAt
      customPlaylist {
        id
        seriesType
        title
        description
        thumbnailDescription
        createdAt
        updatedAt
        videos {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      video {
        id
        createdBy
        createdDate
        episodeTitle
        originalEpisodeTitle
        episodeNumber
        seriesTitle
        customPlaylistIDs
        publishedDate
        recordedDate
        description
        viewCount
        closedCaptioning
        referencedMedia
        campaigns
        bibleVerses
        topics
        qandeh
        length
        YoutubeIdent
        Youtube {
          id
          kind
          etag
          snippet {
            publishedAt
            channelId
            title
            description
            thumbnails {
              default {
                url
                width
                height
              }
              medium {
                url
                width
                height
              }
              high {
                url
                width
                height
              }
              standard {
                url
                width
                height
              }
              maxres {
                url
                width
                height
              }
            }
            channelTitle
            localized {
              title
              description
            }
          }
          contentDetails {
            videoId
            videoPublishedAt
            duration
            dimension
            definition
            caption
            licensedContent
            projection
            contentRating {
              acbRating
              agcomRating
              anatelRating
              bbfcRating
              bfvcRating
              bmukkRating
              catvRating
              catvfrRating
              cbfcRating
              cccRating
              cceRating
              chfilmRating
              chvrsRating
              cicfRating
              cnaRating
              cncRating
              csaRating
              cscfRating
              czfilmRating
              djctqRating
              djctqRatingReasons
              ecbmctRating
              eefilmRating
              egfilmRating
              eirinRating
              fcbmRating
              fcoRating
              fmocRating
              fpbRating
              fpbRatingReasons
              fskRating
              grfilmRating
              icaaRating
              ifcoRating
              ilfilmRating
              incaaRating
              kfcbRating
              kijkwijzerRating
              kmrbRating
              lsfRating
              mccaaRating
              mccypRating
              mcstRating
              mdaRating
              medietilsynetRating
              mekuRating
              mibacRating
              mocRating
              moctwRating
              mpaaRating
              mpaatRating
              mtrcbRating
              nbcRating
              nbcplRating
              nfrcRating
              nfvcbRating
              nkclvRating
              oflcRating
              pefilmRating
              rcnofRating
              resorteviolenciaRating
              rtcRating
              rteRating
              russiaRating
              skfilmRating
              smaisRating
              smsaRating
              tvpgRating
              ytRating
            }
            regionRestriction {
              allowed
              blocked
            }
            hasCustomThumbnail
          }
          status {
            uploadStatus
            privacyStatus
            license
            embeddable
            publicStatsViewable
          }
        }
        videoTypes
        notesURL
        videoURL
        audioURL
        thumbnailDescription
        createdAt
        updatedAt
        speakers {
          items {
            id
            speakerVideosSpeakerId
            speakerVideosVideoId
            videoPublishedDate
            createdAt
            updatedAt
            speaker {
              id
              name
              image
              hidden
              createdAt
              updatedAt
              videos {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        customPlaylists {
          items {
            id
            videoID
            customPlaylistID
            createdAt
            updatedAt
            customPlaylist {
              id
              seriesType
              title
              description
              thumbnailDescription
              createdAt
              updatedAt
              videos {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            video {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      id
      createdBy
      createdDate
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      customPlaylistIDs
      publishedDate
      recordedDate
      description
      viewCount
      closedCaptioning
      referencedMedia
      campaigns
      bibleVerses
      topics
      qandeh
      length
      YoutubeIdent
      Youtube {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
            }
            medium {
              url
              width
              height
            }
            high {
              url
              width
              height
            }
            standard {
              url
              width
              height
            }
            maxres {
              url
              width
              height
            }
          }
          channelTitle
          localized {
            title
            description
          }
        }
        contentDetails {
          videoId
          videoPublishedAt
          duration
          dimension
          definition
          caption
          licensedContent
          projection
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL
      thumbnailDescription
      createdAt
      updatedAt
      speakers {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      customPlaylists {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      id
      createdBy
      createdDate
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      customPlaylistIDs
      publishedDate
      recordedDate
      description
      viewCount
      closedCaptioning
      referencedMedia
      campaigns
      bibleVerses
      topics
      qandeh
      length
      YoutubeIdent
      Youtube {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
            }
            medium {
              url
              width
              height
            }
            high {
              url
              width
              height
            }
            standard {
              url
              width
              height
            }
            maxres {
              url
              width
              height
            }
          }
          channelTitle
          localized {
            title
            description
          }
        }
        contentDetails {
          videoId
          videoPublishedAt
          duration
          dimension
          definition
          caption
          licensedContent
          projection
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL
      thumbnailDescription
      createdAt
      updatedAt
      speakers {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      customPlaylists {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      id
      createdBy
      createdDate
      episodeTitle
      originalEpisodeTitle
      episodeNumber
      seriesTitle
      customPlaylistIDs
      publishedDate
      recordedDate
      description
      viewCount
      closedCaptioning
      referencedMedia
      campaigns
      bibleVerses
      topics
      qandeh
      length
      YoutubeIdent
      Youtube {
        id
        kind
        etag
        snippet {
          publishedAt
          channelId
          title
          description
          thumbnails {
            default {
              url
              width
              height
            }
            medium {
              url
              width
              height
            }
            high {
              url
              width
              height
            }
            standard {
              url
              width
              height
            }
            maxres {
              url
              width
              height
            }
          }
          channelTitle
          localized {
            title
            description
          }
        }
        contentDetails {
          videoId
          videoPublishedAt
          duration
          dimension
          definition
          caption
          licensedContent
          projection
          contentRating {
            acbRating
            agcomRating
            anatelRating
            bbfcRating
            bfvcRating
            bmukkRating
            catvRating
            catvfrRating
            cbfcRating
            cccRating
            cceRating
            chfilmRating
            chvrsRating
            cicfRating
            cnaRating
            cncRating
            csaRating
            cscfRating
            czfilmRating
            djctqRating
            djctqRatingReasons
            ecbmctRating
            eefilmRating
            egfilmRating
            eirinRating
            fcbmRating
            fcoRating
            fmocRating
            fpbRating
            fpbRatingReasons
            fskRating
            grfilmRating
            icaaRating
            ifcoRating
            ilfilmRating
            incaaRating
            kfcbRating
            kijkwijzerRating
            kmrbRating
            lsfRating
            mccaaRating
            mccypRating
            mcstRating
            mdaRating
            medietilsynetRating
            mekuRating
            mibacRating
            mocRating
            moctwRating
            mpaaRating
            mpaatRating
            mtrcbRating
            nbcRating
            nbcplRating
            nfrcRating
            nfvcbRating
            nkclvRating
            oflcRating
            pefilmRating
            rcnofRating
            resorteviolenciaRating
            rtcRating
            rteRating
            russiaRating
            skfilmRating
            smaisRating
            smsaRating
            tvpgRating
            ytRating
          }
          regionRestriction {
            allowed
            blocked
          }
          hasCustomThumbnail
        }
        status {
          uploadStatus
          privacyStatus
          license
          embeddable
          publicStatsViewable
        }
      }
      videoTypes
      notesURL
      videoURL
      audioURL
      thumbnailDescription
      createdAt
      updatedAt
      speakers {
        items {
          id
          speakerVideosSpeakerId
          speakerVideosVideoId
          videoPublishedDate
          createdAt
          updatedAt
          speaker {
            id
            name
            image
            hidden
            createdAt
            updatedAt
            videos {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      customPlaylists {
        items {
          id
          videoID
          customPlaylistID
          createdAt
          updatedAt
          customPlaylist {
            id
            seriesType
            title
            description
            thumbnailDescription
            createdAt
            updatedAt
            videos {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          video {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateBlogSeries = /* GraphQL */ `
  subscription OnCreateBlogSeries {
    onCreateBlogSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlogSeries = /* GraphQL */ `
  subscription OnUpdateBlogSeries {
    onUpdateBlogSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlogSeries = /* GraphQL */ `
  subscription OnDeleteBlogSeries {
    onDeleteBlogSeries {
      id
      seriesType
      title
      description
      thumbnailDescription
      image
      startDate
      endDate
      createdAt
      updatedAt
      blogs {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateBlogSeriesBridge = /* GraphQL */ `
  subscription OnCreateBlogSeriesBridge {
    onCreateBlogSeriesBridge {
      id
      blogSeriesID
      blogPostID
      createdAt
      updatedAt
      blogSeries {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        blogs {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      blogPost {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateBlogSeriesBridge = /* GraphQL */ `
  subscription OnUpdateBlogSeriesBridge {
    onUpdateBlogSeriesBridge {
      id
      blogSeriesID
      blogPostID
      createdAt
      updatedAt
      blogSeries {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        blogs {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      blogPost {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteBlogSeriesBridge = /* GraphQL */ `
  subscription OnDeleteBlogSeriesBridge {
    onDeleteBlogSeriesBridge {
      id
      blogSeriesID
      blogPostID
      createdAt
      updatedAt
      blogSeries {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        blogs {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
      blogPost {
        id
        author
        createdBy
        createdDate
        publishedDate
        expirationDate
        blogStatus
        description
        thumbnailDescription
        content
        blogTitle
        topics
        tags
        hiddenMainIndex
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        blogSeries {
          items {
            id
            blogSeriesID
            blogPostID
            createdAt
            updatedAt
            blogSeries {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              blogs {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogPost {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      author
      createdBy
      createdDate
      publishedDate
      expirationDate
      blogStatus
      description
      thumbnailDescription
      content
      blogTitle
      topics
      tags
      hiddenMainIndex
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      blogSeries {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      author
      createdBy
      createdDate
      publishedDate
      expirationDate
      blogStatus
      description
      thumbnailDescription
      content
      blogTitle
      topics
      tags
      hiddenMainIndex
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      blogSeries {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      author
      createdBy
      createdDate
      publishedDate
      expirationDate
      blogStatus
      description
      thumbnailDescription
      content
      blogTitle
      topics
      tags
      hiddenMainIndex
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      blogSeries {
        items {
          id
          blogSeriesID
          blogPostID
          createdAt
          updatedAt
          blogSeries {
            id
            seriesType
            title
            description
            thumbnailDescription
            image
            startDate
            endDate
            createdAt
            updatedAt
            blogs {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          blogPost {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateInstagram = /* GraphQL */ `
  subscription OnCreateInstagram {
    onCreateInstagram {
      id
      locationId
      thumbnails {
        src
        config_width
        config_height
      }
      altText
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInstagram = /* GraphQL */ `
  subscription OnUpdateInstagram {
    onUpdateInstagram {
      id
      locationId
      thumbnails {
        src
        config_width
        config_height
      }
      altText
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInstagram = /* GraphQL */ `
  subscription OnDeleteInstagram {
    onDeleteInstagram {
      id
      locationId
      thumbnails {
        src
        config_width
        config_height
      }
      altText
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVerse = /* GraphQL */ `
  subscription OnCreateVerse {
    onCreateVerse {
      id
      key
      offset
      length
      dataType
      content
      youVersionUri
      noteId
      createdAt
      updatedAt
      note {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        pdf
        topics
        tags
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            createdAt
            updatedAt
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateVerse = /* GraphQL */ `
  subscription OnUpdateVerse {
    onUpdateVerse {
      id
      key
      offset
      length
      dataType
      content
      youVersionUri
      noteId
      createdAt
      updatedAt
      note {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        pdf
        topics
        tags
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            createdAt
            updatedAt
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteVerse = /* GraphQL */ `
  subscription OnDeleteVerse {
    onDeleteVerse {
      id
      key
      offset
      length
      dataType
      content
      youVersionUri
      noteId
      createdAt
      updatedAt
      note {
        id
        title
        content
        questions
        jsonContent
        jsonQuestions
        episodeDescription
        episodeNumber
        seriesId
        pdf
        topics
        tags
        createdAt
        updatedAt
        series {
          id
          seriesType
          title
          description
          thumbnailDescription
          image
          startDate
          endDate
          createdAt
          updatedAt
          videos {
            items {
              id
              createdBy
              createdDate
              episodeTitle
              originalEpisodeTitle
              episodeNumber
              seriesTitle
              customPlaylistIDs
              publishedDate
              recordedDate
              description
              viewCount
              closedCaptioning
              referencedMedia
              campaigns
              bibleVerses
              topics
              qandeh
              length
              YoutubeIdent
              Youtube {
                id
                kind
                etag
                snippet {
                  publishedAt
                  channelId
                  title
                  description
                  channelTitle
                }
                contentDetails {
                  videoId
                  videoPublishedAt
                  duration
                  dimension
                  definition
                  caption
                  licensedContent
                  projection
                  hasCustomThumbnail
                }
                status {
                  uploadStatus
                  privacyStatus
                  license
                  embeddable
                  publicStatsViewable
                }
              }
              videoTypes
              notesURL
              videoURL
              audioURL
              thumbnailDescription
              createdAt
              updatedAt
              speakers {
                items {
                  id
                  speakerVideosSpeakerId
                  speakerVideosVideoId
                  videoPublishedDate
                  createdAt
                  updatedAt
                }
                nextToken
              }
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              customPlaylists {
                items {
                  id
                  videoID
                  customPlaylistID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          blogs {
            items {
              id
              author
              createdBy
              createdDate
              publishedDate
              expirationDate
              blogStatus
              description
              thumbnailDescription
              content
              blogTitle
              topics
              tags
              hiddenMainIndex
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              blogSeries {
                items {
                  id
                  blogSeriesID
                  blogPostID
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
          notes {
            items {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            nextToken
          }
        }
        verses {
          items {
            id
            key
            offset
            length
            dataType
            content
            youVersionUri
            noteId
            createdAt
            updatedAt
            note {
              id
              title
              content
              questions
              jsonContent
              jsonQuestions
              episodeDescription
              episodeNumber
              seriesId
              pdf
              topics
              tags
              createdAt
              updatedAt
              series {
                id
                seriesType
                title
                description
                thumbnailDescription
                image
                startDate
                endDate
                createdAt
                updatedAt
                videos {
                  nextToken
                }
                blogs {
                  nextToken
                }
                notes {
                  nextToken
                }
              }
              verses {
                items {
                  id
                  key
                  offset
                  length
                  dataType
                  content
                  youVersionUri
                  noteId
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes {
    onCreateNotes {
      id
      title
      content
      questions
      jsonContent
      jsonQuestions
      episodeDescription
      episodeNumber
      seriesId
      pdf
      topics
      tags
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      verses {
        items {
          id
          key
          offset
          length
          dataType
          content
          youVersionUri
          noteId
          createdAt
          updatedAt
          note {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes {
    onUpdateNotes {
      id
      title
      content
      questions
      jsonContent
      jsonQuestions
      episodeDescription
      episodeNumber
      seriesId
      pdf
      topics
      tags
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      verses {
        items {
          id
          key
          offset
          length
          dataType
          content
          youVersionUri
          noteId
          createdAt
          updatedAt
          note {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes {
    onDeleteNotes {
      id
      title
      content
      questions
      jsonContent
      jsonQuestions
      episodeDescription
      episodeNumber
      seriesId
      pdf
      topics
      tags
      createdAt
      updatedAt
      series {
        id
        seriesType
        title
        description
        thumbnailDescription
        image
        startDate
        endDate
        createdAt
        updatedAt
        videos {
          items {
            id
            createdBy
            createdDate
            episodeTitle
            originalEpisodeTitle
            episodeNumber
            seriesTitle
            customPlaylistIDs
            publishedDate
            recordedDate
            description
            viewCount
            closedCaptioning
            referencedMedia
            campaigns
            bibleVerses
            topics
            qandeh
            length
            YoutubeIdent
            Youtube {
              id
              kind
              etag
              snippet {
                publishedAt
                channelId
                title
                description
                channelTitle
                localized {
                  title
                  description
                }
              }
              contentDetails {
                videoId
                videoPublishedAt
                duration
                dimension
                definition
                caption
                licensedContent
                projection
                contentRating {
                  acbRating
                  agcomRating
                  anatelRating
                  bbfcRating
                  bfvcRating
                  bmukkRating
                  catvRating
                  catvfrRating
                  cbfcRating
                  cccRating
                  cceRating
                  chfilmRating
                  chvrsRating
                  cicfRating
                  cnaRating
                  cncRating
                  csaRating
                  cscfRating
                  czfilmRating
                  djctqRating
                  djctqRatingReasons
                  ecbmctRating
                  eefilmRating
                  egfilmRating
                  eirinRating
                  fcbmRating
                  fcoRating
                  fmocRating
                  fpbRating
                  fpbRatingReasons
                  fskRating
                  grfilmRating
                  icaaRating
                  ifcoRating
                  ilfilmRating
                  incaaRating
                  kfcbRating
                  kijkwijzerRating
                  kmrbRating
                  lsfRating
                  mccaaRating
                  mccypRating
                  mcstRating
                  mdaRating
                  medietilsynetRating
                  mekuRating
                  mibacRating
                  mocRating
                  moctwRating
                  mpaaRating
                  mpaatRating
                  mtrcbRating
                  nbcRating
                  nbcplRating
                  nfrcRating
                  nfvcbRating
                  nkclvRating
                  oflcRating
                  pefilmRating
                  rcnofRating
                  resorteviolenciaRating
                  rtcRating
                  rteRating
                  russiaRating
                  skfilmRating
                  smaisRating
                  smsaRating
                  tvpgRating
                  ytRating
                }
                regionRestriction {
                  allowed
                  blocked
                }
                hasCustomThumbnail
              }
              status {
                uploadStatus
                privacyStatus
                license
                embeddable
                publicStatsViewable
              }
            }
            videoTypes
            notesURL
            videoURL
            audioURL
            thumbnailDescription
            createdAt
            updatedAt
            speakers {
              items {
                id
                speakerVideosSpeakerId
                speakerVideosVideoId
                videoPublishedDate
                createdAt
                updatedAt
                speaker {
                  id
                  name
                  image
                  hidden
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            customPlaylists {
              items {
                id
                videoID
                customPlaylistID
                createdAt
                updatedAt
                customPlaylist {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                video {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        blogs {
          items {
            id
            author
            createdBy
            createdDate
            publishedDate
            expirationDate
            blogStatus
            description
            thumbnailDescription
            content
            blogTitle
            topics
            tags
            hiddenMainIndex
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            blogSeries {
              items {
                id
                blogSeriesID
                blogPostID
                createdAt
                updatedAt
                blogSeries {
                  id
                  seriesType
                  title
                  description
                  thumbnailDescription
                  image
                  startDate
                  endDate
                  createdAt
                  updatedAt
                }
                blogPost {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
        notes {
          items {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }
      verses {
        items {
          id
          key
          offset
          length
          dataType
          content
          youVersionUri
          noteId
          createdAt
          updatedAt
          note {
            id
            title
            content
            questions
            jsonContent
            jsonQuestions
            episodeDescription
            episodeNumber
            seriesId
            pdf
            topics
            tags
            createdAt
            updatedAt
            series {
              id
              seriesType
              title
              description
              thumbnailDescription
              image
              startDate
              endDate
              createdAt
              updatedAt
              videos {
                items {
                  id
                  createdBy
                  createdDate
                  episodeTitle
                  originalEpisodeTitle
                  episodeNumber
                  seriesTitle
                  customPlaylistIDs
                  publishedDate
                  recordedDate
                  description
                  viewCount
                  closedCaptioning
                  referencedMedia
                  campaigns
                  bibleVerses
                  topics
                  qandeh
                  length
                  YoutubeIdent
                  videoTypes
                  notesURL
                  videoURL
                  audioURL
                  thumbnailDescription
                  createdAt
                  updatedAt
                }
                nextToken
              }
              blogs {
                items {
                  id
                  author
                  createdBy
                  createdDate
                  publishedDate
                  expirationDate
                  blogStatus
                  description
                  thumbnailDescription
                  content
                  blogTitle
                  topics
                  tags
                  hiddenMainIndex
                  createdAt
                  updatedAt
                }
                nextToken
              }
              notes {
                items {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
                nextToken
              }
            }
            verses {
              items {
                id
                key
                offset
                length
                dataType
                content
                youVersionUri
                noteId
                createdAt
                updatedAt
                note {
                  id
                  title
                  content
                  questions
                  jsonContent
                  jsonQuestions
                  episodeDescription
                  episodeNumber
                  seriesId
                  pdf
                  topics
                  tags
                  createdAt
                  updatedAt
                }
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
      id
      comment
      tags
      noteType
      commentType
      noteId
      textSnippet
      imageUri
      key
      date
      time
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
      id
      comment
      tags
      noteType
      commentType
      noteId
      textSnippet
      imageUri
      key
      date
      time
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
      id
      comment
      tags
      noteType
      commentType
      noteId
      textSnippet
      imageUri
      key
      date
      time
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTmhUser = /* GraphQL */ `
  subscription OnCreateTmhUser($owner: String) {
    onCreateTMHUser(owner: $owner) {
      id
      given_name
      family_name
      owner
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
      }
      joined
      createdAt
      updatedAt
      email
      phone
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
      }
    }
  }
`;
export const onUpdateTmhUser = /* GraphQL */ `
  subscription OnUpdateTmhUser($owner: String) {
    onUpdateTMHUser(owner: $owner) {
      id
      given_name
      family_name
      owner
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
      }
      joined
      createdAt
      updatedAt
      email
      phone
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
      }
    }
  }
`;
export const onDeleteTmhUser = /* GraphQL */ `
  subscription OnDeleteTmhUser($owner: String) {
    onDeleteTMHUser(owner: $owner) {
      id
      given_name
      family_name
      owner
      profileImage {
        userId
        filenameSmall
        filenameMedium
        filenameLarge
        filenameUpload
      }
      joined
      createdAt
      updatedAt
      email
      phone
      stripeCustomerID
      stripeSubscriptionID
      billingAddress {
        city
        country
        line1
        line2
        postal_code
        state
      }
    }
  }
`;
