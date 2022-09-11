function showLog(total) {
    for (let i = 0; i < total; i++) {
        console.log(i+"KONTOL");
    }
}

addEventListener("message", function(MessageEvent){
    const total=MessageEvent.data;
    showLog(total);
    postMessage("Done");
});