# PokeDeck

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Prerequisites

Install:
- NodeJS LTS
- latest yarn

Before first usage, please run `make install`.

## Dev server

Run `make start`.

## Production Build

Run `make build`.

## Linting

Run `make lint`.

## Unit tests

Run `make test`.

## Features
- the app caches requests for single Pokemon
- during init phase the app downloads a full dictionary of Pokemon - this way it's impossible to navigate to a non-existing one
- the detail page recognises basic keyboard navigation (horizontal arrows and the escape button)
- horizontal arrow keys also work on the list page

## TO-DO
- fix the loader - this one is not working during the init phase, it's also not very customisable
- implement caching in the Pokemon list
- fix tests and add more coverage
- investigate build-time rendering
