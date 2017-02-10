#!/bin/bash 
export LANGUAGE='en_US.utf-8'
export LC_ALL='en_US.utf-8'

if [ -e "tmp.js" ];then
  rm tmp.js
fi

j=0
for i in $(ls code__*.js); do
  echo $i
  DATA=' '

  if [ "$j" -gt "0" ];then
     DATA=","
  fi

  echo $DATA >> tmp.js
  cat $i >> tmp.js

  j=$(expr $j + 1)
done

cp template.js lbs.js
printf "\n\nBuilding lbs.js"
perl -pe 's/^\/\/\$LIBIS/`cat tmp.js`/ge' -i lbs.js 3>/dev/null
rm tmp.js
#echo "Minifying lbs.js"
#curl -X POST -s --data-urlencode 'input@lbs.js' https://javascript-minifier.com/raw > ../lbs.min.js
mv lbs.js ../
