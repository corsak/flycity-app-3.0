/**
 * Created by wangdi on 30/11/16.
 */
'use strict';

import colors from '../constants/colors';
import * as TYPES from '../actions/actionTypes';

const initialState = {
    themeColor: '#fff',
    isOpenThumbnail: true,
    isOpenNightMode: false,
    isAutoFetch: true,
    displayOrder: ['Android','iOS','前端','拓展资源','休息视频','App','瞎推荐'],
    colorScheme: {  //dayMode color scheme for the default color
        mainThemeColor: '#fff',
        pageBackgroundColor: '#f4f4f4',
        segmentColor: '#ccc',
        titleColor: '#000',
        subTitleColor: '#aaa',
        rowItemBackgroundColor: '#fff',
        arrowColor: '#ccc',
        tabIconColor: colors.dodgerBlue,
        thumbnailColor: '#f1f1f1',
        webViewToolbarColor: 'rgba(255,255,255,.9)'
    }
}

export default function SettingReducer(state=initialState, action) {
    switch(action.type){
        case TYPES.OPEN_SHOW_THUMBNAIL:
            return Object.assign({}, state, {
                ...state,
                isOpenThumbnail: true
            });

        case TYPES.CLOSE_SHOW_THUMBNAIL:
            return Object.assign({}, state, {
                ...state,
                isOpenThumbnail: false
            });

        case TYPES.OPEN_AUTO_FETCH:
            return Object.assign({}, state, {
                ...state,
                isAutoFetch: true
            });

        case TYPES.CLOSE_AUTO_FETCH:
            return Object.assign({}, state, {
                ...state,
                isAutoFetch: false
            });

        case TYPES.CHANGE_DISPLAY_ORDER:
            return Object.assign({}, state, {
                ...state,
                displayOrder: action.displayOrder
            });

        case TYPES.CHANGE_COLOR:
            return Object.assign({}, state, {
                ...state,
                themeColor: action.color,
                colorScheme: {
                    ...state.colorScheme,
                    mainThemeColor: action.color,
                    tabIconColor: action.color
                }
            });

        case TYPES.OPEN_NIGHT_MODE:
            return Object.assign({}, state, {
                ...state,
                isOpenNightMode: true,
                colorScheme: {
                    ListBackgroundColor: 'rgb(63,63,63)',
                    ListBorderTopWidth: 7,
                    ListBorderTopColor: 'rgba(0,0,0,0.2)',
                    ListTitleColor: 'rgb(177,177,177)',
                    ItemTitleColor: 'rgb(177,177,177)',
                    ItemSubTitleColor: 'rgb(130,130,130)',
                    ItemBackgroundColor: 'rgb(63,63,63)',
                    ItemBorderTopWidth: 1,
                    ItemBorderTopColor: 'rgba(0,0,0,0.2)',

                    mainThemeColor: 'rgb(40,40,40)',
                    pageBackgroundColor: 'rgb(58,58,58)',
                    segmentColor: 'rgb(54,54,54)',
                    titleColor: 'rgb(177,177,177)',
                    subTitleColor: 'rgb(130,130,130)',
                    rowItemBackgroundColor: 'rgb(63,63,63)',
                    arrowColor: 'rgb(200,200,200)',
                    tabIconColor: 'rgb(230,230,230)',
                    thumbnailColor: 'rgb(130,130,130)',
                    webViewToolbarColor: 'rgba(40,40,40,.9)'
                }
            });

        case TYPES.CLOSE_NIGHT_MODE:
            return Object.assign({}, state, {
                ...state,
                isOpenNightMode: false,
                colorScheme: {
                    ListBackgroundColor: '#fff',
                    ListBorderTopWidth: 7,
                    ListBorderTopColor: 'rgba(120,120,120,0.1)',
                    ListTitleColor: '#000',
                    ItemSubTitleColor: '#aaa',
                    ItemBackgroundColor: '#fff',
                    ItemBorderTopWidth: 1,
                    ItemBorderTopColor: 'rgba(254,254,254,0.1)',

                    mainThemeColor: '#fff',
                    pageBackgroundColor: '#f4f4f4',
                    segmentColor: '#eee',
                    titleColor: '#000',
                    subTitleColor: '#aaa',
                    rowItemBackgroundColor: '#fff',
                    arrowColor: '#ccc',
                    tabIconColor: state.themeColor,
                    thumbnailColor: '#f1f1f1',
                    webViewToolbarColor: 'rgba(255,255,255,.9)'
                }
            });

        default:
            return state;
    }
}