
<!-- README.md is generated from README.Rmd. Please edit that file -->

# `{liturge}`

<!-- badges: start -->

<!-- badges: end -->

## Installation

You can install the development version of `{liturge}` like so:

``` r
# FILL THIS IN! HOW CAN PEOPLE INSTALL YOUR DEV PACKAGE?
```

## Run

You can launch the application by running:

``` r
liturge::run_app()
```

## About

You are reading the doc about version : 0.0.1

This README has been compiled on the

``` r
Sys.time()
#> [1] "2025-04-15 20:43:45 EDT"
```

Here are the tests results and package coverage:

``` r
devtools::check(quiet = TRUE)
#> ══ Documenting ═════════════════════════════════════════════════════════════════
#> ℹ Installed roxygen2 version (7.3.2) doesn't match required (7.1.1)
#> ✖ `check()` will not re-document this package
#> WARNING: Rtools is required to build R packages, but no version of Rtools compatible with R 4.5.0 was found. (Only the following incompatible version(s) of Rtools were found: 3.5, 4.2, 4.4.6104)
#> 
#> Please download and install Rtools 4.5 from https://cran.r-project.org/bin/windows/Rtools/.
#> 
#> WARNING: Rtools is required to build R packages, but is not currently installed.
#> 
#> Please download and install the appropriate version of Rtools for 4.5.0 from
#> https://cran.r-project.org/bin/windows/Rtools/.
#> Error: Could not find tools necessary to compile a package
#> Call `pkgbuild::check_build_tools(debug = TRUE)` to diagnose the problem.
```

``` r
covr::package_coverage()
#> Error in loadNamespace(x): there is no package called 'covr'
```
