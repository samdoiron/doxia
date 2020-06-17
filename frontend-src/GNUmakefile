SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

ifeq ($(origin .RECIPEPREFIX), undefined)
  $(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif
.RECIPEPREFIX = >

ROLLUP := frontend-src/node_modules/rollup/dist/bin/rollup \
	-c frontend-src/rollup.config.js \
	--environment outdir:public

HTML_MIN := node frontend-src/node_modules/html-minifier-terser/cli.js \
	--collapse-boolean-attributes \
	--collapse-inline-tag-whitespace \
	--decode-entities \
	--minify-urls \
	--remove-attribute-quotes \
	--remove-comments \
	--remove-empty-attributes \
	--remove-optional-tags \
	--remove-redundant-attributes \
	--remove-script-type-attributes \
	--remove-style-link-type-attributes \
	--remove-tag-whitespace \
	--sort-attributes \
	--sort-class-name \
	--trim-custom-fragments \
	--use-short-doctype

CSS_MIN := frontend-src/node_modules/clean-css-cli/bin/cleancss -O 2

all: public/index.html
.PHONY: all

public/index.html: frontend-src/index.html public/main.css public/main.js public/worker.js
> $(HTML_MIN) frontend-src/index.html -o $@
> bin/replace-css-and-js $@ public/main.css public/main.js

public/main.css: frontend-src/.node_modules.sentinel $(shell fd . -e css frontend-src/css)
> $(CSS_MIN) $(shell fd . -e css frontend-src/css) -o $@

public/worker.js: .node_modules.sentinel $(shell fd . -e ts frontend-src/typescript)
> $(ROLLUP) --environment 'input:frontend-src/typescript/worker.ts'

public/main.js: .node_modules.sentinel $(shell fd . -e ts frontend-src/typescript)
> $(ROLLUP) --environment 'input:frontend-src/typescript/main.ts'

.node_modules.sentinel: frontend-src/package.json
> yarn install --cwd frontend-src
> touch $@
