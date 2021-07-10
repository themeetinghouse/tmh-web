import glob
import json
import os
import traceback
import sys

def file_exists(file: str):
    if ('/static' in file) and (not os.path.exists('public' + file)):
        raise Exception('file not found: ' + file)

def image_exists(image: str):
    if not os.path.exists('public' + image):
        raise Exception('image not found: ' + image)

def assert_standard_text(item, no_style = False):
    if not no_style:
        assert('style' in item and isinstance(item['style'], str))
    for i in item:
        if 'header' in i or 'text' in i:
            assert(isinstance(item[i], str))

def assert_image(images: list, check_link_to = False):
    assert(isinstance(images, list))
    for image in images:
        assert(isinstance(image['src'], str))
        image_exists(image['src'])
        assert(isinstance(image['alt'], str))
        if (check_link_to):
            assert('linkto' not in image or isinstance(image['linkto'], str))

def assert_list_image(img: dict):
    assert(isinstance(img['title'], str))
    assert(isinstance(img['imageSrc'], str))
    image_exists(img['imageSrc'])
    assert(isinstance(img['imageAlt'], str))
    #assert(img['imageAlt'])

def assert_content_link_or_button(link_or_button, check_new_tab = False):
    assert(isinstance(link_or_button['navigateTo'], str))
    file_exists(link_or_button['navigateTo'])
    assert(isinstance(link_or_button['title'], str))
    if (check_new_tab):
        assert('openNewBrowser' not in link_or_button or isinstance(link_or_button['openNewBrowser'], bool))

def assert_go_text(body):
    for i in body:
        assert(i['fontWeight'] == 'normal' or i['fontWeight'] == 'bold')
        assert(isinstance(i['text'], str))
        assert('newParagraph' not in i or isinstance(i['newParagraph'], bool))

def assert_menu_item(item):
    assert(isinstance(item, dict))
    assert(isinstance(item['name'], str))
    assert(isinstance(item['location'], str) and '/' in item['location'])

def assert_location(location):
    assert(isinstance(location, dict))
    assert(isinstance(location['longitude'], float))
    assert(isinstance(location['latitude'], float))
    assert(isinstance(location['address'], str))

