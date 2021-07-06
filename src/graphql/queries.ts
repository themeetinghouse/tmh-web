/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBiblePassage = /* GraphQL */ `
  query GetBiblePassage($bibleId: String, $passage: String) {
    getBiblePassage(bibleId: $bibleId, passage: $passage) {
      data {
        id
        bibleId
        orgId
        content
        reference
        copyright
      }
      meta {
        fums
        fumsId
        fumsJsInclude
        fumsJs
        fumsNoScript
      }
    }
  }
`;
export const getYoutubeVideoSearch = /* GraphQL */ `
  query GetYoutubeVideoSearch($videoId: String) {
    getYoutubeVideoSearch(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
      }
      nextPageToken
      items {
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
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
    }
  }
`;
export const getYoutubePlaylistItems = /* GraphQL */ `
  query GetYoutubePlaylistItems($playlistId: String, $pageToken: String) {
    getYoutubePlaylistItems(playlistId: $playlistId, pageToken: $pageToken) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
      }
      nextPageToken
      items {
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
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
    }
  }
`;
export const getYoutubePlaylist = /* GraphQL */ `
  query GetYoutubePlaylist($nextPageToken: String) {
    getYoutubePlaylist(nextPageToken: $nextPageToken) {
      kind
      etag
      nextPageToken
      pageInfo {
        totalResults
        resultsPerPage
      }
      items {
        kind
        etag
        id
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
      }
    }
  }
`;
export const getYoutubeVideoContentDetails = /* GraphQL */ `
  query GetYoutubeVideoContentDetails($videoId: String) {
    getYoutubeVideoContentDetails(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
      }
      nextPageToken
      items {
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
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
    }
  }
`;
export const getYoutubeVideoStatistics = /* GraphQL */ `
  query GetYoutubeVideoStatistics($videoId: String) {
    getYoutubeVideoStatistics(videoId: $videoId) {
      kind
      etag
      pageInfo {
        totalResults
        resultsPerPage
      }
      nextPageToken
      items {
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
        statistics {
          viewCount
          likeCount
          dislikeCount
          favoriteCount
          commentCount
        }
      }
    }
  }
`;
export const getYoutubeCaptionlist = /* GraphQL */ `
  query GetYoutubeCaptionlist($videoId: String) {
    getYoutubeCaptionlist(videoId: $videoId) {
      kind
      etag
      items {
        kind
        etag
        id
        snippet {
          videoId
          lastUpdated
          trackKind
          language
          name
          audioTrackType
          isCC
          isLarge
          isEasyReader
          isDraft
          isAutoSynced
          status
        }
      }
    }
  }
`;
export const downloadYoutubeCaption = /* GraphQL */ `
  query DownloadYoutubeCaption(
    $videoId: String
    $tlang: String
    $trackKind: String
    $name: String
  ) {
    downloadYoutubeCaption(
      videoId: $videoId
      tlang: $tlang
      trackKind: $trackKind
      name: $name
    ) {
      transcript {
        text {
          dur
          start
          content
        }
      }
    }
  }
`;
export const getTakenoteSeries = /* GraphQL */ `
  query GetTakenoteSeries($user: Int, $start: Int, $count: Int) {
    getTakenoteSeries(user: $user, start: $start, count: $count) {
      id
      title
      description
      imageUrl
      public
      thumbnail
      startDate
      endDate
      sermonCommentCount
      homeChurchCommentCount
    }
  }
`;
export const getTakenoteSermon = /* GraphQL */ `
  query GetTakenoteSermon($seriesId: String, $user: Int) {
    getTakenoteSermon(seriesId: $seriesId, user: $user) {
      id
      title
      speaker
      deliveryDate
      description
      audioUrl
      mediaEntries {
        id
        type
        contentType
        kind
        label
        url
      }
      public
      series_FK
      sermonNoteCount
      quoteNoteCount
      homeChurchNoteCount
      sermonCommentCount
    }
  }
`;
export const getTakenoteSermonVerses = /* GraphQL */ `
  query GetTakenoteSermonVerses($sermondId: String) {
    getTakenoteSermonVerses(sermondId: $sermondId) {
      sermonVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
      }
    }
  }
`;
export const getTakenoteLocations = /* GraphQL */ `
  query GetTakenoteLocations {
    getTakenoteLocations {
      _id
      id
      name
      categories
      location {
        longitude
        latitude
      }
      state
    }
  }
`;
export const getFbEvents = /* GraphQL */ `
  query GetFbEvents($pageId: String) {
    getFBEvents(pageId: $pageId) {
      data {
        description
        end_time
        is_online
        online_event_format
        online_event_third_party_url
        name
        place {
          name
          location {
            city
            country
            latitude
            longitude
            state
            street
            zip
          }
          id
        }
        start_time
        id
        ticket_uri
        event_times {
          description
          start_time
          end_time
          name
          place {
            name
            location {
              city
              country
              latitude
              longitude
              state
              street
              zip
            }
            id
          }
          id
          ticket_uri
          cover {
            id
            offset_x
            offset_y
            source
          }
        }
        cover {
          id
          offset_x
          offset_y
          source
        }
        picture {
          url
        }
      }
      paging {
        cursors {
          before
          after
        }
      }
    }
  }
`;
export const getInstaPhotos = /* GraphQL */ `
  query GetInstaPhotos($pageId: String) {
    getInstaPhotos(pageId: $pageId) {
      data {
        id
        media_url
        caption
        comments_count
        like_count
        media_type
        thumbnail_url
        timestamp
        permalink
        shortcode
      }
      paging {
        cursors {
          before
          after
        }
      }
    }
  }
`;
export const getTakenoteNotes = /* GraphQL */ `
  query GetTakenoteNotes($sermonId: String, $noteType: String) {
    getTakenoteNotes(sermonId: $sermonId, noteType: $noteType) {
      homeChurchNotes {
        id
        noteType
        content
        position
        timecode
        sermons_FK
      }
      sermonNotes {
        id
        noteType
        content
        position
        timecode
        sermons_FK
      }
      sermonVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
      }
      homeChurchVerses {
        id
        chapterVerse
        translation
        content
        sermons_FK
        notes_FK
      }
    }
  }
`;
export const fuzzySearchVideos = /* GraphQL */ `
  query FuzzySearchVideos(
    $filter: String
    $sort: fuzzySearchableVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    fuzzySearchVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const fuzzySearchVideosByType = /* GraphQL */ `
  query FuzzySearchVideosByType(
    $videoType: String
    $filter: String
    $sort: fuzzySearchableVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    fuzzySearchVideosByType(
      videoType: $videoType
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const f1ListGroupTypes = /* GraphQL */ `
  query F1ListGroupTypes {
    F1ListGroupTypes {
      groupTypes {
        groupType {
          id
          name
          description
          isWebEnabled
          isSearchable
        }
      }
    }
  }
`;
export const f1ListGroups = /* GraphQL */ `
  query F1ListGroups($itemId: String) {
    F1ListGroups(itemId: $itemId) {
      groups {
        group {
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
        }
      }
    }
  }
`;
export const f1ListEventSchedules = /* GraphQL */ `
  query F1ListEventSchedules($itemId: [String]) {
    F1ListEventSchedules(itemId: $itemId) {
      id
      event {
        schedules {
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
        }
      }
    }
  }
`;
export const f1ListTimezones = /* GraphQL */ `
  query F1ListTimezones($itemId: [String]) {
    F1ListTimezones(itemId: $itemId) {
      id
      info {
        group {
          timeZone {
            id
            name
          }
        }
      }
    }
  }
`;
export const emailHomeChurch = /* GraphQL */ `
  query EmailHomeChurch(
    $name: String
    $email: String
    $message: String
    $homeChurchId: String
  ) {
    emailHomeChurch(
      name: $name
      email: $email
      message: $message
      homeChurchId: $homeChurchId
    ) {
      err
      data
    }
  }
`;
export const askQuestion = /* GraphQL */ `
  query AskQuestion($email: String, $body: String) {
    askQuestion(email: $email, body: $body) {
      err
      data
    }
  }
`;
export const generatePdf = /* GraphQL */ `
  query GeneratePdf(
    $notes: String
    $questions: String
    $week: String
    $title: String
    $userId: String
  ) {
    generatePdf(
      notes: $notes
      questions: $questions
      week: $week
      title: $title
      userId: $userId
    ) {
      objectKey
    }
  }
`;
export const getTnSeries = /* GraphQL */ `
  query GetTnSeries($id: ID!) {
    getTNSeries(id: $id) {
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
export const listTnSeriess = /* GraphQL */ `
  query ListTnSeriess(
    $id: ID
    $filter: ModelTNSeriesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTNSeriess(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTnSermon = /* GraphQL */ `
  query GetTnSermon($id: ID!) {
    getTNSermon(id: $id) {
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
export const listTnSermons = /* GraphQL */ `
  query ListTnSermons(
    $id: ID
    $filter: ModelTNSermonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTNSermons(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
                sermons {
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
      nextToken
    }
  }
`;
export const getWebPage = /* GraphQL */ `
  query GetWebPage($id: ID!) {
    getWebPage(id: $id) {
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
export const listWebPages = /* GraphQL */ `
  query ListWebPages(
    $filter: ModelWebPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTnSeriesByIdent = /* GraphQL */ `
  query GetTnSeriesByIdent(
    $TNident: String
    $sortDirection: ModelSortDirection
    $filter: ModelTNSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTNSeriesByIdent(
      TNident: $TNident
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTnSermonByIdent = /* GraphQL */ `
  query GetTnSermonByIdent(
    $TNident: String
    $sortDirection: ModelSortDirection
    $filter: ModelTNSermonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTNSermonByIdent(
      TNident: $TNident
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
                sermons {
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
      nextToken
    }
  }
`;
export const blogBridgeBySeries = /* GraphQL */ `
  query BlogBridgeBySeries(
    $blogSeriesID: ID
    $blogPostID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogSeriesBridgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogBridgeBySeries(
      blogSeriesID: $blogSeriesID
      blogPostID: $blogPostID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const blogBridgeByPost = /* GraphQL */ `
  query BlogBridgeByPost(
    $blogPostID: ID
    $blogSeriesID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogSeriesBridgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogBridgeByPost(
      blogPostID: $blogPostID
      blogSeriesID: $blogSeriesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const searchWebPages = /* GraphQL */ `
  query SearchWebPages(
    $filter: SearchableWebPageFilterInput
    $sort: SearchableWebPageSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchWebPages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getF1ListGroup2 = /* GraphQL */ `
  query GetF1ListGroup2($id: ID!) {
    getF1ListGroup2(id: $id) {
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
export const listF1ListGroup2s = /* GraphQL */ `
  query ListF1ListGroup2s(
    $filter: ModelF1ListGroup2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listF1ListGroup2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchF1ListGroup2s = /* GraphQL */ `
  query SearchF1ListGroup2s(
    $filter: SearchableF1ListGroup2FilterInput
    $sort: SearchableF1ListGroup2SortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchF1ListGroup2s(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getLivestream = /* GraphQL */ `
  query GetLivestream($id: ID!) {
    getLivestream(id: $id) {
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
export const listLivestreams = /* GraphQL */ `
  query ListLivestreams(
    $filter: ModelLivestreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLivestreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listAnnouncementsByParishByDate = /* GraphQL */ `
  query ListAnnouncementsByParishByDate(
    $crossRegional: String
    $parishExpirationDatePublishedDate: ModelAnnouncementByParishByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementsByParishByDate(
      crossRegional: $crossRegional
      parishExpirationDatePublishedDate: $parishExpirationDatePublishedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listSpeakers = /* GraphQL */ `
  query ListSpeakers(
    $id: ID
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpeakers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSpeaker = /* GraphQL */ `
  query GetSpeaker($id: ID!) {
    getSpeaker(id: $id) {
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
export const getSpeakerVideos = /* GraphQL */ `
  query GetSpeakerVideos($id: ID!) {
    getSpeakerVideos(id: $id) {
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
export const listSpeakerVideoss = /* GraphQL */ `
  query ListSpeakerVideoss(
    $id: ID
    $filter: ModelSpeakerVideosFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpeakerVideoss(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
      }
      nextToken
    }
  }
`;
export const listSeriess = /* GraphQL */ `
  query ListSeriess(
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSeries = /* GraphQL */ `
  query GetSeries($id: ID!) {
    getSeries(id: $id) {
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
export const getSeriesBySeriesType = /* GraphQL */ `
  query GetSeriesBySeriesType(
    $seriesType: String
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSeriesBySeriesType(
      seriesType: $seriesType
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchSeriess = /* GraphQL */ `
  query SearchSeriess(
    $filter: SearchableSeriesFilterInput
    $sort: SearchableSeriesSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchSeriess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const listCustomPlaylists = /* GraphQL */ `
  query ListCustomPlaylists(
    $filter: ModelCustomPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomPlaylist = /* GraphQL */ `
  query GetCustomPlaylist($id: ID!) {
    getCustomPlaylist(id: $id) {
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
export const searchCustomPlaylists = /* GraphQL */ `
  query SearchCustomPlaylists(
    $filter: SearchableCustomPlaylistFilterInput
    $sort: SearchableCustomPlaylistSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchCustomPlaylists(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const getVideoByYoutubeIdent = /* GraphQL */ `
  query GetVideoByYoutubeIdent(
    $YoutubeIdent: String
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getVideoByYoutubeIdent(
      YoutubeIdent: $YoutubeIdent
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getVideoByVideoType = /* GraphQL */ `
  query GetVideoByVideoType(
    $videoTypes: String
    $publishedDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getVideoByVideoType(
      videoTypes: $videoTypes
      publishedDate: $publishedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const searchVideos = /* GraphQL */ `
  query SearchVideos(
    $filter: SearchableVideoFilterInput
    $sort: SearchableVideoSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
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
      nextToken
      total
    }
  }
`;
export const listBlogSeriess = /* GraphQL */ `
  query ListBlogSeriess(
    $filter: ModelBlogSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogSeriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBlogSeries = /* GraphQL */ `
  query GetBlogSeries($id: ID!) {
    getBlogSeries(id: $id) {
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
export const searchBlogSeriess = /* GraphQL */ `
  query SearchBlogSeriess(
    $filter: SearchableBlogSeriesFilterInput
    $sort: SearchableBlogSeriesSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBlogSeriess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const getBlogByBlogStatus = /* GraphQL */ `
  query GetBlogByBlogStatus(
    $blogStatus: String
    $publishedDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBlogByBlogStatus(
      blogStatus: $blogStatus
      publishedDate: $publishedDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const searchBlogs = /* GraphQL */ `
  query SearchBlogs(
    $filter: SearchableBlogFilterInput
    $sort: SearchableBlogSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBlogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
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
      nextToken
      total
    }
  }
`;
export const getInstagram = /* GraphQL */ `
  query GetInstagram($id: ID!) {
    getInstagram(id: $id) {
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
export const listInstagrams = /* GraphQL */ `
  query ListInstagrams(
    $filter: ModelInstagramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstagrams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInstagramByLocation = /* GraphQL */ `
  query GetInstagramByLocation(
    $locationId: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInstagramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getInstagramByLocation(
      locationId: $locationId
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getVerse = /* GraphQL */ `
  query GetVerse($id: ID!) {
    getVerse(id: $id) {
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
export const listVerses = /* GraphQL */ `
  query ListVerses(
    $filter: ModelVerseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const listNotess = /* GraphQL */ `
  query ListNotess(
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
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
export const searchNotess = /* GraphQL */ `
  query SearchNotess(
    $filter: SearchableNotesFilterInput
    $sort: SearchableNotesSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchNotess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
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
      nextToken
      total
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommentsByOwner = /* GraphQL */ `
  query GetCommentsByOwner(
    $owner: String
    $noteId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByOwner(
      owner: $owner
      noteId: $noteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: SearchableCommentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getTmhUser = /* GraphQL */ `
  query GetTmhUser($id: ID!) {
    getTMHUser(id: $id) {
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
export const listTmhUsers = /* GraphQL */ `
  query ListTmhUsers(
    $filter: ModelTMHUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTMHUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
