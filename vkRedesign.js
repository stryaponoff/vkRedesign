// ==UserScript==
// @name        Редизайн нового дизайна ВК под старый дизайн
// @author      artouiros
// @namespace   https://github.com/artouiros/vkRedesign
// @description Новый дизайн не настолько плох, я не стал возвращать полностью старый дизайн, а адаптировал новый. По моему личному мнению, так намного удобнее и эстетичнее.
// @include     https://vk.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       GM_addStyle
// @run-at   document-start
// ==/UserScript==
/* Метод решения проблемы  с fixed нав баром, реализованый ниже  - это самое ужасное, что можно было придумать. Но мне надо было убрать этот ненавистный nav bar. Вначале хотел просто сделать его релативный, но тогда это выливалось в проблему на странцие сообщений. */
GM_addStyle('.navHidden{visibility:hidden; position:fixed;}');
$(window).scroll(function () {
  if (window.location.pathname != '/im') {
    if ($(window).scrollTop() > 42) {
      hide(document.querySelector('#page_header_cont'));
    } else {
      show(document.querySelector('#page_header_cont'));
    }
  }
});
/* Общие css изменения для ВК */
GM_addStyle('#page_header_cont{width:990px!important; left:initial !important;} #page_header_wrap{width:990px!important;} body{background:#fff !important; font-size:11px !important;} #page_body{font-size:11px !important;} .module_header .header_top{font-size:11px !important;} .module_body{font-size:11px !important; padding:0 !important;} .narrow_column{position:relative !important; width:200px !important;} .narrow_column_wrap{width:200px !important;} .side_bar_inner{position:relative !important;} .profile_gifts_cont{height:64px !important;} .profile_gifts_cont .profile_gift_img{width:54px !important; height:54px !important;} .people_module .module_body{padding:0 !important;} .narrow_column .people_module .people_row{width:200px !important} .module_body .people_cell{width:66.6px !important; height:auto !important;} .module_body .people_cell_ava{width:50px !important; height:50px !important;} .page_photo{padding:0 !important;} .profile_rate_warning{box-shadow:0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8 !important;} .module_header{background:#DEE5EB !important; margin-bottom:5px !important;} .module_header .header_top{height:25px !important; line-height:25px !important; color:#45688E !important; font-weight:bold !important;} .header_right_link{height:25px !important; line-height:25px !important; font-size:12px !important; font-weight:bold !important;} .wide_column .header_right_link{padding:0 !important} .wide_column .module_header .header_top{padding:0 15px !important;} .submit_post_box{background:#F1F1F1 !important;} #post_field{background:#F1F1F1 !important;} .page_block{box-shadow:none !important;} .counts_module{background:#e7e8ec !important;} .page_counter:hover{background:#f7f7f7 !important;} .profile_info_header{ color:#45688E !important; font-weight:bold !important; font-size:12px !important;} .profile_info .label{color:#777 !important;} h4.profile_online{color:#AAB7C5 !important; font-weight:bold !important;} .wall_module .post{border-bottom:1px solid #DAE1E8 !important} .wall_module .reply_img{border-radius:0px !important;} h5.post_author{font-size:11px !important;} .wall_module div.page_media_link_desc_wrap{line-height:15px !important; font-size:11px !important;} .wall_module div.page_media_link_title{color:#446790 !important; font-size:15px !important;} .module_body .people_cell_img{border-radius:0 !important;} .module_body .people_cell_ava{margin:0 7px !important;} .page_list_module .thumb{border-radius:0px !important;} .page_list_module .cell_img{border-radius:0px !important;} .page_list_module .line_cell{line-height:inherit !important;} .page_photos_module{padding:0 !important; height:auto !important;} .page_square_photo{height:90px !important; width:130px !important;} .audio_play{width:16px !important; height:16px !important; border-radius:0px !important; background:#577ca1 url(/images/icons/audio_playpause.png) no-repeat 4px 3px !important;} .audio_play.playing, .audio_row_playing .audio_play{background-position:4px -19px !important;} .audio_row .audio_info{font-size:11.5px !important; line-height:11.5px !important; padding-top:3px !important;} .audio_row .audio_title_wrap:hover{white-space:normal !important;} .module{border:0 !important; padding-top:5px !important;} .page_list_module .line_cell{margin-left:7px !important;} .page_list_module .line_cell .desc_info, .page_list_module .line_cell .extra_info, .page_list_module .line_cell .info{width:140px !important;} #side_bar .left_label{font-size:11px !important;} .wide_column_right .wide_column_wrap{margin-left:215px !important;} .feed_new_posts{background:#EEF2F6 !important; border-bottom:none !important;} .like_tt_header, .poll_tt_header{font-size:11px !important;} .im-page.im-page_classic .im-page--top-date-bar-wrap{width:825px !important;} .im-page .im-page--top-date-bar-inner{transform:translateY(0px) !important;} .ui_scroll_overflow{width:308px !important;} .ui_scroll_container{width:308px !important;} .page_actions_wrap{font-size:11px !important;} .button_blue button, .button_gray button, .button_light_gray button, .flat_button{font-size:11px !important;} .top_home_link .top_home_logo{background-color:transparent;background:url(\'data:image/gif;base64,R0lGODdhegAYAKUtAE5wl1BymVJzmVV2m2iCom6KqXONqXSQrXWSsHuTrnyVsYObtISduIietoifuI2ht42jupCjuZeqwJyvw56xxqGyxaS2yae5y6y7zLG/zrXD0brG1LzI1cDL18PP28XQ3MnU3s3W4NPb5Nng593k6uHn7eTp7+fs8ert8u7x9fHz9vT2+Pb4+v///////////////////////////////////////////////////////////////////////////ywAAAAAegAYAAAG/sCAcEgsGo/IpHLJbDqfRYioRa1arSIHdMvtepuaq3ic+ZrP6KVjzL4u0vC4edqui+T4fHPc6Xc8ISVjK3qFhkRiKEh0Vl4ECwsFegUJCgaFCQ0JRolJYkUoVBhCAyAsLW8BCyZWKBBDFlSEQhhUiiFto6xXHwOkVakHdAtts6VXo0OdQistG0OCjUShLcmMbxBsFEIVskO1LYoguQFsJb9UqSrAxQEEKVQs8FQayleKzC0pQ83SQ9Sj1lRREKDfCAIEcFHx1a3FrADgFCWIECFDlQkUL5GYQCCAAQ4DAwwABrHKCgIUI1ATQfFBADocAgCIUMVXuXtDNnDYFODC/qdpogKQoCckG5WOQqpsa8jigFOQ4YgoqKLEQJVXI9MN6OeSyNAW9YQQoMqPyqubrY4U+OpPCDUSX1l8IytkV4cADcfgE0JsIZEBGNheFVklxAkqJIx8DRvAqMMVkKtUSIpTyAFJQ6DSdSvmrpAw+rxSAYG3zV5VNYcUWFeFWgusYyQoJipEQp3JaFuXbTHB3uYA1EqwRUBr866YTBMo72CLSN8WNgOM08dzcNYWIqjtK7J4iGOkR5YVpBLCNxVQQU+1SNw4JGEqvRs+jOg8dV3aaGFTUZCgCmMh3YlVhWxEGICUeM2UwFMBV6BXTQATXCQEayQooAAj3HhTXFRDtzwX3VcmIGAAaK+9h0oAH1TBE4D4veQfAwpA4EELDFCWFhKanQfUgwFEs4Ivz11BoHxzcciXfaWxod+JAlTBHotgESHAPGKkIl4RzDW4YzL9UfGBEAlEY0sDQxC54WkeEqFZCVaZZWIqeW0D5X+f9ROPBzaNIcKefIppxUNbCKAceHIkQGgeBBhgaBGM1DFGeYdEmkeQjl6xoqSYphFLpVdYkOmncCQQAmt1qADCpaCmquqqrCYRBAA7\') !important; background-repeat:no-repeat !important; height:24px !important; width:134px !important; background-position-x:-6px !important; background-position-y:2px !important; margin:8px 0 0 0 !important;} .wide_column_right .wide_column{float:left !important;} .wide_column{width:610px !important; box-shadow: rgb(215, 216, 219) 0px 1px 0px 0px, rgb(227, 228, 232) 0px 0px 0px 1px !important;} .page_post_sized_thumbs{width: 580px !important; height:auto !important;} .page_post_thumb_video{width: 580px !important; height:326px !important;} #public{width: 824px !important;} .audio_layout{width:825px !important;} #group{width:825px !important;} ');
/* Для страницы сообщений */
GM_addStyle('.im-page.im-page_classic .im-page--dialogs{margin-top:84px !important; margin-left:0 !important;} .im-right-menu.ui_rmenu{background: #edeef0 !important; top:84px !important; width:825px !important; margin-left:0 !important; z-index:3 !important;} //*#ui_rmenu_all{display:table-cell !important;}**/ #ui_rmenu_unread{display:table-cell !important;} #ui_rmenu_fav{display:table-cell;} .ui_rmenu_item, .ui_rmenu_subitem{display:table-cell !important;} .im-page.im-page_classic{width:825px !important;} .im-page.im-page_classic .im-page--header{width:825px !important;} .nim-dialog .nim-dialog--name .nim-dialog--name-w{color:#2B587A !important;} .nim-dialog.nim-dialog_classic .nim-dialog--name, .nim-dialog.nim-dialog_classic .nim-dialog--preview, .nim-dialog.nim-dialog_classic .nim-dialog--text-preview{font-size:11.5px !important;} .im-create.im-create_classic{width:825px !important; z-index:4 !important;} .im-create .im-create--dcontent{width:825px !important;} .im-page.im-page_classic .im-page--header-chat{width:827px !important; z-index:4 !important;} .im-page.im-page_classic .im-page--chat-input{width:825px !important;} .im-chat-input.im-chat-input_classic .im-chat-input--textarea{width:652px !important;} ._im_peer_tab{font-weight:bold !important;} .im-page.im-page_classic .im-mess-stack{max-width:825px !important;} .im-page .im-page--top-date-bar-wrap{top:5px !important;} .im-page-wrapper, .im-page{width:825px !important; box-shadow:rgb(215, 216, 219) 0px 1px 0px 0px, rgb(227, 228, 232) 0px 0px 0px 1px !important;} .im-page.im-page_classic .im-mess:not(.im-mess_fwd){max-width:825px !important;}');
/* Для остальных страниц. */
GM_addStyle('#apps_wrap{width: 825px !important;} #apps_featured_slider{width:825px !important;} .apps_cat_wrap{text-align:center !important;} .apps_cat_row{margin-left:auto !important; margin-right:auto !important; display:inline-block !important; padding:10px !important; float: initial !important;} .audio_rows_header {top:0 !important; position:relative !important;} .audio_friend_name, .audio_friend_name_now{padding:10px 0 3px 10px !important;} .audio_friend{padding:5px 0px !important; font-size:11.5px !important; } .ow_ava.ow_ava_small{border-radius:0px !important;} .verticalMenu{display:block !important;} ._825widthFix{width:825px !important;} #photos_albums_block{width:825px !important;} #photos_albums_block .photos_albums{text-align:center !important;} #photos_all_block{width:825px !important;} #photos_all_block .photos_container_pretty_grid{text-align:center !important;} .photos_period_delimiter_fixed{position:relative !important;} .friends_lists .friends_lists_group{font-size:11px !important;} .friends_field_title{font-size:12px !important;} .ui_search_fltr_control{font-size:11px !important;} .ui_tabs_header, .ui_tabs_sub_header{font-size:12px !important;} .ui_tabs_box .ui_tab, .ui_tabs_box .ui_tab_sel, .ui_tabs_header .ui_tab, .ui_tabs_header .ui_tab_plain, .ui_tabs_header .ui_tab_sel, .ui_tabs_sub_header .ui_tab, .ui_tabs_sub_header .ui_tab_plain, .ui_tabs_sub_header .ui_tab_sel{line-height:14px !important; height:14px !important;} .ui_search_fltr{font-size:11px !important;} .page_block_header{font-size: 14px !important;} .page_block_header .header_side_link, .page_block_sub_header .header_side_link, .ui_tabs_header .header_side_link, .ui_tabs_sub_header .header_side_link{font-size:12px !important;} .adsPageFixHeader{width: 1220px !important;}');
/* Проверка на смены Url. */
var fireOnHashChangesToo = true;
var pageURLCheckTimer = setInterval(function () {
  if (this.lastPathStr !== location.pathname || this.lastQueryStr !== location.search || (fireOnHashChangesToo && this.lastHashStr !== location.hash)
  ) {
    this.lastPathStr = location.pathname;
    this.lastQueryStr = location.search;
    this.lastHashStr = location.hash;
    changeCssRules(location.pathname);
  }
}, 111
);
/* При различных Url добавляем или удаляем класс. Можно было сделать по-нормальному, без этого скрипта, но было как-то лениво.  Существует правда одна проблема - так и не смог понять почему при перехода на страницу путём кнпоки назад/вперёд класс не добавляется. OnHashChanges работает, проблема именно в скрипте ниже. */
function changeCssRules(a) {
  if (a.startsWith('/audios')) {
    a = '/audios'
  }
  switch (a) {
    case '/audios':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      break;
    case '/docs':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      $('.wide_column_left').addClass('_825widthFix');
      break;
    case '/feed':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      $('.wide_column_left').addClass('_825widthFix');
      break;
    case '/groups':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      $('.wide_column_left').addClass('_825widthFix');
      break;
    case '/friends':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      $('.wide_column_left').addClass('_825widthFix');
      break;
    case '/ads':
      $('.ui_rmenu_item, .ui_rmenu_subitem').addClass('verticalMenu');
      $('#page_header_cont .back').addClass('adsPageFixHeader');
      break;
    default:
      $('.ui_rmenu_item, .ui_rmenu_subitem').removeClass('verticalMenu');
      $('.wide_column_left').removeClass('_825widthFix');
      $('#page_header_cont .back').removeClass('adsPageFixHeader');
  }
}
