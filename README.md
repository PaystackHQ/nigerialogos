# NigeriaLogos

This is an open source project for downloading free, high quality vector logos of Nigerian companies. Visit the website at [nigerialogos.com](https://nigerialogos.com).

## Getting Started

NigeriaLogos is a simple web app built with HTML and plain Javascript. Styles are written in SCSS and compiled locally. Follow the instructions below to set up the project on your local machine for development and testing purposes. 

### Prerequisites
[Node.js](https://nodejs.org/)

### Running this project locally
- Clone the project to your computer
- To view the site locally, open the [index.html](https://github.com/PaystackHQ/nigerialogos/blob/master/index.html) file in your browser

If you're working on this, you'll need to compile the SCSS locally. Here's how to do this:

- Install dependencies with `npm install`.
- Run `npm run build` to build/generate CSS files. You can use `npm run scss` to build the CSS in real time.

### Allowing File Access

All logos are saved in the `logos` folder and referenced from the `logos.json` file in the code. If you run this project in Chrome, the logos might not load by default. This is because your browser needs special access to your local files. If this happens to you, here's how to fix it:

**Mac Users:** 
- Run `open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files` in your command line.

**Windows Users:** 
- Close your Chrome app completety.
- Open a command line window and run `Chrome.exe --allow-file-access-from-files`. 

If the `chrome.exe` command is not recognized, try this:

- From the cli, navigate to where your **chrome.exe** file is located e.g. `cd "C:\Program Files (x86)\Google\Chrome\Application"`.
- Run the `dir` command and confirm that the chrome.exe executable exists/ 
- Run `Chrome.exe --allow-file-access-from-files` again.

To know if you've enabled this, browse to **chrome://version/** in a Chrome browser window. If you're enable, you should see "**--allow-file-access-from-files**" under **Command Line**.

## Contributing

To learn more about contributing to NigeriaLogos, please read [contributing.md](https://github.com/PaystackHQ/nigerialogos/blob/master/contributing.md)


## Authors

* [**Demilade Olaleye**](https://github.com/Demilad)
* [**Chinonso Raymond**](https://twitter.com/ChinonsoRay) 
* [**Adedoyin Akande**](https://github.com/aeadedoyin)
