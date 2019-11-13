# Capstone project: Sneakers Shop 

Within this repository you will find a HTML/CSS3 implementation of a sneakers shop, following the design guidelines proposed by [Dima Oxygen](https://www.behance.net/dimaoxygen) for Axel Arigato as presented in [this](https://www.behance.net/gallery/80392909/AXEL-ARIGATO-Website) website. 

## Getting started

No live version was deployed yet, so, in order to view the page, you must clone the repository using:

```bash
git clone https://github.com/Chincoya/Capstone-Sneakers-Shop
```

Then, you can run it in any browser that supports flexbox layout and it's properties as well as
```javascript
document.addEventListener("event", func);
```
syntax. 

## Insights
The main page is fully described in the index.html file, while the categories.html and product-X.html pages are filled using a javascript function that parses data and image addresses from .json files located on an auxiliar [repository](https://chincoya.github.io/temp-test/). This made on the interest of not needing to change code when updating content. JSON files are treated as elements to render, with non-object properties of the object made attributes of the elements and object properties made children, recursively, to define hierarchy. The object structure is as follows:

```json
{"type":"type-of-element","class":"some-class", "id":"Some-id", "style":"rule:value; rule:value;...;", "children-name":{"type":"..."}}
```

Where only type and children-name(for every children if there are any) fields are required. This is most useful when rendering elements that share layout but change in number and content.

### Author:

Daniel Chincoya | [@chincoya7](https://twitter.com/chincoya7)
