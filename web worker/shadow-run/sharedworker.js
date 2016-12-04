/**
 * Created by Administrator on 2016/12/3.
 */


onmessage = function (e) {
    var data = e.data;
    console.log(data);
    if(typeof data == 'string'){
        postMessage('String');
        console.log(2);
    }else if(typeof data == 'object'){
        postMessage('Object')
        console.log(2);
    }
}