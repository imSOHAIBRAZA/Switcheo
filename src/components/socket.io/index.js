const io=require("socket.io-client");
const baseurl = (window.location.origin==="http://localhost:3000")?"http://localhost:8080":window.location.origin;

function makeconnction(){
    const socket=io.connect(baseurl);

}
export default makeconnction

