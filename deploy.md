# nginx配置示例

```text
server {
listen 443;
server_name buffalo-crypto.space;

    # ssl配置
    # ...

    # gzip配置（建议加上）
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 4;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/javascript text/xml text/javascript;

    # 策略配置（主要为了去除地址栏中的 # 路由）
    location / {
        root   /buffalo-website-new/dist; # build 后的文件存放目录
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    # 浏览器跨域问题 需要配置代理
    # location /xxx {
    #    proxy_pass http://xxx;
    #    proxy_set_header X-Real-IP $remote_addr;
    #    proxy_set_header REMOTE-HOST $remote_addr;
    #    access_log logs/access-xxx.log;
    # }
}
```
