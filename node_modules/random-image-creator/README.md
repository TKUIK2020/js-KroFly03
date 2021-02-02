# random-image-creator

`random-image-creator` creates a image of random color and random two words for use as sample image in your project. It creates a hyperlink of website "http://placehold.it/", which you can use anywhere.

## How to install

```
npm install random-image-creator
```

## How to Use

Examples:

    var generateImage = require('random-image-creator');

    console.log(generateImage(280,400));
    
    //Output: "http://placehold.it/280x400/d56f26/0df0f1?txtsize=50&text=grow"


![alt text](http://placehold.it/280x400/d56f26/0df0f1?txtsize=50&text=grow)

Use it in your HTML file like this

```
<img src="http://placehold.it/280x400/d56f26/0df0f1?txtsize=50&text=grow" alt="User avatar" />
```
