# nodejs
#create db test and import collection restaurent
--> on mongodb container
1--> curl https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/dataset.json
2--> mongoimport --db test --collection restaurants --drop --file primer-dataset.json

