var style_cookie_name = "imhallstyle";
var style_cookie_duration = 30;
var style_domain = "imhall.com";
var alt_domain = "fitnesslog20160501110311.azurewebsites.net";

function switch_style(nextStyle) {
    // You may use this script on your site free of charge provided
    // you do not remove this notice or the URL below. Script from
    // http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
    var light = "light";
    var dark = "dark";
    if (nextStyle != light && nextStyle != dark) {
        nextStyle = light;
    }
    for (i = 0, link_tag = document.getElementsByTagName("link") ; i < link_tag.length; i++) {
        if ((link_tag[i].rel.indexOf("stylesheet") != -1) && link_tag[i].title) {
            link_tag[i].disabled = true;
            if (link_tag[i].title == nextStyle) {
                link_tag[i].disabled = false;
            }
        }
    }
    if (nextStyle == light) {
        $("#themeSwitcher").html(dark);
        $("#themeSwitcher").val(dark);
    }
    else {
        $("#themeSwitcher").html(light);
        $("#themeSwitcher").val(light);
    }
    set_cookie(style_cookie_name, nextStyle, style_cookie_duration, style_domain);
    set_cookie(style_cookie_name, nextStyle, style_cookie_duration, alt_domain);
}

function set_style_from_cookie() {
    var css_title = get_cookie(style_cookie_name);
    if (css_title.length) {
        switch_style(css_title);
    }
    else {
        switch_style("light");
    }
}
function set_cookie(cookie_name, cookie_value, lifespan_in_days, valid_domain) {
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '';
    document.cookie = cookie_name +
                       "=" + encodeURIComponent(cookie_value) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string;
}
function get_cookie(cookie_name) {
    var cookie_string = document.cookie;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match(
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)');
        return decodeURIComponent(cookie_value[2]);
    }
    return '';
}