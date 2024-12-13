install:
	npm ci

publish: 
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage