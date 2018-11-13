
var fs = require('fs');
let peerPem = fs.readFileSync('/home/luatcoi/Project/src/Lab/blockchain_go/driving-files/crypto-config/peerOrganizations/org1/peers/peer0.org1/tls/ca.crt');
let ordererPem = fs.readFileSync('/home/luatcoi/Project/src/Lab/blockchain_go/driving-files/crypto-config/ordererOrganizations/orgorderer/orderers/orderer1.orgorderer/tls/ca.crt');
module.exports = {
    PEER_PEM: peerPem,
    ORDERER_PEM: ordererPem,
    PEER_HOST: "13.229.68.163:30501",
    EVENT_HOST: "13.229.68.163:30503",
    ORDERER_HOST: "18.136.187.101:32001",
    ORDERER_DOMAIN: "orderer1.orgorderer",
    PEER_DOMAIN: "peer0.org1",
    TLS_ENABLED: "true",
    MSPID: "Org1MSP",
    CA_SERVER_NAME: "ca",
    CA_HOST: "13.229.68.163:30500"
};
