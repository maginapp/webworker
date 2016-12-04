/**
 * Created by Administrator on 2016/12/3.
 */

onconnect = function (e) {
    console.log(e);
    var _e = JSON.stringify(e);
    var port = e.ports[0];
    port.onmessage = function (e) {
        console.log('接受数据--share');
        // port.postMessage([e.data * e.data, _e, e]);
        port.postMessage([e.data * e.data, _e,JSON.stringify(e)]);
    }
    
}
