picbookjs
=========

A simple Javascript library to display album photos from a Facebook Page.

## Instructions

You will need to include the ```picbook.js```. You can also include the ```example.css``` and customise yourself. Example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
<title></title>
    <script src="picbook.js"></script>
</head>

<body>
</body>
    
</html>
```

Initialise the library after the include, replace the ```id``` for your Facebook Album ID.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>

    <script src="picbook.js"></script>
    <script>
        picbook.init({
            id: '10150167782373951',
            limit: 22,
            start: function(){
                // album is loaded
                var album = picbook.album;
                ...
            },
            done: function(){
                // photos are loaded
                var photos = picbook.photos;
                ...
            }
        });
    </script>
</head>

<body>
</body>

</html>
```

### Configuration

```javascript
picbook.init({

    // Facebook Album ID
    id: '',
    
    // Number of photos to be loaded
    // Default is 25
    limit: 25

});
```
    
### Response

The library uses the Facebook Graph API and returns the following objects:

**[picbook.album](https://developers.facebook.com/docs/reference/api/album/)**

**[picbook.photos](https://developers.facebook.com/docs/reference/api/photo/)**

## Questions?

### Where do I get the album ID?

Simply go to an album page and copy the ID from the address bar URL ```?set=a.{ID}```

![Image](http://f.cl.ly/items/2s0L3f430q2l1I11101K/fb-album-id.gif)

### How about read an album that belongs to a User?

Not possible with this library. A user_photo [permission](https://developers.facebook.com/docs/reference/login/#permissions) is required which means you would have to create a Facebook app and implement the Facebook Login.

## Demo

View live [demo](http://henriquea.github.com/picbookjs/example.html).