if __name__ == '__main__':
    cwd = os.getcwd()
    path = '/public/static/**/*.json'

    json_list = glob.glob(cwd + path) if len(sys.argv) == 1 else sys.argv[1:]

    for json_file in json_list:
        with open(json_file) as f:
            try:
                current_json = json.load(f)
                if (isinstance(current_json, dict) and 'page' in current_json):
                    page = current_json['page']
                    page_config = page['pageConfig']
                    content = page['content']

                    # check page details
                    assert(isinstance(page['name'], str))
                    assert(isinstance(page['title'], str))
                    assert(isinstance(page['keywords'], str))
                    assert(isinstance(page['description'], str))

                    # check page config
                    assert(isinstance(page_config['showLive'], bool))
                    assert(isinstance(page_config['movingMenu'], bool))
                    assert(isinstance(page_config['showLogoText'], bool))
                    assert(page_config['logoColor'] == 'black' or page_config['logoColor'] == 'white')
                    assert(isinstance(page_config['showSearch'], bool))
                    assert(isinstance(page_config['showFooter'], bool))
                    assert(isinstance(page_config['showMenu'], bool))
                    assert('weatherAlert' not in page_config or isinstance(page_config['weatherAlert'], bool))

                    # check page content
                    for item in content:
                        assert(isinstance(item, dict))
                        item_type = item['type']

                        if item_type == 'og-tags':
                            assert(isinstance(item, dict))
                            og_keys = ['type', 'image', 'url', 'title', 'description']
                            for i in og_keys:
                                assert(i in item)
                                assert(isinstance(item[i], str))
                            image_exists(item['image'])
                            
                        elif item_type == 'hero':
                            assert(isinstance(item, dict))
                            assert_standard_text(item)
                            for i in item:
                                if i == 'image1':
                                    assert_image(item[i])
                                if i == 'button1':
                                    assert(isinstance(item[i], dict))
                                    assert(isinstance(item[i]['text'], str))
                                    assert(isinstance(item[i]['action'], str))
                                    assert(isinstance(item[i]['description'], str))
                                if i == 'link1Text':
                                    assert(isinstance(item[i], str))
                                if i == 'link1Action':
                                    assert(isinstance(item[i], str))
                                    file_exists(item[i])
                                if i in ['addToCalendar', 'showCovid', 'contactPastor', 'showLocationSearch', 'hasFooter']:
                                    assert(isinstance(item[i], bool))

                        elif item_type == 'content':
                            assert(isinstance(item, dict))
                            assert_standard_text(item)
                            for i in item:
                                if i == 'image1':
                                    assert_image(item[i])
                                elif i == 'list':
                                    assert(isinstance(item[i], list))
                                    for list_item in item[i]:
                                        if list_item['type'] == 'button':
                                            assert_content_link_or_button(list_item)
                                        elif list_item['type'] == 'link':
                                            assert_content_link_or_button(list_item, check_new_tab=True)
                                        elif list_item['type'] == 'text':
                                            assert(isinstance(list_item['title'], str))
                                elif i == 'pieChart':
                                    assert(isinstance(item[i], dict))
                                    assert(isinstance(item[i]['raised'], int))
                                    assert(isinstance(item[i]['goal'], int))
                                    assert(isinstance(item[i]['text'], str))
                                elif i == 'images':
                                    assert_image(item[i], check_link_to=True)
                                elif i == 'calendar':
                                    assert(item['style'] in ['oneImage', 'oneImageBlack', 'oneImageBlackRight'])
                                    assert(isinstance(item[i], dict))
                                    for j in ['start', 'end', 'summary', 'description']:
                                        assert(isinstance(item[i][j], str))
                                    for j in ['url', 'location']:
                                        assert(j not in item[i] or isinstance(item[i][j], str))

                        elif item_type == 'list':
                            assert(isinstance(item, dict))
                            assert_standard_text(item)
                            for i in item:
                                if i == 'image1':
                                    assert_image(item[i])
                                elif i == 'subclass' or i == 'status' or i == 'playlist':
                                    assert(isinstance(item[i], str))
                                elif i == 'collection' or i == 'forceToTop':
                                    assert(isinstance(item[i], list))
                                    for series in item[i]:
                                        assert(isinstance(series, str))
                                elif i == 'list':
                                    assert(isinstance(item[i], list))
                                    for list_item in item[i]:
                                        assert(isinstance(list_item, dict))
                                        if ('navigateTo' in list_item):
                                            assert(isinstance(list_item['navigateTo'], str))
                                            file_exists(list_item['navigateTo'])
                                            assert(isinstance(list_item['text'], str))
                                            if ('imageSrc' in list_item):
                                                assert_list_image(list_item)
                                        else:
                                            assert_list_image(list_item)
                                            if ('url' in list_item):
                                                assert(isinstance(list_item['url'], str))
                                                file_exists(list_item['url'])
                                elif i == 'sortOrder':
                                    assert(item[i] == 'DESC' or item[i] == 'ASC')
                                elif i in ['limit', 'numberOfDays', 'minViews', 'loadPer', 'numberOfVideos']:                              
                                    assert(isinstance(item[i], int))
                                elif i == 'class':
                                    assert(item[i] in ['playlists', 'series-collection', 'series', 'random-suggested-playlist',
                                        'instagram', 'speakers', 'staff', 'overseers', 'events', 'compassion', 'videos', 'curious', 
                                        'watch-page', 'watch-page-playlist', 'blogs', 'user-defined', 'custom-playlist'])
                                elif i == 'filterField':
                                    assert('filterValue' in item)
                                    assert(isinstance(item['filterField'], str))
                                    assert(isinstance(item['filterValue'], str))
                                elif i == 'showEpisodeNumbers' or i == 'skipFirstPost':
                                    assert(isinstance(item[i], bool))
                                elif i == 'hovertag':
                                    assert(isinstance(item[i], str))
                                elif i == 'selector':
                                    assert(item[i] in ['all', 'popular', 'similar', 'sameSeries', 'highlights', 'same-playlist'])
                                elif i == 'facebookEvents':
                                    assert(isinstance(item[i], list))
                                    for fb_id in item[i]:
                                        assert(isinstance(fb_id, str))
                                elif i == 'margin':
                                    assert(isinstance(item[i], dict))
                                    for m in ['marginTop', 'marginBottom', 'marginLeft', 'marginRight']:
                                        assert(m not in item[i] or (isinstance(item[i][m], int) or isinstance(item[i][m], str)))


                        elif item_type == 'faq':
                            assert_standard_text(item, no_style=True)
                            for i in item:
                                if i == 'list':
                                    assert(isinstance(item[i], list))
                                    for list_item in item[i]:
                                        if list_item['type'] == 'question':
                                            assert(isinstance(list_item['question'], str))
                                            assert(isinstance(list_item['answer'], list))
                                            for answer in list_item['answer']:
                                                assert(isinstance(answer, str))
                                        elif list_item['type'] == 'text':
                                            assert(isinstance(list_item['class'], str))
                                            assert(isinstance(list_item['title'], str))
                                        elif list_item['type'] == 'button':
                                            assert(isinstance(list_item['title'], str))
                                            assert(isinstance(list_item['navigateTo'], str))
                                            file_exists(list_item['navigateTo'])
                                        else:
                                            unknown = list_item['type']
                                            raise Exception(f'unknown FAQ list type: {unknown}')                     

                        elif item_type == 'blog':
                            assert(item['style'] == 'hero' or item['style'] == 'multiImage')
                            assert(isinstance(item['status'], str))
                            assert(isinstance(item['header1'], str))
                            assert(item['sortOrder'] == 'DESC' or item['sortOrder'] == 'ASC')
                            assert('limit' not in item or isinstance(item['limit'], int))
                            assert('blogSeries' not in item or isinstance(item['blogSeries'], str))
                            assert('button1Action' not in item or isinstance(item['button1Action'], str))
                            assert('hideAllBlogsButton' not in item or isinstance(item['hideAllBlogsButton'], bool))
                        
                        elif item_type == 'podcasts':
                            assert(isinstance(item, dict))
                            podcasts = item['podcastlist']
                            assert(isinstance(podcasts, list))
                            for i in podcasts:
                                assert(isinstance(i['title'], str))
                                assert(isinstance(i['description'], str))
                                assert(isinstance(i['icon'], dict))
                                assert(isinstance(i['icon']['src'], str))
                                assert(isinstance(i['icon']['alt'], str))
                                assert('apple' in i['apple'])
                                assert('spotify' in i['spotify'])
                                assert('google' in i['google'])
                                assert('podbean' in i['podbean'])
                        
                        elif item_type == 'teaching':
                            for i in ['style', 'class', 'header1', 'group']:
                                assert(isinstance(item[i], str))
                            assert(isinstance(item['options'], list))
                            for option in item['options']:
                                assert(isinstance(option, str))
                            assert(item['sortOrder'] == 'DESC' or item['sortOrder'] == 'ASC')
                            assert('subclass' not in item or isinstance(item['subclass'], str))
                        
                        elif item_type == 'teachingsearch':
                            assert(item['style'] == 'teaching' or item['style'] == 'blog')
                            for i in ['header1', 'subclass', 'text1']:
                                assert(isinstance(i, str))
                        
                        elif item_type == 'goContent':
                            assert_standard_text(item)
                            if 'body' in item:
                                assert(isinstance(item['body'], list))
                                assert_go_text(item['body'])
                            if 'items' in item:
                                assert(isinstance(item['items'], list))
                                for i in item['items']:
                                    assert(isinstance(i['header1'], str))
                                    assert_go_text(i['body'])
                        
                        elif item_type == 'goLink':
                            assert(isinstance(item['style'], str))
                            assert(isinstance(item['title'], str))
                            assert(isinstance(item['navigateTo'], str))
                            file_exists(item['navigateTo'])
                            assert('newWindow' not in item or isinstance(item['newWindow'], bool))
                        
                        elif item_type == 'home-church':
                            assert(isinstance(item['class'], str))
                            assert(isinstance(item['header1'], str))
                        
                        elif item_type == 'post':
                            assert(item['style'] == 'blog' or item['style'] == 'notes')
                        
                        elif item_type == 'give':
                            assert_standard_text(item, no_style=True)
                        
                        elif item_type == 'video-archive':
                            assert(item['sortOrder'] == 'DESC' or item['sortOrder'] == 'ASC')
                        
                        elif item_type == 'series-archive':
                            assert(item['sortOrder'] == 'DESC' or item['sortOrder'] == 'ASC')
                        
                        elif item_type == 'give2':
                            assert_standard_text(item, no_style=True)
                        
                        elif item_type == 'simple':
                            assert(isinstance(item['header1'], str))
                            assert(isinstance(item['header2'], str))
                            assert('hasBigBottom' not in item or isinstance(item['hasBigBottom'], bool))
                            assert(isinstance(item['text'], list))
                            for text_item in item['text']:
                                assert(isinstance(text_item, dict))
                                for i in text_item:
                                    assert(i in ['text', 'class', 'id', 'type'])
                                    assert(isinstance(text_item[i], str))
                        
                        elif item_type == 'form':
                            assert(isinstance(item['header1'], str))
                            assert(isinstance(item['class'], str))
                            assert(isinstance(item['style'], str))
                            assert(isinstance(item['formId'], str))
                        
                        elif item_type == 'distance-groups':
                            assert(isinstance(item['header1'], str))
                        
                        elif item_type == 'sunday-morning':
                            assert(isinstance(item['header1'], str))
                            assert('alternate' not in item or isinstance(item['alternate'], str))
                        
                        elif item_type == 'iframe':
                            assert(isinstance(item['src'], str))
                            assert(isinstance(item['height'], str))
                            assert(isinstance(item['isInPopup'], bool))
                        
                        elif item_type == 'payment':
                            pass
                        elif item_type == 'podcast-player':
                            pass
                        elif item_type == 'liveVideoPlayer2':
                            pass
                        elif item_type == 'liveVideoPlayer':
                            pass
                        elif item_type == 'search':
                            pass
                        elif item_type == 'videoPlayer':
                            pass
                        elif item_type == 'weather':
                            pass
                        elif item_type == 'searchResult':
                            pass
                        else:
                            raise Exception(f'unknown content type: {item_type}')

                else:
                    split_filepath = f.name.split('data/')
                    filename = split_filepath[1] if len(split_filepath) == 2 else ''
                    
                    if filename == 'staff.json':
                        assert(isinstance(current_json, list))
                        for staff in current_json:
                            staff_keys = sorted(list(staff.keys()))
                            assert(staff_keys == ['Email', 'FirstName', 'LastName', 'Phone', 'Position', 'Staff', 'sites'])
                        
                            assert(isinstance(staff['Staff'], bool))

                            for i in ['FirstName', 'LastName', 'Email', 'Phone', 'Position']:
                                assert(isinstance(staff[i], str))

                            assert(isinstance(staff['sites'], list))
                            for i in staff['sites']:
                                assert(isinstance(i, str))
                    
                    elif filename == 'coordinators.json':
                        assert(isinstance(current_json, list))
                        for coordinator in current_json:
                            coordinator_keys = list(coordinator.keys())
                            assert(len(coordinator_keys) == 4 or len(coordinator_keys) == 5)
                            if 'Email' in coordinator_keys:
                                for i in ['FirstName', 'LastName', 'Email', 'Position']:
                                    assert(isinstance(coordinator[i], str))
                            else:
                                for i in ['FirstName', 'LastName', 'Position']:
                                    assert(isinstance(coordinator[i], str))

                            assert(isinstance(coordinator['sites'], list))
                            for i in coordinator['sites']:
                                assert(isinstance(i, str))

                    elif filename == 'compassion.json':
                        assert(isinstance(current_json, list))
                        for partner in current_json:
                            assert(isinstance(partner['id'], int))

                            for i in ['name', 'description', 'image', 'imagealt']:
                                assert(isinstance(partner[i], str))

                            assert('website' not in partner or isinstance(partner['website'], str))

                            assert(isinstance(partner['sites'], list))
                            for i in partner['sites']:
                                assert(isinstance(i, str))

                    elif filename == 'redirect.json':
                        assert(isinstance(current_json, list))
                        for i in current_json:
                            assert(isinstance(i['id'], str))
                            assert(isinstance(i['to'], str))
                            file_exists(i['to'])

                    elif filename == 'overseers.json':
                        assert(isinstance(current_json, list))
                        for overseer in current_json:
                            overseer_keys = sorted(list(overseer.keys()))
                            assert(overseer_keys == ['FirstName', 'LastName', 'Position', 'sites'])

                            for i in ['FirstName', 'LastName', 'Position']:
                                assert(isinstance(overseer[i], str))

                            assert(isinstance(overseer['sites'], list))
                            for i in overseer['sites']:
                                assert(isinstance(i, str))

                    elif filename == 'locations.json' or filename == 'easter.json':
                        assert(isinstance(current_json, list))
                        for location in current_json:
                            location_keys = sorted(list(location.keys()))
                            for i in ['id', 'location', 'name', 'pastorEmail', 'serviceTimes']:
                                assert(i in location_keys )

                            for i in ['id', 'name', 'pastorEmail']:
                                assert(isinstance(location[i], str))

                            assert_location(location['location'])

                            assert(isinstance(location['serviceTimes'], list))
                            for i in location['serviceTimes']:
                                assert(isinstance(i, str))

                    elif filename == 'christmas.json':
                        assert(isinstance(current_json, list))
                        for service in current_json:
                            service_keys = sorted(list(service.keys()))
                            assert(service_keys == ['id', 'location', 'name', 'serviceTimes'])

                            for i in ['id', 'name']:
                                assert(isinstance(service[i], str))

                            assert_location(service['location'])

                            assert(isinstance(service['serviceTimes'], list))
                            for i in service['serviceTimes']:
                                assert(isinstance(i, str))

                    elif filename == 'MainMenu.json':
                        assert(isinstance(current_json, list))
                        for item in current_json:
                            assert_menu_item(item)
                            if 'children' in item:
                                for child in item['children']:
                                    assert_menu_item(child)

            except Exception:
                print(f'ERR: \033[91m{f.name}\n\033[0m')
                traceback.print_exc()
                print('\n')
                exit(1)
