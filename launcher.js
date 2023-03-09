function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? p[1] : '';
}

function getProxy(url = '') {
    let parameter = $_GET('proxy');
    if (parameter === 'null' || !parameter)
        parameter = 'https://';
    return parameter + url;
}

function getBrowserPublicURL(deploy, proxy = true) {
    return getProxy(`public-deploy${deploy}.test-eu.tankionline.com/browser-public/`);
}

function loadJS(data) {
    const script = document.createElement('script');
    script.src = URL.createObjectURL(new Blob([data]));
    script.async = true;
    document.body.appendChild(script);
}

function findWebPackNames(html, path) {
    let result;
    let index = html.search(path) + path.length + 1;

    for (let i = 0; i < 8; i++) {
        result += html[index + i];
    }

    return result.replace('undefined', '');
}

(function() {
    const resources = $_GET('resources');
    const deploy = resources[resources.search('public-deploy') + 13];

    window.unsafeWindow = window;
    jQuery && (jQuery.globalEval = () => {});

    window.GM_info = {
        script: {
            version: '0.64.3'
        }
    }

    $.get(window.location.href.replace(window.location.origin, getBrowserPublicURL(deploy)), data => {
        const html = data;
        const scriptName = 'main.' + findWebPackNames(html, 'static/js/main') + '.js';
        const CSSName = 'main.' + findWebPackNames(html, 'static/css/main') + '.css';

        document.querySelector('body > link').href = getBrowserPublicURL(deploy, false) + 'static/css/' + CSSName;

        $.get(getBrowserPublicURL(deploy) + 'static/js/' + scriptName, data => {
            loadJS(data
                .replace('/browser-public/', getBrowserPublicURL(deploy))
                .replace('new Image;', 'new Image;c.crossOrigin = "";'));
        })
    });

    $.get(getProxy('raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js'), data => {
        loadJS(data);

        $.get(getProxy('raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js'), data => {
            loadJS(data);
            
            $.get(getProxy('raw.githubusercontent.com/T0HBA/TOHBA/main/release/shizoval.min.js'), data => {
                loadJS(data);
            })
        })
    });
})();