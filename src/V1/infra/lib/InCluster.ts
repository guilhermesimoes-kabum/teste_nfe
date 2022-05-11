const cluster = require('cluster');
const os = require('os')

export function inCluster(callback: Function, workers? : number) {
	if(cluster.isPrimary) {
		process.on('SIGINT', function () {
			for(let id in cluster.workers) {
				cluster.workers[id].kill();
			}
			process.exit(0);
		});

		const cpus = os.cpus().length;
		if(workers == null || workers > cpus) workers = cpus;

		for(let i = 0; i < workers; i++) cluster.fork(); 
		
		cluster.on('exit', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} died. Restarting`); 
			cluster.fork(); 
		});
	}

	callback();
}
