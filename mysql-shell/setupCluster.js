var dbPass = "123456"
var clusterName = "devCluster"

try {
	print('Setting up InnoDB cluster...\n');
	shell.connect('root@mysql-server-01:3306', dbPass)
	var cluster = dba.createCluster(clusterName);
	if (typeof cluster !== 'undefined') {
		print('Adding instances to the cluster.');
		cluster.addInstance({user: "root", host: "mysql-server-02", password: dbPass})
		print('.');
		cluster.addInstance({user: "root", host: "mysql-server-03", password: dbPass})
		print('.\nInstances successfully added to the cluster.');
		print('\nInnoDB cluster deployed successfully.\n');
		cluster.status();
	} else {
		// Existed Cluster
		var cluster = dba.getCluster();
		cluster.rescan();
		cluster.status();
	}
} catch(e) {
  	print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}
