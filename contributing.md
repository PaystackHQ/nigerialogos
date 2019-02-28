# Contributing

There are two ways to contribute to this project:

## Using the form
You can upload your logos directly to the online form here: https://airtable.com/shr3BAQio2rPWaGN7. This usually takes about 72 hours to be reviewed and merged.

## Sending in a pull request
Another way to contribute is to directly send in a pull request. Here are some guidelines for this:

1. Ensure your logos have been properly optimised with tools like:
    [SVGOMG](https://jakearchibald.github.io/svgomg/) &
    [Squoosh](https://squoosh.app/) **(OptiPNG works well)**. Kindly ensure your file sizes are as small as possible. Also, your SVG file should be text-only and not contain any bitmaps.

2. Add a folder to **logos** named after your company. In this folder, put the svg and png versions of your logo. The files should have the same name as the folder and should be lowercase. If your company name has multiple words, kindly separate them with an underscore.

### Folder Structure
```
company_name
|       company_name.png
|       company_name.svg
```

3. In **[js/logos.json](https://github.com/PaystackHQ/nigerialogos/blob/master/js/logos.json)**, add a `JSON` entry for your company

### JSON Object
```
{
	"title": "Company Name",
	"filename": "company_name",
	"category": "Category"
}
```
**Example**
```
{
	"title": "Polaris Bank",
	"filename": "polaris_bank",
	"category": "Banking / Financial Services"
}
```


4. If your company category is not reflected in categories section *below*, feel free to use a new category. If you do so, kindly edit this file (**[/contributing.md](https://github.com/PaystackHQ/nigerialogos/blob/master/contributing.md)**) in your PR as well.

### Categories
```
* Banking / Financial Services
* Ecommerce / Construction / Real Estate
* FMCG / Conglomerate
* Gaming / Sports
* Cryptocurrency
* Health / NGO
* Branding
* EdTech / InfoTech
* Software / ICT
* Telecommunication / ISP
```

**NOTE**: _Pull requests are usually reviewed within 24 hours. Once your pull request is merged, you should see your logo on the site a few minutes after._
