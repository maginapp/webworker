// console.log(1);
// console.log(2);


var worker = new SharedWorker('sharedworker.js', ' mysharedworker ');

// 从端口接收数据 , 包括文本数据以及结构化数据
worker.port.onmessage = function (event) {
    console.log('define your logic here...');
};
// 向端口发送普通文本数据
worker.port.postMessage('put your message here … ');
// 向端口发送结构化数据
worker.port.postMessage({ username: 'usertext', 'live_city':
    ['data-one', 'data-two', 'data-three','data-four']});