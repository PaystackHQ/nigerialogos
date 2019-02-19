# Contributing

To contribute to this project:

1. Ensure your SVG and PNG logos have been properly optimised with tools like:
    [SVGOMG](https://jakearchibald.github.io/svgomg/) &
    [Squoosh](https://squoosh.app/) **(OptiPNG works well)** for SVG's and PNG's respectively


2. Add a folder to **logos** named after your company. In this folder, put the svg and png versions of your logo. The files should have the same name as the folder.

## Folder Structure
```
filename
|       filename.png
|       filename.svg
```
**Example**
```
polaris_bank
|       polaris_bank.png
|       polaris_bank.svg
```

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
