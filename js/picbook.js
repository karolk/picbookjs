var picbook = {
    id: undefined,
    album: undefined,
    photos: undefined,
    cb: undefined,
    graph: 'https://graph.facebook.com/',
    loaded: false,

    init: function(params){
        this.id = params.id;
        this.limit = params.limit ? params.limit : 25;
        this.cb = params.done;
        this.start = params.start ? params.start : undefined;
        this.fetch(this.graph + this.id, true, 'picbook.photos');
        this.loaded = false;
    },

    fetch: function(url, isAsync, callback) {
        var js = document.createElement('script'); 
        js.type = 'text/javascript'; js.async = isAsync;
        js.src = url + '?limit=' + this.limit +'&callback=' + callback;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(js, s.nextSibling);
    },

    photos: function(response) {
        this.album = response;
        this.fetch(this.graph + this.id + '/photos', true, 'picbook.done');
        if (this.start != undefined) this.start(response);
    },

    done: function(response) {
        this.photos = response.data;
        if (typeof this.cb  === 'function') this.cb();
        this.loaded = true;
    },

    format: function(time) {
        var d = new Date(time.split('+')[0]);
            day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
            month = (d.getMonth()+1) < 10 ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
            year = d.getFullYear();
        return day + '/' + month + '/' + year;
    }
};