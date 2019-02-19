# Contributing

There are two ways to contribute to this project:

### Using the form
You can upload your logos directly to the online form here: https://airtable.com/shr3BAQio2rPWaGN7. This usually takes about 72 hours to be reviewed and merged.

### Sending in a pull request
Another way to contribute is to directly send in a pull request. Here are some guidelines for this:

1. Ensure your logos have been properly optimised with tools like:
    [SVGOMG](https://jakearchibald.github.io/svgomg/) &
    [Squoosh](https://squoosh.app/) **(OptiPNG works well)**

Kindly ensure your file sizes are as small as possible. Also, your SVG file should be text-only and not contain any bitmaps.

2. Add a folder to **logos** named after your company. In this folder, put the svg and png versions of your logo. The files should have the same name as the folder.

## Folder Structure
```
company_name
|       company_name.png
|       company_name.svg
```

Your folder and file name should be lowercase. If your company name has multiple words, separate them with an underscore.

3. Finally, in **js/logos.json**, add a `JSON` entry for your company

## JSON Object
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
```

Pull requests are usually reviewed within 24 hours. Once your pull request is merged, you should see your logo on the site a few minutes after.