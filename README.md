# vue-tools

**[WIP]** Offline Tools For Vue Component

## Usage

```bash
# generate a new component
$ vue-tools init custom-component
# run karma tests
$ vue-tools run karma
# run saucelabs tests
$ vue-tools run saucelabs
```

## `.vuerc`

Configure your test setup (for karma):

```lson
{
  "karma": {
    // list of files / patterns to load in the browser
    "files": [],
    // list of postcss plugins to use
    "postcss": [],
    "port": 9898,
    "browsers": ["PhantomJS"],
    "singleRun": true
  }
}
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
