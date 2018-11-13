
ID=$1

node invoke.js -u user4 --channel mychannel --chaincode mycc1 -m initResult  -a "$ID" -a "2222" -a "Nam" -a "3333" -a "toan" -a "4444" -a "hung" -a "Gioi" -a "20172"
    