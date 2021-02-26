---
title: "InformaticaUtilGo"
summary: "A Go library to assist developers with Informatica. Has the ability to parse, evaluate, and validate
Informatica expressions."
github: https://github.com/michaelknowles/InformaticaUtilGo
---

[Informatica PowerCenter](https://www.informatica.com/products/data-integration/powercenter.html) is
a
system that allows developers to create and run Extract Transform Load (ETL) jobs in a low-code, integrated
environment.
Basically, developers create _workflows_ that Extract some data from one source, Transform it, and Load it to some
target. I call it low-code because developers create these workflows in a
[Visual Programming Language](https://en.wikipedia.org/wiki/Visual_programming_language), with the ability to drill down into elements
and write custom code using Informatica's
[Transformation Language](https://docs.informatica.com/data-integration/powercenter/10-4-0/transformation-language-reference/the-transformation-language/the-transformation-language-overview.html).

There are several problem areas when working with Informatica that this library tries to tackle, as it's meant to be a general purpose library.
More detailed information on each of these is linked below as I work on them. This library is a constant work in progress.