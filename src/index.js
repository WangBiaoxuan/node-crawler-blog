let Crawler = require("crawler")
let crawleredUrl = [];
var c = new Crawler({
  maxConnections : 1000,
  // This will be called for each crawled page
  callback : function (error, res, done) {
      if(error){
          console.log(error);
      }else{
          var $ = res.$;
          console.log('开始了。。。')
          $("#related_entries ul li").each((idx, item) => {
            let nextUrl = $(item).find('a').attr('href');
            if (crawleredUrl.indexOf(nextUrl) == -1) {
              crawleredUrl.push(nextUrl)
              console.log(crawleredUrl);
              c.queue(nextUrl)
            }
            /*
            if (crawleredUrl.length >= 30) {
              console.log(crawleredUrl)
              console.log('结束了。。。')
              // return;
            }
            */
          });
          
      }
      done();
  }
});

c.queue('http://www.ruanyifeng.com/blog/2017/06/smtp-protocol.html');
