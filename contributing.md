# Contributing

To contribute to this project, follow the Pull Request Process using the following data template:

### Folder Structure
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

### Categories
```
* Banking / Financial Services
* Ecommerce / Construction / Real Estate
* FMCG / Conglomerate
* Gaming / Sports
* Cryptocurrency
```

## Pull Request Process

1. Ensure all SVG and PNG logos have been properly created and then optimised with tools like.
    [SVGOMG](https://jakearchibald.github.io/svgomg/) &
    [Squoosh](https://squoosh.app/) **(OptiPNG works well)** for SVG's and PNG's respectively
2. Create a folder for the svg and png logos using the template and add it to the **logos** folder.
3. Create a `JSON` object following the template and add to **js/logos.json**