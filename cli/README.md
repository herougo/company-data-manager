# command-data-manager

Take your json annotation files, validate them, and finally aggregate all of them into a TSV for spreadsheet purposes.

## Build

```
npm run build
```

## Validate 1 File

```
npm run validate -- ..\frontend\src\data\exampleJsonData.json
```

## Validate All Files in a Folder and Aggregate Them Into a TSV

```
mkdir data; mkdir data/input; mkdir data/output
npm run to-tsv -- ./data/input ./data/output/output.tsv
```
