import cluster from 'node:cluster';
import * as os from 'node:os';

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
		
		cluster.on('online', function (worker) {
			console.log(`Worker ${worker.process.pid} is online`)
		}); 

		cluster.on('exit', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} died. Restarting`); 
			cluster.fork(); 
		});
	}

	callback();
}
