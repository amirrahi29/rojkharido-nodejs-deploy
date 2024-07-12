# Commands
1. aws ec2 instance
2. push code into GitHub
3. configure action on GitHub
4. create runner (go to setting action/runner)
5. Edit Inbound rules
6. ls and cd action-api
7. sudo apt update
8. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
9. sudo apt-get install nodejs
10. sudo apt-get install nginx
11. check version of node and npm
12. sudo npm i -g pm2 (process manager which continuously runs our application in background - 24X7)
13. runner active: 
         a. sudo ./svc.sh install
         b. sudo ./svc.sh start
14. ls (will get _work folder)
15. cd _work (then we will get our node project)
16. cd node-deploy-test/node-deploy-test
17. then run (pm2 start index.js)
18. pm2 restart index.js --name=api    or     pm2 restart api
19. update (pm2 restart index.js) command inside GitHub action yaml file
20. cd /etc/nginx/
21. ls - then open cd sites-available
22. ls then default will show
23. sudo nano default
24. paste this location code before location (please change the port number with 3000 which u mentioned into your project)
    
     location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

25.sudo nginx -t
26. sudo systemctl restart nginx
