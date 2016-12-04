/**
 * Created by Administrator on 2016/12/3.
 */
var basePath = 'http://cjvp.cjmex.cn/wpfront/';

// require('./jquery');
// console.log($('s'));




onmessage = function (e) {
    var data = e.data;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "lengthytaskhandler.ashx");
    xhr.
    xhr.onload = function(){
        postMessage(xhr.responseText);
    };
    xhr.send();


// $.ajax({
//         url: basePath + data[0],
//         type: 'post',
//         success: function (data) {
//             postMessage(data);
//         }
//     })
}