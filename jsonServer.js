// server.js
const dbPort = process.env.npm_package_config_DB_PORT;

// console.log(process.env.npm_package_config_DB_PORT);
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('data/db.json')
// const middlewares = jsonServer.defaults()
 
// server.use(middlewares)
// server.use(router)
// server.listen(process.env.npm_package_config_DB_PORT, () => {
//   console.log('JSON Server is running')
//   console.log(`http://localhost:${process.env.npm_package_config_DB_PORT}/posts`)
// });


const { exec } = require('child_process');
const command = `npx json-server -w data/db.json -p ${dbPort}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});